<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

use App\User;
use App\Project;

class ProjectTest extends TestCase
{

    use DatabaseMigrations;

    private $api_auth = '/api/v1/auth';
    private $api_project = '/api/project';
    private $project = [
        'title' => 'Example',
        'description' => 'blaaahaaa'
    ];
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_a_project_requires_owner()
    {
        $user = factory(User::class)->create();
        //dd($user);
        $response = $this->actingAs($user)->json('POST', $this->api_project, $this->project);
        dd($response);
        // $response->assertStatus(201);

        // //dd($response);
        // $this->assertDatabaseHas('projects', [
        //     'id' => $response->getData()->id,
        //]);
    }
}
