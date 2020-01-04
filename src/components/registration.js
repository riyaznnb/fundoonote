import React,{Component} from 'react'
import { View, TextInput, Button,TouchableHighlight} from 'react-native'
import StyleSheet from '../styleSheets'
export default class Register extends Component{
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
                    value={this.state.firstName}
                    onChangeText={(firstName) => this.setState({firstName})}
                  />
                  <TextInput
                    value={this.state.lastName}
                    onChangeText={(lastName) => this.setState({lastName})}
                  />
                  <TextInput
                    value={this.state.email}
                    onChangeText={(email) => this.setState({email})}
                  />   
                  <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({password})}
                  />
                  </View>
                <View>
                  <Button onClick={this.handleSubmit} title="Register"/>
                </View>
                <View>
                  <TouchableHighlight title="Already have an account?  Login"/>link
                </View>
              </Card>
          </View>
        )
      }
}