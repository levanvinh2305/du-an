
import { getCoursesDetail } from "../actions/coursesDetail";



const apiUrl = `http://helloleotech.com/api/`;

export function getCoursesDetailList(id) {
    const requestOptions = {
        method: "GET",
      };

   return async dispatch =>{
        try {
            fetch(`${apiUrl}/courses/${id}`,requestOptions)
            .then(res => res.json())
            .then(data =>dispatch(getCoursesDetail(data)))
            .catch((error) => {
             throw error;
           });
        } catch (error) {
            console.log(error)
        }

   }
}



