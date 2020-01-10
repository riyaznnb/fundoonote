import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native'
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
            <View style={StyleSheet.getNoteCard}>
                <Card containerStyle={StyleSheet.noteCard}>
                    <View>
                        <Text>{this.props.title}</Text>
                    </View>
                    <View>
                        <Text>{this.props.description}</Text>
                    </View>
                    <View>
                        {this.props.reminder!=''&&
                            <TouchableOpacity>
                                <Chip style={{width:"80%"}}>
                                    <IconM name="clock-outline" size={20} color="black" />
                                    {this.props.reminder}
                                </Chip>
                            </TouchableOpacity>}
                    </View>
                </Card>
            </View>
        )
    }
}