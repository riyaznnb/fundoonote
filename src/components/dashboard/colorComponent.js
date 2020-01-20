import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
const colorPattern = [
    {    
        id:1,
        colorCode: "#FDFEFE"
   },
    {
        id:2,
       colorCode: "#E83A26"
   },
    {
        id:3,
       colorCode: "#E86126"
   },
    {
        id:4,
       colorCode: "#E88726"
   },
    {
       id:5,
       colorCode: "#E8B326"
   },
    {
       id:6,
       colorCode: "#E8E526"
    },
    {
        id:7,
        colorCode: "#98E826"
    },
    {
        id:8,
        colorCode: "#34E826"
    },
    {
        id:9,
        colorCode: "#26E8CA"
    },
    {
        id:10,
        colorCode: "#1066EB"
    },
    {
        id:11,
        colorCode: "#C610EB"
    },
    {
        id:12,
        colorCode: "#EB10AC"
    },

]
export default class ColorComponent extends Component {
   constructor(props) {
       super(props)
       this.state = {
       }
   }
   handleColor(color) {
       this.props.handleColor(color)
   }
   renderItem = ({ item }) => {
       return (
           <TouchableOpacity onPress={() => this.handleColor(item.colorCode)}>
               <View style={{ backgroundColor: item.colorCode, marginLeft: 5, borderRadius: 25, borderColor: 'black', height: 30, width: 30 }}>
               </View>
           </TouchableOpacity>
       )
   }
   render() {
       return (
           <View >
               <FlatList horizontal={true}
                   data={colorPattern}
                   renderItem={this.renderItem}/>
           </View>
       );
   }
}
