
import { getBlogDetail } from "../actions/blogDetail";



const apiUrl = `http://helloleotech.com/api`;

export function getBlogDetailList(id) {
    const requestOptions = {
        method: "GET",
      };

   return async dispatch =>{
        try {
            fetch(`${apiUrl}/blog/${id}`,requestOptions)
            .then(res => res.json())
            .then(data =>dispatch(getBlogDetail(data)))
            .catch((error) => {
             throw error;
           });
        } catch (error) {
            console.log(error)
        }

   }
}



