import React from 'react'
import { View, Text, Image, StyleSheet, } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function bios({ name, icon, status, image, navigation }) {
    return (

        <TouchableOpacity 
        onPress={() => {
            navigation.navigate('BioDetails',{name, icon, image, status,navigation})
          }}
         style={styles.mainContainer}>
           
            <View style={styles.singleBiography}>
                <Image source={image} style={styles.image} />
                <View style={styles.info}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.status}>{status}</Text>
                </View>
                <Text style={styles.icon}>{icon}</Text>
            </View>
        
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    singleBiography: {
        flexDirection: "row",
        marginTop: 40
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginLeft: 40,
        marginBottom: 5
    },
    info: {
        flexDirection: "column",
        marginHorizontal: 30,
        marginTop: 10
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "italic"
    },
    status: {
        fontStyle: "italic"
    },
    icon: {
        marginTop: 20,
        marginHorizontal: 30
    }
})