import axios from 'axios'
import Config from "react-native-config";
import {userApiConstant,noteApiConstant} from "../constant/apiConstant"
import { AsyncStorage } from 'react-native';

export async function addNote(data) {
    console.warn("Data", data);
    let token = await AsyncStorage.getItem('token');
    console.warn('token in service',token)
    return axios.post(Config.REACT_API_URL + noteApiConstant.addNote, data, {
        headers: {
            Authorization:token
        }
    })
}
export async function getNote() {
    let token = await AsyncStorage.getItem('token');
    console.log(token)
    return axios.get(Config.REACT_API_URL + noteApiConstant.getNotes, {
        headers: {
            Authorization:token
        }
    })
}
export async function updateNote(data) {
    let token = await AsyncStorage.getItem('token');
    console.log(token)
    return axios.post(Config.REACT_API_URL + noteApiConstant.updateNotes,data, {
        headers: {
            Authorization:token
        }
    })
}