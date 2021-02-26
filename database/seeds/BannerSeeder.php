<?php

use Illuminate\Database\Seeder;

class BannerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('banner')->insert([
            [
                'name' => 'Good People. Good Doing. Perfect',
                'description' => 'Applying Technology To Life',
                'image' => '/img/banner/business.jpg'
            ]
        ]);
    }
}
