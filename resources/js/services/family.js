
import { getFamily } from "../actions/family";

const apiUrl = "http://helloleotech.com/api/family";

export function getFamilyItems() {
    const requestOptions = {
        method: "GET",
      };

   return async dispatch =>{
        try {
            fetch(apiUrl,requestOptions)
            .then(res => res.json())
            .then(data =>dispatch(getFamily(data)))
            .catch((error) => {
             throw error;
           });
        } catch (error) {
            console.log(error)
        }

   }
}



