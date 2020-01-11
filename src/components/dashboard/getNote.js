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
import { Chip } from 'react-native-paper';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
export default class GetNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }
    render() {
        return (
            <View style={this.props.viewStyle}>
                <Card containerStyle={StyleSheet.noteCard}>
                    <View>
                        <Text>{this.props.title}</Text>
                    </View>
                    <View>
                        <Text>{this.props.description}</Text>
                    </View>
                    <View >
                        {this.props.reminder != '' &&
                            <Chip >
                                <IconM name="clock-outline" size={15} color="black" />
                                {this.props.reminder}
                            </Chip>}
                    </View>
                </Card>
            </View>
        )
    }
}