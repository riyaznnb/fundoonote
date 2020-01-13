import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
const colorPattern = [
    {    
        id:1,
        colorCode: "#FDFEFE"
   },
    {
        id:2,
       colorCode: "#F2D7D5"
   },
    {
        id:3,
       colorCode: "#EBDEF0"
   },
    {
        id:4,
       colorCode: "#7FB3D5"
   },
    {
       id:5,
       colorCode: "#D0ECE7"
   },
    {
       id:6,
       colorCode: "#58D68D"
    },
    {
        id:7,
        colorCode: "#F1C40F"
    },
    {
        id:8,
        colorCode: "#BFC9CA"
    },
    {
        id:9,
        colorCode: "#FEF9E7"
    },
    {
        id:10,
        colorCode: "#FBEEE6"
    },
    {
        id:11,
        colorCode: "#7D3C98"
    },
    {
        id:12,
        colorCode: "#5DADE2"
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
