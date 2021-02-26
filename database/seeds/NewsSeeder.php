<?php

use Illuminate\Database\Seeder;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('news')->insert([
            [
                'name' => 'Git Workflow',
                'alias' => 'git-workflow',
                'image'=>'/img/teams/hoangtra1.jpg',
                'summary' => 'A Git Workflow is a  changes.',
                'description' => 'A Git Workflow ',
                'body' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            ],
            [
                'name' => 'What is Lorem Ipsum?',
                'alias' => 'what-is--lorem-ipsum',
                'image'=>'/img/teams/hoangtra1.jpg',
                'summary' => 'Lorem Ipsum is simply .',
                'description' => 'Lorem Ipsum is simply .',
                'body' => 'Lorem Ipsum is simply .',
            ], [
                'name' => 'Le Vinh',
                'alias' => 'levinh',
                'image'=>'/img/teams/hoangtra1.jpg',
                'summary' => 'Lorem Ipsum is simply .',
                'description' => 'Lorem Ipsum is simply .',
                'body' => 'Lorem Ipsum is simply .',
            ],
            [
                'name' => 'Hoang Tra',
                'alias' => 'hoangtra',
                'image'=>'/img/teams/hoangtra1.jpg',
                'summary' => 'Lorem Ipsum is simply .',
                'description' => 'pro hot boy nhat team.',
                'body' => 'Lorem Ipsum is simply .',
            ],

        ]);
    }
}
