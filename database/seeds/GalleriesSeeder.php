<?php

use Illuminate\Database\Seeder;

class GalleriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('galleries')->insert([
            [
                'name' => 'Git Workflow',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'image'=>'/img/teams/hoangtra1.jpg',
                'url' =>'https://www.facebook.com/in/helloleotech/',
            ],
            [
                'name' => 'Hoang Tra',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'image'=>'/img/teams/hoangtra1.jpg',
                'url'=>'https://www.facebook.com/in/helloleotech/',
            ],
        ]);
    }
}
