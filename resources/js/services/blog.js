import { getBlog } from "../actions/blog";



const apiUrl = "http://helloleotech.com/api/blog";

export function getBlogList() {
    const requestOptions = {
        method: "GET",
      };

   return async dispatch =>{
        try {
            fetch(apiUrl,requestOptions)
            .then(res => res.json())
            .then(data =>dispatch(getBlog(data)))
            .catch((error) => {
             throw error;
           });
        } catch (error) {
            console.log(error)
        }

   }
}



