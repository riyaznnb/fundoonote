/******************************************************************************************
* @purpose : Navigate the components.
* @file : router.js
* @author : Riyazuddin K
* @since : 03-01-2020
******************************************************************************************/
import {createSwitchNavigator} from 'react-navigation'
import Register from './components/registration'
import Login from './components/login'
import ForgotPassword from './components/forgotPassword';
import Dashboard from './components/dashboard/dashboard'
import CreateNote from './components/dashboard/createNote';
import Reminder from './components/dashboard/reminder';
import EditNote from './components/dashboard/editNote'
import Collaborator from './components/dashboard/collaborator';
import LoadOnWeb from './components/dashboard/loadOnWeb';
const AppNavigator = createSwitchNavigator({
    register: {
        screen: Register,
        navigationOptions: {
            header: null
        }
    },
    login: {
        screen: Login,
        navigationOptions: {
        header: null
        }
    },
    forgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {
        header: null
        }
    },
    dashboard: {
        screen: Dashboard,
        navigationOptions: {
        header: null
        }   
    },
    createNote: {
        screen: CreateNote,
        navigationOptions: {
            header: null
            }  
    },
    reminder: {
        screen: Reminder,
        navigationOptions: {
            header: null
            }  
    },
    editnote: {
        screen: EditNote,
        navigationOptions: {
            header: null
            }  
    },
    collaborator: {
        screen: Collaborator,
        navigationOptions: {
            header: null
            }  
    },
    loadOnWeb: {
        screen:LoadOnWeb,
        navigationOptions: {
            header: null
            }  
    }
 }, 
    {
        initialRouteName: "loadOnWeb"
    });
export default AppNavigator;