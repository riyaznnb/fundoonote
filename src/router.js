import { createStackNavigator } from 'react-navigation-stack'
import Register from './components/register';
const AppNavigator = createStackNavigator({
register: {
screen: Register,
navigationOptions: {
header: null
}
}
},
{
initialRouteName:"register",
});
export default AppNavigator;