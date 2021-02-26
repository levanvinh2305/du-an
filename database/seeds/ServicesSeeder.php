<?php

use Illuminate\Database\Seeder;

class ServicesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('services')->insert([
            [
                'name' => 'Our Services',
                'alias' => 'Our-Services',
                'image'=>'/img/Services/web.jpg',
                'summary' => 'Lorem Ipsum is simply .',
                'description' => 'We provide are outsourcing and production services for Web, Mobile, ERP and CMS Development to Small and medium-sized enterprises (SME). .',
                'body' => 'Lorem Ipsum is simply .',
            ],
            [
                'name' => 'Our Services',
                'alias' => 'Our-Services',
                'image'=>'/img/Services/web.jpg',
                'summary' => 'Lorem Ipsum is simply .',
                'description' => 'We provide are outsourcing and production services for Web, Mobile, ERP and CMS Development to Small and medium-sized enterprises (SME). .',
                'body' => 'Lorem Ipsum is simply .',
            ],
        ]);
    }
}
