<?php

use Illuminate\Database\Seeder;

class Company_InfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('company_info')->insert([
            [
                'companyname' =>'LEO TECH TECHNOLOGY DEVELOPMENT AND INVESTMENT JOINT STOCK COMPANY',
                'taxcode'=>'1234567890',
                'address'=>'113 Trinh Cong Son, Hoa Cuong Nam Ward, Hai Chau District, Da Nang City',
                'legalrepresentative' =>'Tra Minh Hoang',
                'licensedate'=>'January 1, 2021',
                'operationdate'=>'November 1, 2020',
                'phone'=>'0944947786',
                'status'=>'Active',
                'image'=>'/img/logo/logo.png',
            ]

        ]);
    }
}
