<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\User;

class Project extends Model
{
    protected $guarded = []; // YOLO

    protected $fillable = [
        'title',
        'description',
        'owner_id',
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

    /**
     * A Todo belongs to a User.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function owner() {
        return $this->belongsTo(User::class);
    }


    public function notes()
    {
        return $this->hasMany(Project::class, 'project_id')->orderBy('updated_at', 'desc');
    }

    // public function addNote($body)
    // {
    //     return $this->notes()->create(compact('body'));
    // }
}
