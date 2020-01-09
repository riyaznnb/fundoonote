import React, { Component } from 'react';
import { View, Text} from 'react-native'
import { Card} from 'react-native-elements'
import StyleSheet from '../../styleSheets';
export default class GetNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description:''
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
            </Card>
            </View>
        )
    }
}