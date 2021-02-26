<?php

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('category')->insert([
            [
                'name' => 'Home',
                'alias' => 'home',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'image' => '/img/category/home.jpg',
                'parent_id' => '1',
            ],
            [
                'name' => 'Team',
                'alias' => 'team',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'image' => '/img/category/team.jpg',
                'parent_id' => '1',
            ],
            [
                'name' => 'Blog',
                'alias' => 'blog',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'image' => '/img/category/blog.jpg',
                'parent_id' => '1',
            ],
            [
                'name' => 'Courses',
                'alias' => 'courses',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'image' => '/img/category/courses.jpg',
                'parent_id' => '1',
            ],
            [
                'name' => 'Contact',
                'alias' => 'contact-us',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'image' => '/img/category/contact-us.jpg',
                'parent_id' => '1',
            ],
            [
                'name' => 'Services',
                'alias' => 'services',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'image' => '/img/category/services.jpg',
                'parent_id' => '6',
            ],
            [
                'name' => 'For All Business Inquiries Contact',
                'alias' => 'for-all-business-inquiries-contact',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'image' => '/img/category/for-all-business-inquiries-contact.jpg',
                'parent_id' => '7',
            ],
            [
                'name' => 'Our Services',
                'alias' => 'our-services',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'image' => '/img/category/our-services.jpg',
                'parent_id' => '8',
            ],
            [
                'name' => 'AI & Machine Learning',
                'alias' => 'ai-and-machine-learning',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'image' => '/img/category/ai-and-machine-learning.jpg',
                'parent_id' => '9',
            ],
        ]);
    }
}
