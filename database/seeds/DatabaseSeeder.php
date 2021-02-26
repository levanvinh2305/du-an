<?php

use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(NewsSeeder::class);
        $this->call(CoursesSeeder::class);
        $this->call(SliderSeeder::class);
        $this->call(SocialSeeder::class);
        $this->call(Company_InfoSeeder::class);
        $this->call(BlogSeeder::class);
        $this->call(BannerSeeder::class);
        $this->call(FamiliesSeeder::class);
        $this->call(ContactSeeder::class);
        $this->call(GalleriesSeeder::class);
        $this->call(Ai_Machine_LearningSeeder::class);
        $this->call(BusinessSeeder::class);
        $this->call(ServicesSeeder::class);
        // $this->call(CustomerSeeder::class);
        // $this->call(UsersSeeder::class);



    }
}
