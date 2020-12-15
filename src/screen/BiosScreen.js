import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import SingleScreen from '../components/SingleScreen'
import { AntDesign,Feather } from '@expo/vector-icons'

const BiosScreen = ({navigation}) => {
    bios = [
        {
            image: require('../../assets/Pic1.png'),
            name: "Kim Kaddy",
            status: "Musician",
            icon: <Feather name="menu" size={24} color="black" />
        },

        {
            image: require('../../assets/Pic2.png'),
            name: "Jenner Kaddy",
            status: "Film Maker",
            icon: <Feather name="menu" size={24} color="black" />
        },

        {
            image: require('../../assets/Pic3.png'),
            name: "Zaddy Sally",
            status: "Rapper",
            icon: <Feather name="menu" size={24} color="black" />
        },

        {
            image: require('../../assets/Pic4.png'),
            name: "Beckly Becks",
            status: "Actress",
            icon: <Feather name="menu" size={24} color="black" />
        },

        {
            image: require('../../assets/Pic5.png'),
            name: "Kim Kaddy",
            status: "Politician",
            icon: <Feather name="menu" size={24} color="black" />
        },
        {
            image: require('../../assets/Pic2.png'),
            name: "Jenner Kaddy",
            status: "Film Maker",
            icon: <Feather name="menu" size={24} color="black" />
        },
        {
            image: require('../../assets/Pic1.png'),
            name: "Kim Kaddy",
            status: "Musician",
            icon: <Feather name="menu" size={24} color="black" />
        },
        {
            image: require('../../assets/Pic3.png'),
            name: "Zaddy Sally",
            status: "Rapper",
            icon: <Feather name="menu" size={24} color="black" />
        },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <AntDesign name="left" size={24} color="black" style={styles.left} />
                <Text style={styles.headingText}>Popular</Text>
                <Feather name="align-center" size={24} color="black" />
            </View>

            {/* <View>
                <FontAwesome name="commenting-o" size={24} color="black" />
                <EvilIcons name="search" size={24} color="black" />
                <Feather name="menu" size={24} color="black" />
                <Feather name="user" size={24} color="black" />
            </View> */}


            <FlatList
                data={bios}
                renderItem={({ item }) => {
                    return <SingleScreen
                        name={item.name}
                        status={item.status}
                        icon={item.icon}
                        image={item.image}
                     navigation={navigation} 
                    />
                }}
                keyExtractor={(item) => item.number}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-around",
        marginTop: 50,
    },
    heading: {
        flexDirection: "row",
        marginTop: 10,
        marginLeft: 15
    },

    headingText:{
      marginHorizontal:100,
      color:"#d16977",
      fontWeight:"bold",
      fontSize:20
    }
})

export default BiosScreen;
