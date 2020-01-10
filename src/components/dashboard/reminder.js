import React, { Component } from "react";
import { Button, View, Text, TouchableOpacity, Picker } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { Tooltip, Divider } from "react-native-elements";
import Icon4 from "react-native-vector-icons/FontAwesome";
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import StyleSheet from '../../styleSheets'
import Dialog, { DialogContent } from "react-native-popup-dialog";
export default class Reminder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTimePickerVisible: false,
            isDatePickerVisible: false,
            reminderDialog: false,
            selectedHours: 0,
            selectedMinutes: 0,
            openTime: false,
            date: '',
            time: ''
        };
    }
    showDatePicker = () => {
        this.setState({ isDatePickerVisible: true });
        console.warn('date');

    };
    showTimePicker = () => {
        this.setState({ isTimePickerVisible: true });
    };
    hideDatePicker = () => {
        this.setState({ isDatePickerVisible: false });
    };
    hideTimePicker = () => {
        this.setState({ isTimePickerVisible: false });
    };
    handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.setState({date:date.toDateString()})
        this.hideDatePicker();
    };
    handleTimePicked = time => {
        console.log("A date has been picked: ", time);
        time = time.getHours() + ":" + time.getMinutes()
        this.setState({time:time})
        this.hideTimePicker();
    };
    reminderDialogClose = () => {
        this.setState({reminderDialog:false,date:'',time:''})
    }
    reminderSave = () => {
        let reminder = this.state.date + ' ' + this.state.time;
        this.props.handleReminder(reminder);
        this.reminderDialogClose()
    }
    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => { this.setState({ reminderDialog: true }); }}>
                    <IconM name="bell-plus" size={26} color="black" />
                </TouchableOpacity>
                <Dialog
                    visible={this.state.reminderDialog}
                    onTouchOutside={this.reminderDialogClose}>
                    <DialogContent>
                        <View style={StyleSheet.reminderDialog}>
                            <View style={StyleSheet.reminderTitleContainer}>
                                <Text style={StyleSheet.reminderTitle}>Add Reminder</Text>
                            </View>
                            <View>
                                <Picker
                                    selectedValue={this.state.date}
                                    onValueChange={() => {
                                        this.setState({ isDatePickerVisible: true });
                                    }}>
                                    {/* <Picker.Item label="Today" onPress={this.handleTodayDate} />
                                    <Picker.Item label="Tomorrow" onPress={this.handleTomorrowDate} />
                                    <Picker.Item label="Next Week" onPress={this.handleNextWeekDate} /> */}
                                    <Picker.Item label="Select your Option" />
                                    <Picker.Item label="Select a date..." />
                                </Picker>
                            </View>
                            <Divider />
                            <View>
                                <Picker
                                    selectedValue={this.state.time}
                                    onValueChange={() => {
                                        this.setState({ isTimePickerVisible: true });
                                    }}>
                                    <Picker.Item label="Select your Option" />
                                    <Picker.Item label="Select a Time..."/>
                                </Picker>
                            </View>
                            <Divider />
                            <Text>{this.state.date+' '+this.state.time}</Text>
                            <View style={StyleSheet.reminderButton}>
                                <View style={{ margin: 5 }}>
                                    <Button title="Cancel" onPress={this.reminderDialogClose}/>
                                </View>
                                <View style={{ margin: 5 }}>
                                    <Button title="Save" onPress={this.reminderSave}/>
                                </View>
                            </View>
                            <DateTimePicker
                                isVisible={this.state.isDatePickerVisible}
                                onConfirm={this.handleDatePicked}
                                onCancel={this.hideDatePicker} />
                            <DateTimePicker
                                isVisible={this.state.isTimePickerVisible}
                                onConfirm={this.handleTimePicked}
                                onCancel={this.hideTimePicker}
                                mode="time" />
                        </View>
                    </DialogContent>
                </Dialog>
            </View>
        );
    }
}