<?php

use Illuminate\Database\Seeder;

class FamiliesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('families')->insert([
            [
                'fullname' => 'Hoang Tra',
                'description' => 'My name is Leo (Hoang). My life’s mission is to become a professional software engineer, and applying technology to life.
                #LoveBook, I have been following this quote "Doing what you like is freedom. Liking what you do is happy" as the purpose of my life!
                #LoveCode, I like to code, I love to build things with code and learn new things.
                #LoveCoffee, I love coffee, and I start every day with a morning cup of coffee.
                Finally, Which is my perfect day.',
                'image' => '/img/team/hoang-tra.jpg',
                'nickname' => 'LEO',
                'role' => 'CEO and Founder',
                'facebook' => 'https://www.facebook.com/helloleotech',
                'instagram' => 'https://www.instagram.com/helloleotech',
                'twitter' => 'https://twitter.com/helloleotech',
                'linkedin' => 'https://www.linkedin.com/in/helloleotech',
                'youtube' => 'https://www.youtube.com/channel/UCBdv9O5dJI8WKxjoRPo9_lw?view_as=subscriber'
            ],
            [
                'fullname' => 'Thuan Ho',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'image'=>'/img/team/thuan-ho.jpg',
                'nickname' => 'Rex',
                'role' => 'Software Engineer',
                'facebook' => 'https://www.facebook.com/helloleotech',
                'instagram' => 'https://www.instagram.com/helloleotech',
                'twitter' => 'https://twitter.com/helloleotech',
                'linkedin' => 'https://www.linkedin.com/in/helloleotech',
                'youtube' => ''
            ],
            [
                'fullname' => 'Dat Nguyen',
                'description' => 'Great to meet you! My name is Quoc Dat, just can call me DatApple. I was born and raised in Kon Tum province, but now I have lived in Da Nang for 4 years. Currently I am a internship at LeoTech. My hobbies are  writting code with my friends on the weekends. with a passion for  programing I choose this industry. Not only, it helps me to think problem solving but also supports me cash up from my work. Beside, I usually choose the coffee shop as my workplace because the quiet space is better for my work.',
                'image'=>'/img/team/dat-nguyen.jpg',
                'nickname' => 'Apple',
                'role' => 'Software Engineer',
                'facebook' => 'https://www.facebook.com/helloleotech',
                'instagram' => 'https://www.instagram.com/helloleotech',
                'twitter' => 'https://twitter.com/helloleotech',
                'linkedin' => 'https://www.linkedin.com/in/helloleotech',
                'youtube' => ''
            ],
            [
                'fullname' => 'Vinh Le',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                'image'=>'/img/team/vinh-le.jpg',
                'nickname' => 'Justin',
                'role' => 'Software Engineer',
                'facebook' => 'https://www.facebook.com/helloleotech',
                'instagram' => 'https://www.instagram.com/helloleotech',
                'twitter' => 'https://twitter.com/helloleotech',
                'linkedin' => 'https://www.linkedin.com/in/helloleotech',
                'youtube' => ''
            ],
            [
                'fullname' => 'Han Nguyen',
                'description' => 'Hi, I am Han, I am 23 years old and I am from Quang Tri Vietnam. My hobbies are going to soccer with my friends, writing code and learning English. I really like the culture and the way Europeans work and the hit songs on social media too. The singer Adam Levine is my idol.
                I choose to be a programmer to code because I like technology, the products made by technology and it is very relevant to today times.
                In addition, working with your team will increase your ability to understand and gain experience.
                I want to make a product that the whole world knows about and uses.',
                'image'=>'/img/team/han-nguyen.jpg',
                'nickname' => 'BLUE',
                'role' => 'Software Engineer',
                'facebook' => 'https://www.facebook.com/helloleotech',
                'instagram' => 'https://www.instagram.com/helloleotech',
                'twitter' => 'https://twitter.com/helloleotech',
                'linkedin' => 'https://www.linkedin.com/in/helloleotech',
                'youtube' => ''
            ],
            [
                'fullname' => 'Hai Dao',
                'description' => 'I want to make a product that the whole world knows about and uses.',
                'image'=>'/img/team/hai-dao.jpg',
                'nickname' => 'Twist',
                'role' => 'Software Engineer',
                'facebook' => 'https://www.facebook.com/helloleotech',
                'instagram' => 'https://www.instagram.com/helloleotech',
                'twitter' => 'https://twitter.com/helloleotech',
                'linkedin' => 'https://www.linkedin.com/in/helloleotech',
                'youtube' => ''
            ],
            [
                'fullname' => 'Linh Tuong',
                'description' => 'I want to make a product that the whole world knows about and uses.',
                'image'=>'/img/team/linh-tuong.jpg',
                'nickname' => 'Kenny',
                'role' => 'Software Engineer',
                'facebook' => 'https://www.facebook.com/helloleotech',
                'instagram' => 'https://www.instagram.com/helloleotech',
                'twitter' => 'https://twitter.com/helloleotech',
                'linkedin' => 'https://www.linkedin.com/in/helloleotech',
                'youtube' => ''
            ],
        ]);
    }
}
