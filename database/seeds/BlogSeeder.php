<?php

use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('blog')->insert([
            [
                'name' => 'Git Workflow',
                'alias' => 'git-workflow',
                'description' => 'A Git Workflow ',
                'image' => 'git-work-flow.jpg',
                'summary' => 'A Git Workflow is a  changes.',
                'body' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            ],
            [
                'name' => 'What is Lorem Ipsum?',
                'alias' => 'what-is--lorem-ipsum',
                'description' => 'Lorem Ipsum is simply .',
                'image' => 'what-is--lorem-ipsum.jpg',
                'summary' => 'Lorem Ipsum is simply .',
                'body' => 'Lorem Ipsum is simply .',
            ],
            [
                'name' => 'Hoang Tra',
                'alias' => 'hoangtra',
                'description' => 'pro hot boy nhat team.',
                'image' => 'leo.jpg',
                'summary' => 'Lorem Ipsum is simply .',
                'body' => 'Lorem Ipsum is simply .',
            ],

        ]);
    }
}
