import { useEffect, useState } from "react";
import { View, Text, style, StyleSheet, ScrollView, Image, TextInput } from "react-native";
import { FlatList } from "react-native-gesture-handler";


const Reservations = () => {

    const [filterData, setfilterdData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        searchreservations();
        return () => { }
    }, [])





    const searchreservations = () => {
        const apiURL = 'http://192.168.0.148/api/api.php ';
        fetch(apiURL)
            .then((Response) => Response.json())
            .then((responseJeson) => {
                setfilterdData(responseJeson);
                setmasterData(responseJeson);
            }).catch((error) => {
                console.error(error)
            })
    }

    const searchbar = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.itemnumber ? item.itemnumber.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setfilterdData(newData);
            setSearch(text);

        } else {
            setfilterdData(masterData);
            setSearch(text);
        }
    }


    const ItemView = ({ item }) => {
        return (
            <View style={{ backgroundColor: '#dee2e6', marginBottom: 20, borderRadius: 10 }}>
                <Text style={{ padding: 10 }} >
                    {item.itemnumber}
                </Text>
                <Text style={{ padding: 10 }} >
                    Reservation number : {item.reservation_id}
                </Text>
            </View>
        )
    }
    const itemSeparatorView = () => {
        return (
            <View
                style={{ height: 1, width: '100%' }}
            />
        )
    }

    return (

        <View style={styles.ViewStyle}>
            <TextInput style={styles.inputstyle}
                value={search}
                placeholder="Search Here"
                underlineColorAndroid="transparent"
                onChangeText={(text) => searchbar(text)}
            />
            <FlatList
                style={styles.thatStyle}
                data={filterData}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={itemSeparatorView}
                renderItem={ItemView}


            />


        </View>


    )
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
    logocontainer: {


        justifyContent: 'center',
        alignItems: 'center'
    },
    thatStyle:
    {
        paddingTop: 30,
        paddingBottom: 30,
        flex: 1,
        padding: 10,
        marginTop: 10,
        backgroundColor: '#F5F5F5',
        borderRadius: 20,

    },
    inputstyle: {
        height: 60,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: 'white'
    }
});
export default Reservations
