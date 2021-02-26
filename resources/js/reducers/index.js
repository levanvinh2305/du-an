import { combineReducers } from "redux";
import bannerReducer from "./banner";
import blogReducer from "./blog";
import blogDetailReducer from "./blogDetail";
import coursesReducer from "./courses";
import coursesDetailReducer from "./coursesDetail";
import logoReducer from "./logo";
import navbarReducer from "./navbar";
import sliderReducer from "./slider";
import familyReducer from "./team";
import login from "./login";

const rootReducer = combineReducers({
    navbarList: navbarReducer,
    sliderList :  sliderReducer,
    coursesList : coursesReducer,
    coursesDetailList : coursesDetailReducer,
    logo : logoReducer,
    familyItem : familyReducer,
    blogList : blogReducer,
    blogDetailList : blogDetailReducer,
    bannerList : bannerReducer,
    login,
});
export default rootReducer;
