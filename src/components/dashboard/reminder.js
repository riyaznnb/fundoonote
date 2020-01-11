/******************************************************************************************
* @purpose : Reminder component for fundoonote application
* @file : reminder.js
* @author : Riyazuddin K
* @since : 10-01-2020
******************************************************************************************/
import React, { Component } from "react";
import { Button, View, Text, TouchableOpacity, Picker } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { Divider } from "react-native-elements";
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
        this.setState({ date: date.toDateString() })
        this.hideDatePicker();
    };
    handleTimePicked = time => {
        console.log("A date has been picked: ", time);
        time = time.getHours() + ":" + time.getMinutes()
        this.setState({ time: time })
        this.hideTimePicker();
    };
    reminderDialogClose = () => {
        this.setState({ reminderDialog: false, date: '', time: '' })
    }
    reminderSave = () => {
        let reminder = this.state.date + ' ' + this.state.time;
        this.props.handleReminder(reminder);
        this.reminderDialogClose()
    }
    handleDatePicker = date => {
        console.warn('selected date', date)
        console.log('selected date', date)
        if (date === "date") {
            this.setState({ isDatePickerVisible: true })
        }
        else {
            this.setState({ date: date })
        }
    }
    handleTimePicker = time => {
        if (time === "time") {
            this.setState({ isTimePickerVisible: true })
        }
    }
    render() {
        let today = new Date();
        let tomorrow = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1);
        let nextweek = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 7);
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
                            <View >
                                <View>
                                    <Picker
                                        selectedValue={this.state.date}
                                        onValueChange={(value) => { this.handleDatePicker(value) }}>
                                        {this.state.date != '' ?
                                            <Picker.Item label="Select date" value={this.state.date}/>
                                            :
                                            <Picker.Item label="Select Date" />}
                                        <Picker.Item label="Today" value={today.toDateString()} />
                                        <Picker.Item label="Tomorrow" value={tomorrow.toDateString()} />
                                        <Picker.Item label="Next Week" value={nextweek.toDateString()} />
                                        <Picker.Item label="Pick date..." value="date" />
                                    </Picker>
                                </View>
                            </View>
                            <Divider />
                            <View>
                                <Picker
                                    selectedValue={this.state.time}
                                    onValueChange={(value) => { this.handleTimePicker(value) }}>
                                    {this.state.time != '' ? <Picker.Item label={this.state.time} /> :
                                        <Picker.Item label="Select Time " />}
                                    <Picker.Item label="Select a Time..." value="time" />
                                </Picker>
                            </View>
                            <Divider />
                            <View style={StyleSheet.reminderButton}>
                                <View style={{ margin: 5 }}>
                                    <Button title="Cancel" onPress={this.reminderDialogClose}  />
                                </View>
                                <View style={{ margin: 5 }}>
                                    <Button title="Save" onPress={this.reminderSave} />
                                </View>
                            </View>
                            <DateTimePicker
                                isVisible={this.state.isDatePickerVisible}
                                onConfirm={this.handleDatePicked}
                                onCancel={this.hideDatePicker}
                                minimumDate={today} />
                            <DateTimePicker
                                isVisible={this.state.isTimePickerVisible}
                                onConfirm={this.handleTimePicked}
                                onCancel={this.hideTimePicker}
                                is24Hour={false}
                                mode="time" />
                        </View>
                    </DialogContent>
                </Dialog>
            </View>
        );
    }
}