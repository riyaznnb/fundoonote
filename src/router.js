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
 },
    
    {
        initialRouteName: "dashboard",
    });
export default AppNavigator;