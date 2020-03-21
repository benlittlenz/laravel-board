<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Note;
use Faker\Generator as Faker;
//use App\Project;

$factory->define(Note::class, function (Faker $faker) {
    return [
        'body' => $faker->sentence,
        'project_id' => function() {
            return factory(App\Project::class)->create()->id;
        }
    ];
});
