import axios from "axios";
import { Base_URL } from "./Constants";

export const callAPI = async (resource)=>{
    let Config = {
                   headers:{
                    "Content-Type":"application/json",
                    "Accept" : "application/json"
                   }
                 }
                 
        const { data } = await axios.get(`${Base_URL}/${resource}`,Config) ;
        return data ;
}