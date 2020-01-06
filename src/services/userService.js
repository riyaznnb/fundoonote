import axios from 'react-native-axios'
import Config from "react-native-config";
import {apiConstant} from "../constant/apiConstant"

export function userRegister(data) {
    console.warn("Data", data);
    console.warn('api',apiConstant.signUp);
    return axios.post("http://fundoonotes.incubation.bridgelabz.com/api" + apiConstant.signUp, data)
}
export function userLogin(data) {
    console.warn("Data", data);
    return axios.post("http://fundoonotes.incubation.bridgelabz.com/api" + apiConstant.login, data)
} 
export function userForgotPassword(data) {
    console.warn("Data", data);
    return axios.post("http://fundoonotes.incubation.bridgelabz.com/api" + apiConstant.reset, data)
}