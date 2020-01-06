import axios from 'react-native-axios'
import Config from "react-native-config";
import apiConstant from "../constant/apiConstant"

export function userRegister(data) {
console.log("Data", data);
    return axios.post(Config.REACT_API_URL + apiConstant.signUp, data)
}