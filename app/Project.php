<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'title',
        'description'
    ];

    public function owner() {
        return $this->belongsTo(User::class);
    }

    // public function notes()
    // {
    //     return $this->hasMany(Notes::class);
    // }

    // public function addNote($body)
    // {
    //     return $this->notes()->create(compact('body'));
    // }
}
