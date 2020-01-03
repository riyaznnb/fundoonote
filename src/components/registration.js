import React from 'react-native'
import { View, TextInput, Button} from 'react-native'
import StyleSheet from '../styleSheets'
import Snackbar from 'react-native-snackbar';
import { TouchableHighlight } from 'react-native-gesture-handler';
export default class Register extends React.component{
    constructor(props) {
        super(props);
        this.state = {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }
      }
      handleClick = () => {
        this.props.history.push('/login');
      }
    
    handleSubmit = () => {
     
      }
      render() {
        return (
          <View style={StyleSheet.registrationContainer}>
              <Card >
                <View >
                  <Text >REGISTRATION</Text>
                </View>
                <View>
                  <TextInput
                    id="firstName"
                    fullWidth
                    label="FirstName"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    name="firstName"
                    value={this.state.firstName}
                    onChangeText={(firstName) => this.setState({firstName})}
                  />
                  <TextInput
                    id="lastName"
                    fullWidth
                    label="lastName"
                    type="text"
                    name="lastName"
                    margin="normal"
                    variant="outlined"
                    value={this.state.lastName}
                    onChangeText={(lastName) => this.setState({lastName})}
                  />
                  <TextInput
                    id="email"
                    fullWidth
                    label="Email"
                    type="email"
                    name="email"
                    autoComplete="off"
                    margin="normal"
                    variant="outlined"
                    value={this.state.email}
                    onChangeText={(email) => this.setState({email})}
                  />   
                  <TextInput
                    id="password"
                    fullWidth
                    label="Password"
                    type="password"
                    name="password"
                    margin="normal"
                    variant="outlined"
                    value={this.state.password}
                    onChangeText={(password) => this.setState({password})}
                  />
                  </View>
                <View>
                  <Button onClick={this.handleSubmit} variant="contained" color="primary">
                    submit
                </Button>
                </View>
                <View>
                  <TouchableHighlight>Already have an account?  Login</TouchableHighlight>
                </View>
              </Card>
          </View>
        )
      }
}