<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Category;
use App\Company_Info;
use App\Banner;
use App\Courses;
use App\Post;
use App\Social;
use App\Team;
use App\Blog;
use App\Contact;
use App\Family;
use App\Gallery;
use App\Slider;



class HomeController extends Controller
{
    public function getLogo()
    {
        $logo = company_info::get("image");
        return $logo;
    }

    public function getNavbar()
    {
        $navbar = category::where('parent_id',1)->get();
        return $navbar;
    }

    public function getSlider()
    {
        $slider = slider::all();
        return $slider;
    }

    public function getBanner()
    {
        $banner = banner::all();
        return $banner;
    }
    public function getContact()
    {
        $contact = contact::get();
        return $contact;
    }
    public function getFamily()
    {
        $family = family::get();
        return $family;
    }
    public function getGallery()
    {
        $gallery = gallery::get();
        return $gallery;
    }

    public function getCoursesList()
    {
        $Courses_list = courses::get();
        return  $Courses_list;
    }

    public function getCoursesDetai($alias)
    {
        $CoursesDetai = courses::where("alias",$alias)->first();
         return $CoursesDetai;
    }

    public function getCompanyInfo()
    {
        $CompanyInfo = company_info::get();
         return $CompanyInfo;
    }
    public function getTeamList()
    {
        $Team = team::get();
         return $Team;
    }

    public function getBlogList()
    {
        $BlogList = blog::get();
         return $BlogList;
    }
    public function getBlogDetai($alias)
    {
        $BlogDetai = blog::where("alias",$alias)->first();
         return $BlogDetai;
    }

    public function getSocial()
    {
        $Social = social::get();
         return $Social;
    }


}
