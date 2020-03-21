<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Custom\Hasher;
use App\Http\Controllers\APIController;

use Illuminate\Http\Request;
use App\Http\Resources\ProjectResource;
use App\Http\Resources\ProjectResourceCollection;
use App\Project;
use App\Note;

class ProjectController extends ApiController
{
    public function show(Project $project): ProjectResource {
        return new ProjectResource($project);
    }

    public function index(): ProjectResourceCollection {
        return new ProjectResourceCollection(Project::paginate());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        if (! $user = auth()->setRequest($request)->user()) {
            return $this->responseUnauthorized();
        }

        $attributes = $request->validate([
            'title' => 'required',
            'description' => 'required'
        ]);

        try {
            $todo = Project::create([
                'owner_id' => $user->id,
                'title' => request('title'),
                'description' => request('description'),
            ]);
            return response()->json([
                'status' => 201,
                'message' => 'Resource created.',
                'id' => $todo->id
            ], 201);
        } catch (Exception $e) {
            return $this->responseServerError('Error creating resource.');
        }
        //$project = auth()->user()->projects()->create($project);
        // $project = Project::create($request->all());

        // return $project;
    }

    //TO BE PASSED AS RAW DATA
    public function update(Project $project, Request $request){
        $project->update($request->all());
        return new ProjectResource($project);
    }

    public function destroy(Project $project) {
        $project->delete();

        return response()->json();
    }
}
