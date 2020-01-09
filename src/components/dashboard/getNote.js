import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image,Modal,TouchableHighlight, ScrollView } from 'react-native'
import StyleSheet from '../../styleSheets'
import { Card, Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather'
import Icons from 'react-native-vector-icons/AntDesign'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import { addNote } from '../../services/userService';
import styleSheets from '../../styleSheets';
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
            <Card containerStyle={styleSheets.getNoteCard}>
                <View>
                    <Text>{this.props.title} sdsghdd</Text>
                </View>
                <View>
                    <Text>{this.props.description} dfdfd</Text>
                </View>
            </Card>
        )
    }
}