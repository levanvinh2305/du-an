<?php

use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('contact')->insert([
            [
                'name' => 'Get In Touch',
                'description' => 'I’d love to chat with you about tech or potential business, shot me an email.',
                'email' => 'contact@helloleotech.com',
                'phone' =>'0944947786',
            ]

        ]);
    }
}
