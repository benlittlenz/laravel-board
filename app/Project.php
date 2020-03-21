<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Project extends Model
{
    protected $guarded = []; // YOLO

    protected $fillable = [
        'title',
        'description'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($project) {
            $project->{$project->getKeyName()} = (string) Str::uuid();
        });
    }

    public function getIncrementing()
    {
        return false;
    }

    public function getKeyType()
    {
        return 'string';
    }

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
