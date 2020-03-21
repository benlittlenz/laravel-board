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

class ProjectController extends ApiController
{
    public function show(Project $project): ProjectResource {
        return new ProjectResource($project);
    }

    public function index(): ProjectResourceCollection {
        return new ProjectResourceCollection(Project::paginate());
    }

    public function store(Request $request) {

        $attributes = $request->validate([
            'title' => 'required',
            'description' => 'required'
        ]);
        $project = auth()->user()->projects()->create($project);

        //$project = Project::create($request->all());

        return $project;
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
