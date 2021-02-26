<?php

use Illuminate\Database\Seeder;

class SliderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('slider')->insert([
            [
                'name' => 'FREELANCE FULL STACK DEVELOPER',
                'alias' => 'freelane-full-stack-develop',
                'description' => 'My name is Leo (Hoang). My life’s mission is to become a professional software engineer, and applying technology to life.',
                'image'=>'/img/slider/leo-tech.png'
            ],
            [
                'name' => 'Teamwork',
                'alias' => 'teamwork',
                'description' => 'Teamwork is the collaborative effort of a group to achieve a common goal or to complete a task in the most effective and efficient way. This concept is seen within the greater framework of a team, which is a group of interdependent individuals who work together towards a common goal.',
                'image'=>'/img/slider/teamwork.png',
            ],

        ]);
    }
}
