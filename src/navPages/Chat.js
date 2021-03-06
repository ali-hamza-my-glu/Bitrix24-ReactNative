import React, { Component } from 'react';
import 'react-native-gesture-handler';

import { Alert, View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements'

import { Avatar, Title, Caption } from 'react-native-paper';
import { SearchBar, Input } from 'react-native-elements';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {

            search: '',
        }
    }

    updateSearch = (search) => {
        this.setState({ search });
    };

    renderInner = () => (

        <View style={styles.panel}>

            <View style={{flexDirection: 'row',marginBottom:15 ,alignItems:'center',borderBottomColor:'grey',borderBottomWidth:1,borderBottomEndRadius:100,borderBottomStartRadius:100}}>
                <Avatar.Image size={24} source={require('../assets/images/blue6.jpg')} size={65} />
                <View style={{ marginLeft: 30 }}>
                    <Title style={{ color: 'green', }}>Add private Chat</Title>
                    
                </View>
</View>

<View style={{flexDirection: 'row' ,marginBottom:40,borderBottomColor:'grey',borderBottomWidth:1,alignItems:'center',borderBottomEndRadius:100,borderBottomStartRadius:100}}>
                <Avatar.Image size={24} source={require('../assets/images/blue6.jpg')} size={65} />
                <View style={{ marginLeft: 30 }}>
                    <Title style={{ color: 'green', }}>Add public Chat</Title>
                    
                </View>
</View>



                <TouchableOpacity style={styles.panelButton} onPress={() => this.bs.current.snapTo(1)}>
                    <Text style={styles.panelButtonTitle}>Invite Employees</Text>
                </TouchableOpacity>

                <View style={{borderBottomColor:'grey',borderBottomWidth:1,marginBottom:8}}>

                </View>


                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:15,color:'grey'}}>Employees</Text>
                </View>

                <View style={{flexDirection: 'row',marginBottom:15 ,alignItems:'center',}}>
                <Avatar.Image size={24} source={require('../assets/images/blue6.jpg')} size={65} />
                <View style={{ marginLeft: 30 }}>
                    <Title style={{ color: 'green', }}>Sohail</Title>
                    
                </View>
</View>

<View style={{flexDirection: 'row',marginBottom:15 ,alignItems:'center',}}>
                <Avatar.Image size={24} source={require('../assets/images/blue6.jpg')} size={65} />
                <View style={{ marginLeft: 30 }}>
                    <Title style={{ color: 'green', }}>Ahmed</Title>
                    
                </View>
</View>

<View style={{flexDirection: 'row',marginBottom:15 ,alignItems:'center',}}>
                <Avatar.Image size={24} source={require('../assets/images/blue6.jpg')} size={65} />
                <View style={{ marginLeft: 30 }}>
                    <Title style={{ color: 'green', }}>Arfa</Title>
                    
                </View>
</View>

            </View>
            
      );

      renderHeader = () => (

            <View style={styles.bottomHeader}>
                <View style={styles.panelHeader}>
                    <View style={styles.panelHandle}><Text style={{ fontSize: 13, color: 'green' }}>New Chat</Text></View>
                </View>
            </View>
      );

      bs = React.createRef();
      fall = new Animated.Value(1);

    render() {

        const { search} = this.state;
        return (



            <View style={styles.container}>
                <BottomSheet
                    ref={this.bs}
                    snapPoints={[390, 0]}
                    renderContent={this.renderInner}
                    renderHeader={this.renderHeader}
                    initialSnap={1}
                    callbackNode={this.fall}
                    enabledGestureInteraction={true}
                />

                {/* <View>
                    <Header
                        statusBarProps={{ barStyle: 'light-content', backgroundColor: 'black' }}
                        containerStyle={{
                            height: 100,
                            borderBottomWidth: 1,
                            borderBottomColor: 'black',
                            backgroundColor: 'white',
                            justifyContent: 'space-around',
                        }}
                        leftComponent={{ icon: 'menu', color: 'green'}}

                        centerComponent={<SearchBar
                            containerStyle={styles.searchbarContainer}
                            inputContainerStyle={styles.searchbarInputContainer}
                            inputStyle={[{ fontSize: 19 }, styles.searchbarInput]}
                            placeholder ="Chat"
                            onChangeText={this.updateSearch}
                            value={search}

                        />}
                         

                    />
                </View> */}



                <View style={styles.tableView}>

                    <View style={styles.rowsView}>
                        <ScrollView>
                            <View style={styles.Rows}>

                                <View style={styles.registeredName}>

                                    <Avatar.Image size={24} source={require('../assets/images/blue6.jpg')} size={65} />
                                    <View style={{ marginLeft: 10 }}>
                                        <Title style={{ color: 'green', }}>Farhan Sarwer ("Its You")</Title>
                                        <Caption style={{ fontWeight: 'bold' }}>Employee </Caption>
                                    </View>
                                </View>

                                <View>
                                    <TouchableOpacity style={{ width: 100, height: 30 }}>
                                        <Caption style={{ fontWeight: 'bold' }}>Wed </Caption>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>



                </View>
                <View style={{marginTop: '50%', marginLeft: '80%' }}>
                    <TouchableOpacity delayPressIn={1} onPress={() => this.bs.current.snapTo(0)}>
                        <Image source={require('../assets/images/plusicon.png')} style={{ height: 60, width: 60 }} />
                    </TouchableOpacity>

                </View>

            </View>



        );


    }
}

const styles = StyleSheet.create({
                container: {
                flex: 1,
    },
    SearchBar: {
                alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

    },
    searchbarContainer: {

                borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        height: 33,
        
    },
    searchbarInputContainer: {
                backgroundColor: ('white'),

        height: 50,
        width: 280,
    },



    tableView: {
                width: 500,
        height: 200,
        marginLeft: 7,
        marginTop: 30,
    },



    rowsView: {
                height: 300,
        width: 600,

    },
    Rows: {
                flexDirection: 'row',
        marginBottom: 5,
        width: 500
    },
    registeredName: {
                flexDirection: 'row',
        height: 100,
        width: 320,
    },
    panel: {
        
                padding: 10,
        backgroundColor: '#FFFFFF',
        paddingTop: 10,


      },
      bottomHeader: {
                backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowRadius: 2,
        shadowOpacity: 0.4,
        elevation: 3,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      panelHeader: {
                alignItems: 'center',
      },
      panelHandle: {
                width: 70,
        height: 8,
        marginBottom: 30,
      },
      panelTitle: {
                fontSize: 27,
        height: 35,
      },
      panelSubtitle: {
                fontSize: 16,
        color: 'gray',
        fontWeight: 'bold',
        height: 30,
        marginBottom: 10,
      },
      panelButton: {
                padding: 13,
        borderRadius: 10,
        backgroundColor: 'green',
        alignItems: 'center',
        marginVertical: 7,
        marginBottom:60
      },
      panelButtonTitle: {
                fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
      },

      namesInputContainer: {
                height: 10,
        width: 200
      },
      namesInput: {
                color: 'black',
      },
      namesLabel: {
                color: 'black'
      },
});