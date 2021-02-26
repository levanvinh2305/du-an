
import {  getSlider } from "../actions/slider";


const apiUrl = "http://helloleotech.com/api/slider";

export function getSliderList() {
    const requestOptions = {
        method: "GET",
      };

   return async dispatch =>{
        try {
            fetch(apiUrl,requestOptions)
            .then(res => res.json())
            .then(data =>dispatch(getSlider(data)))
            .catch((error) => {
             throw error;
           });
        } catch (error) {
            console.log(error)
        }

   }
}
