/******************************************************************************************
* @purpose : App support multiple resolution for Calling the components Using React-Native
* @file : router.js
* @author : Riyazuddin K
* @since : 03-01-2020
******************************************************************************************/
import { createStackNavigator } from 'react-navigation-stack'
import Register from './components/registration'
const AppNavigator = createStackNavigator({
    register: {
        screen: Register,
        navigationOptions: {
            header: null
        }
    },
},
    {
        initialRouteName: "register",
    });
export default AppNavigator;