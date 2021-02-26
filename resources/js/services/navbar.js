import { getNavbar } from "../actions/navbar";

const apiUrl = "http://helloleotech.com/api/navbar";

export function getNabarList() {
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
            .then(data =>dispatch(getNavbar(data)))
            .catch((error) => {
             throw error;
           });
        } catch (error) {
            console.log(error)
        }

   }
}



