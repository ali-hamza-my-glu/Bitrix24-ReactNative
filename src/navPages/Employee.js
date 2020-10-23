import React, { Component } from 'react';
import { StyleSheet,View, Text, StatusBar,Image, Alert, TouchableOpacity } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch } from 'react-native-paper';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

export default class Employee extends Component {
    constructor(props) {  
        super(props);  
   
    }  

    goToDetailsEmployee = () => {
      Actions.detailsEmployee()
   }

   goBackToNavScreen = () => {

    Actions.navScreen()

  }

  render() {
    return (
      <View>

{/* ---------------------------------header--------------------------------- */}
<StatusBar backgroundColor="#49641D" animated={true}/>
       <View>
       <Header 
            containerStyle={{backgroundColor: '#fff',}}
            leftComponent={
              <TouchableOpacity
              onPress={this.goBackToNavScreen}
              >
                <Icon name="chevron-back-outline" color="#49641D" style={{ marginLeft: '10%',marginTop: '3%',fontSize: 25 }}></Icon>
                </TouchableOpacity>     }
            centerComponent={<Text style={{ fontSize:20}}>Employee</Text>
                // {text: 'All Clients', fontSize:30}
            }
        
            rightComponent={
            // <Image source={require('../../assets/images/search.png')}  />
    
        <Icon name="search-outline" color="#49641D" style={{ marginLeft: '20%',marginTop: '3%',fontSize: 25 }}></Icon>
               
    
    }
            // rightComponent={<Text>Done</Text>}
            // <ion-icon name="ellipsis-vertical-outline"></ion-icon>
       />
</View>
{/* -----Header end */}
{/* -----Header end */}

{/* item one  */}
          <View>
        <View style={{marginHorizontal:'10%',marginVertical:'5%'}} >
        <TouchableOpacity 
       onPress={this.goToDetailsEmployee}
         >
        <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center',marginBottom:10}}>
 
  <Avatar.Image source={require('.././assets/images/blue6.jpg')} size={50} />
  
  <View><Text>Shahid Saleem</Text></View>

  
  <Icon name="chevron-forward-outline" style={{ marginLeft: '20%', fontSize: 35, color: '#e2e2e2' }}></Icon>
             
             
             </View>
  </TouchableOpacity>
 
</View>

        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({

    circle :{
        height : 60,
        width :60,
        borderRadius: 100,
        borderColor: '#49641D',
        borderWidth:2,
        justifyContent: "center", 
        paddingHorizontal: 5,
       },
       textTitle: {
       
        fontSize: 20,
        
    },

})