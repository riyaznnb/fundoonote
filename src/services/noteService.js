import axios from 'axios'
import Config from "react-native-config";
import {userApiConstant,noteApiConstant} from "../constant/apiConstant"
import { AsyncStorage } from 'react-native';

export async function addNote(data) {
    console.warn("Data", data);
    let token = await AsyncStorage.getItem('fundootoken');
    console.warn('token in service',token)
    return axios.post(Config.REACT_API_URL + noteApiConstant.addNote, data, {
        headers: {
            Authorization:token
        }
    })
}
export async function getNote() {
    let token = await AsyncStorage.getItem('fundootoken');
    console.log(token)
    return axios.get(Config.REACT_API_URL + noteApiConstant.getNotes, {
        headers: {
            Authorization:token
        }

    })
}
export async function updateNote(data) {
    let token = await AsyncStorage.getItem('fundootoken');
    console.log('data update',data,+"token ",token)
    return axios.post(Config.REACT_API_URL + noteApiConstant.updateNotes,data, {
        headers: {
            Authorization:token
        }
    })
}
export async function addNoteToTrash(data) {
    console.warn("Data trash", data);
    let token = await AsyncStorage.getItem('fundootoken');
    console.warn('token in trash',token)
    return axios.post(Config.REACT_API_URL + noteApiConstant.trashNotes, data, {
        headers: {
            Authorization:token
        }
    })
}
export async function updateColor(data) {
    console.warn("Data in color service", data);
    let token = await AsyncStorage.getItem('fundootoken');
    return axios.post(Config.REACT_API_URL + noteApiConstant.changeColor, data, {
        headers: {
            Authorization:token
        }
    })
}