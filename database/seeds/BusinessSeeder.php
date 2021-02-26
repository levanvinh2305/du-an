<?php

use Illuminate\Database\Seeder;

class BusinessSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('business')->insert([
            [
                'name' => 'Startup',
                'alias' => 'startup',
                'description' => 'Startup Business Ideas That Can Make You Money.',
                'image'=>'/img/business/startup.jpg',
                'summary' => 'Startup Business Ideas That Can Make You Money.',
                'body' => 'Lorem Ipsum is simply .',
            ],
            [
                'name' => 'Business',
                'alias' => 'business',
                'description' => 'I’d love to chat with you about tech or potential business, shot me an email.',
                'image'=>'/img/business/business.jpg',
                'summary' => 'I’d love to chat with you about tech or potential business, shot me an email.',
                'body' => 'Lorem Ipsum is simply .',
            ],
        ]);
    }
}
