<?php

use Illuminate\Database\Seeder;

class CoursesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('courses')->insert([
            [
                'name' => 'Mastering HTML & CSS3 & JavaScript Course',
                'alias' => 'mastering-html5-css3-javascript-course',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'image'=>'/img/courses/mastering-html5-css3-javascript-course.jpg',
                'summary'=>'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'body' =>'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                'author' => 'Leo Tech',
                'price' => 'Free',
            ],
            [
                'name' => 'Mastering React Course',
                'alias' => 'mastering-react-course',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'image'=>'/img/courses/mastering-react-course.jpg',
                'summary'=>'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'body' =>'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                'author' => 'Leo Tech',
                'price' => '1800000',
            ],
            [
                'name' => 'Mastering Angular Course',
                'alias' => 'mastering-angular-course',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'image'=>'/img/courses/mastering-angular-course.jpg',
                'summary'=>'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'body' =>'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                'author' => 'Leo Tech',
                'price' => '1800000',
            ],
            [
                'name' => 'Mastering Python Course',
                'alias' => 'mastering-python-course',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'image'=>'/img/courses/mastering-python-course.jpg',
                'summary'=>'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'body' =>'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                'author' => 'Leo Tech',
                'price' => '1800000',
            ],
            [
                'name' => 'Mastering Nodejs Course',
                'alias' => 'mastering-nodejs-course',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'image'=>'/img/courses/mastering-nodejs-course.jpg',
                'summary'=>'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'body' =>'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                'author' => 'Leo Tech',
                'price' => '1800000',
            ],
            [
                'name' => 'Mastering Laravel Course',
                'alias' => 'mastering-angular-course',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'image'=>'/img/courses/mastering-angular-course.jpg',
                'summary'=>'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'body' =>'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                'author' => 'Leo Tech',
                'price' => '1800000',
            ],
        ]);
    }
}
