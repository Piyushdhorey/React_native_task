import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 3000)
    }, [])

    return (
        <View style={styles.container}>
            <Image source={require('../images/image002.png')}/>
        </View>
    )
}


export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})