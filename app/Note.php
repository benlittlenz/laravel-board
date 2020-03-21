<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Project;

class Note extends Model
{
    protected $fillable = ['body'];

    /**
     * The relationships that should be touched on save.
     *
     * @var array
     */
    protected $touches = ['project'];



    // public function owner() {
    //     return $this->hasMany(Note::class, 'project_id')->orderBy('updated_at', 'desc');
    // }

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
