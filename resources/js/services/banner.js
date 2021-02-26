
import { getBanner } from "../actions/banner";


const apiUrl = "http://helloleotech.com/api/banner";

export function getBannerList() {
    const requestOptions = {
        method: "GET",
      };

   return async dispatch =>{
        try {
            fetch(apiUrl,requestOptions)
            .then(res => res.json())
            .then(data =>dispatch(getBanner(data)))
            .catch((error) => {
             throw error;
           });
        } catch (error) {
            console.log(error)
        }

   }
}
