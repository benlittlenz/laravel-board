<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\NoteResource;

use App\Project;
use App\Note;

class NoteController extends Controller
{

    // public function index(): NoteResource {
    //     return new NoteResource(Note::paginate());
    // }

    public function show($project): NoteResource {
        $notes = Note::all();
        //dd($notes);
        $list =  $notes->where('project_id', $project);
        //dd($list);
        return new NoteResource($list);
    }

    public function store(Project $project) {

        request()->validate([
            'body' => 'required'
        ]);

        $project->addNote(request('body'));
        // $note = auth()->user()->notes()->create($note);
        // $request->validate([
        //     'body' => 'required'
        // ]);

        // $note = Notes::create($request->all());

    }
}
