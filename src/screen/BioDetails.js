import React from 'react'
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native'
import { AntDesign ,Feather} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function BioDetails({route,navigation}) {
    let bios = route.params;
    return (
        <ScrollView style={styles.container}>
            <View style={styles.icons}>

                <TouchableOpacity onPress={() =>{navigation.navigate("BiosScreen") }}>
                <AntDesign name="left" size={24} color="black" style={styles.left} />
                </TouchableOpacity>

                <Feather name="menu" size={24} color="black" style={styles.menu} />
            </View>

            <Image source={bios.image} style={styles.image} />
            <Text style={styles.name}>ELSA ROOSEVELT</Text>
            <Text style={styles.date}>19th January,1111</Text>

            <View style={styles.footer}>
                <Text style={styles.profile}>Profile</Text>
                <Text style={styles.timeline}>Timeline</Text>
                <Text style={styles.facts}>Facts</Text>
            </View>
            
            <Text style={styles.text}>
                I'm a lady of high prestige, I need to attain higher heights.
                I'm a lady of high prestige, I need to attain higher heights.
                I'm a lady of high prestige, I need to attain higher heights.
                I'm a lady of high prestige, I need to attain higher heights.
                I'm a lady of high prestige, I need to attain higher heights.
                I'm a lady of high prestige, I need to attain higher heights.
                I'm a lady of high prestige, I need to attain higher heights.
                I'm a lady of high prestige, I need to attain higher heights.
           </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'space-around',
        marginTop: 40,
        marginHorizontal: 6
    },
    icons: {
        flexDirection: "row",
        backgroundColor: "#65c97f",
        borderRadius: 20,
        height: 40,
    },
    left: {
        marginLeft: 20,
        alignSelf: "center",
        marginTop:8
    },
    menu: {
        marginLeft: 250,
        alignSelf: "center"
    },
    image: {
        height: 450,
        width: 350,
        backgroundColor: "#b8dec2",
        borderRadius: 30,

    },
    name: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 20
    },
    date: {
        // marginLeft:50,
        alignSelf: "center",
        marginTop: 2,
        fontWeight: "bold",
        fontStyle: "italic"
    },
    footer: {
        flexDirection: "row",
        marginLeft: 20,
        marginTop: 10
    },
    profile: {
        marginLeft: 10,
        backgroundColor: "#de6a7a",
        borderRadius: 8,
        width: 50,
        textAlign: "center"
    },
    timeline: {
        marginLeft: 70,
        marginRight: 40,
        backgroundColor: "#de6a7a",
        borderRadius: 8,
        width: 60,
        textAlign: "center"

    },
    facts: {
        marginLeft: 50,
        backgroundColor: "#de6a7a",
        borderRadius: 8,
        width: 40,
        textAlign: "center"
    },
    text: {
        marginHorizontal: 20,
        marginTop: 10,
        fontStyle: "italic"
    }
})
