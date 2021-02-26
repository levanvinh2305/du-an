
import { getLogo } from "../actions/logo";

const apiUrl = "http://helloleotech.com/api/logo";

export function getLogoItem() {
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "text/plain"
        },
      };

   return async dispatch =>{
        try {
            fetch(apiUrl,requestOptions)
            .then(res => res.json())
            .then(data =>dispatch(getLogo(data)))
            .catch((error) => {
             throw error;
           });
        } catch (error) {
            console.log(error)
        }

   }
}
