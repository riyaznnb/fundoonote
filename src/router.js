/******************************************************************************************
* @purpose : App support multiple resolution for Calling the components Using React-Native
* @file : router.js
* @author : Riyazuddin K
* @since : 03-01-2020
******************************************************************************************/
import { createStackNavigator } from 'react-navigation-stack'
import Register from './components/registration'
import Login from './components/login'
import ForgotPassword from './components/forgotPassword';
import Dashboard from './components/dashboard/dashboard'
import CreateNote from './components/dashboard/createNote';
import Reminder from './components/dashboard/reminder';
const AppNavigator = createStackNavigator({
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
    }
 },
 
    
    {
        initialRouteName: "reminder",
    });
export default AppNavigator;