import axios from 'axios'
import Config from "react-native-config";
import {userApiConstant,noteApiConstant} from "../constant/apiConstant"
import { AsyncStorage } from 'react-native';

export function userRegister(data) {
    console.warn("Data", data);
    return axios.post(Config.REACT_API_URL + userApiConstant.signUp, data)
}
export function userLogin(data) {
    console.warn("Data", data);
    return axios.post(Config.REACT_API_URL + userApiConstant.login, data)
} 
export function userForgotPassword(data) {
    console.warn("Data", data);
    return axios.post(Config.REACT_API_URL + userApiConstant.reset, data)
}
