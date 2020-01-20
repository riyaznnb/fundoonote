/******************************************************************************************
* @purpose : Dashboard component for fundoonote application
* @file : register.js
* @author : Riyazuddin K
* @since : 06-01-2020
******************************************************************************************/
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage,ProgressBarAndroid} from 'react-native'
import StyleSheet from '../../styleSheets'
import { Card, Avatar,Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather'
import Icons from 'react-native-vector-icons/MaterialIcons'
import GetNote from './getNote';
import { getNote } from '../../services/noteService';
import { logoutUser } from '../../services/userService';
import { ScrollView } from 'react-native-gesture-handler';
import RBSheet from "react-native-raw-bottom-sheet";
export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gridView: true,
            notes: []
        }
    }
    handleView = () => {
        this.setState({ gridView: !this.state.gridView })
    }
    handleCreateNote = () => {
        this.props.navigation.navigate('createNote')
    }
    componentDidMount() {
        this.getAllNotes();
    }
    getAllNotes = () => {
        getNote().then(res => {
            console.log('getallnote', res)
            this.setState({ notes: res.data.data.data })
        })
            .catch(error => {
                console.warn('Getnote error', error.message);
                console.log('getNote  error',error)
            })
    }
    userLogout = () => {
        logoutUser().then(res => {
            console.warn('logout result', res)
            AsyncStorage.removeItem('fundootoken')
            this.props.navigation.navigate('login')
        })
            .catch(error => {
            console.warn('error logout',error.message);
            console.log('error logout',error)
        })
    }

    render() {
        let viewStyle = this.state.gridView ?
            { noteArea: StyleSheet.noteAreaGrid, noteCard: StyleSheet.getNoteCard }
            : { noteArea: StyleSheet.noteAreaList, noteCard: StyleSheet.getNoteCardList }
        let notes = this.state.notes.map(item => {
            return (
                <GetNote
                    key={item.id}
                    data={item}
                    viewStyle={viewStyle.noteCard} />
            )
        })
        let notesProgress = this.state.notes.length > 0 ?
            <View style={viewStyle.noteArea}>
            {notes}
            </View>
            :
            <ProgressBarAndroid  progress={0.5}
            style={{
                flex: 1,
                padding: 10,
                alignItems: "center",
                justifyContent: "center"
            }}/>
        return (
            <View style={StyleSheet.headerFooter}>
                <ScrollView>
                    <View style={StyleSheet.headerAndNotes}>
                        <Card containerStyle={StyleSheet.headerCard}>
                            <View style={StyleSheet.header}>
                                <View style={StyleSheet.headerLeft}>
                                    <View style={StyleSheet.headerItem}>
                                        <TouchableOpacity>
                                            <Icon name="menu" size={30} color="black" />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={StyleSheet.headerItem}>
                                        <Text style={StyleSheet.fundoonoteTitleInHeader}>
                                            <Text>Fundoo</Text>
                                        </Text>
                                    </View>
                                </View>
                                <View style={StyleSheet.headerRight}>
                                    {this.state.gridView ?
                                        <View style={StyleSheet.headerItem}>
                                            <TouchableOpacity onPress={this.handleView}>
                                                <Icon name="grid" size={30} color="black" />
                                            </TouchableOpacity>
                                        </View> :
                                        <View style={StyleSheet.headerItem}>
                                            <TouchableOpacity onPress={this.handleView}>
                                                <Icons name="list" size={30} color="black" />
                                            </TouchableOpacity>
                                        </View>
                                    }
                                    <View style={StyleSheet.headerItem}>
                                        <TouchableOpacity onPress={() => {
                                            this.RBSheet.open();
                                        }}>
                                            <Avatar size="small"
                                                overlayContainerStyle={{
                                                    backgroundColor: "skyblue"
                                                }}
                                                rounded
                                                title="R"
                                                activeOpacity={0.7} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Card>
                        {notesProgress}
                    </View>
                </ScrollView>
                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    duration={250}
                    customStyles={{
                        container: {
                            marginBottom: 50
                        }
                    }}>
                    <View style={StyleSheet.logoutContainer}>
                         <Button title="Logout" onPress={this.userLogout} />    
                    </View>
                </RBSheet>
                <View style={StyleSheet.footer}>
                    <View style={StyleSheet.header}>
                        <View style={StyleSheet.headerLeft}>
                            <View style={StyleSheet.footerItem}>
                                <TouchableOpacity>
                                    <Icon name="check-square" size={25} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={StyleSheet.footerItem}>
                                <TouchableOpacity>
                                    <Icons name="brush" size={25} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={StyleSheet.footerItem}>
                                <TouchableOpacity>
                                    <Icon name="mic" size={25} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={StyleSheet.headerRight}>
                            <View style={StyleSheet.addIcon}>
                                <TouchableOpacity onPress={this.handleCreateNote}>
                                    <Icon name="plus" size={60} color="red" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}