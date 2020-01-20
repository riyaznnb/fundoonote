/******************************************************************************************
* @purpose : GetNote component for fundoonote application
* @file : getNote.js
* @author : Riyazuddin K
* @since : 08-01-2020
******************************************************************************************/
import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Card } from 'react-native-elements'
import StyleSheet from '../../styleSheets';
import {withNavigation} from 'react-navigation'
import { Chip } from 'react-native-paper';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
class GetNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }
    handleEdit = (data) => {
        console.log("hhwdjsjd",data)
        console.log("edit note")
        this.props.navigation.navigate("editnote",{data:data})
    }
    render() {
        return (
            <View style={this.props.viewStyle}>
                
                <Card containerStyle={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: 20,
                    backgroundColor:this.props.data.color
                }}>
                    <TouchableOpacity>
                    <View>
                        <Text onPress={()=>this.handleEdit(this.props.data)}>{this.props.data.title}</Text>
                    </View>
                    <View>
                        <Text>{this.props.data.description}</Text>
                    </View>
                    <View style={StyleSheet.getNoteCardReminder}>
                        {this.props.data.reminder != '' &&
                            <Chip >
                                <IconM name="clock-outline" size={15} color="black" />
                                {this.props.data.reminder}
                            </Chip>}
                        </View>
                        </TouchableOpacity>
                    </Card>
            </View>
        )
    }
}
export default withNavigation(GetNote)