<?php

use Illuminate\Database\Seeder;

class SocialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('social')->insert([
            [
                'name' => 'Facebook',
                'alias' => 'facebook',
                'url' => 'https://www.facebook.com/helloleotech',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'image' => 'facebook.jpg',
            ],
            [
                'name' => 'Instagram',
                'alias' => 'instagram',
                'url' => 'https://www.instagram.com/helloleotech',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'image' => 'instagram.jpg',
            ],
            [
                'name' => 'Twitter',
                'alias' => 'twitter',
                'url' => 'https://twitter.com/helloleotech',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'image' => 'twitter.jpg',
            ],
            [
                'name' => 'Linkedin',
                'alias' => 'linkedin',
                'url' => 'https://www.linkedin.com/in/helloleotech/',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'image' => 'linkedin.jpg',
            ],
            [
                'name' => 'Youtube',
                'alias' => 'youtube',
                'url' => 'https://www.youtube.com/channel/UCBdv9O5dJI8WKxjoRPo9_lw?view_as=subscriber',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'image' => 'youtube.jpg',
            ],
        ]);

    }
}
