import React, { Component } from "react";

import { StyleSheet, View, TouchableOpacity, TextInput, Button, Text, ScrollView, Image, TouchableHighlight } from 'react-native';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }
    ayada = () => {
        var findname = this.state.findname;
        if (findname.length === 0) {
            alert("The Search bar is empty");
        }




        else {
            var searchapiurl = "http://192.168.0.148/api/search.php?findname=" + findname

            var header = {
                'accept': 'application/json',
                'content-type': 'application/json'
            };
            var Data = {
                findname: findname
            };
            fetch(
                searchapiurl, {
                method: 'POST',
                headers: header,
                body: JSON.stringify(Data)
            }
            )
                .then((Response) => Response.json())
                .then((Response) => {
                    console.log('12222 ', Response)
                    console.log('its not working', Response[0])
                    this.setState({ items: Response })

                })
                .catch((error) => {
                    alert("error" + error)
                })
        }
    }






    render() {

        return (<ScrollView style={styles.ViewStyle}>

            <View style={styles.logo}><View style={styles.logocontainer}><Image style={{ width: 100, height: 100 }} source={{ uri: 'https://play-lh.googleusercontent.com/CKVlp0wwisX8HLl03dlMbp7yzao3UWW3wxuBOtEHn0qJGGarun_XbQdjSP4o0MMYqV4' }} /></View></View>
            <View style={styles.thatStyle}>
                <View style={styles.firstdiv}>
                    <Text style={styles.titleText}>THAT Ii FINDER
                    </Text>
                    <TextInput
                        placeholder={"Search"}
                        placeholderTextColor={"#909090"}
                        KeyboardTye={"numeric"}
                        style={styles.txtstyle}
                        onChangeText={findname => this.setState({ findname })}
                    />

                    <TouchableHighlight style={styles.button} onPress={this.ayada}>
                        <View >
                            <Text style={styles.but} >FIND h ITEM</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                {this.state.items.map(
                    item => (
                        <View key={item.id} style={styles.mainvv}>
                            <View style={styles.flixa1}>
                                <Text style={styles.tx} >productcode:</Text>
                                <Text style={styles.tx} >Stockroom :</Text>
                                <Text style={styles.tx} >Shelve num :</Text>
                            </View>
                            <View style={styles.flixa2}>
                                <Text style={styles.tx}>{item.itemnumber}</Text>
                                <Text style={styles.tx} >{item.stockroomname}</Text>
                                <Text style={styles.tx} >{item.tal}</Text>
                            </View>

                        </View>

                    )
                )}


                <View style={styles.logo}><View style={styles.logocontainer2}><Image style={styles.logoStyle} source={require('./MAF.png')} /></View></View></View></ScrollView>);
    }

}

const styles = StyleSheet.create({
    ViewStyle:
    {
        paddingTop: 20,
        flex: 1,
        padding: 10,
        marginTop: 1,
        backgroundColor: '#ffc819',

    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 40
    },
    logocontainer: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logocontainer2: {
        width: '70%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40
    },
    logoStyle: {
        width: '90%',
        height: '100%',
    },
    logo: {
        height: '100%',
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center'

    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    thatStyle:
    {
        paddingTop: 30,
        paddingBottom: 30,
        flex: 1,
        padding: 10,
        marginTop: 10,
        backgroundColor: '#F5F5F5',
        borderRadius: 30,

    },
    firstdiv: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },

    BTNStyle: {
        width: '50%'
    },
    mainvv:
    {
        flexDirection: "row",
        marginBottom: 20,
        padding: 5,
        marginTop: 20,
        paddingBottom: 20,
        width: '100%'

    },
    tx:
    {
        borderColor: 'black',
        padding: 5,
        width: '100%',
        fontWeight: "bold",


        borderWidth: 1,

    },
    flixa1:
    {
        width: '50%',
        flex: 0.3,
        borderWidth: 1,
    },
    flixa2:
    {
        width: '50%',
        flex: 0.7,
        borderWidth: 1,
    },
    button: {
        alignItems: "center",
        backgroundColor: "black",

        padding: 10,
        width: '50%'
    },
    but: {
        color: "white"
    },

    txtstyle: {
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        width: '80%',
        borderRadius: 5,
        paddingLeft: 10,
        height: 50,




    }
});