import { getCourses } from "../actions/courses";



const apiUrl = "http://helloleotech.com/api/courses";

export function getCoursesList() {
    const requestOptions = {
        method: "GET",
      };

   return async dispatch =>{
        try {
            fetch(apiUrl,requestOptions)
            .then(res => res.json())
            .then(data =>dispatch(getCourses(data)))
            .catch((error) => {
             throw error;
           });
        } catch (error) {
            console.log(error)
        }

   }
}



