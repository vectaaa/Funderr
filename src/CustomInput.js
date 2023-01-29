import React from 'react'
import { View, Text, TextInput, StyleSheet} from 'react-native'

const  CustomInput = () => {
    return (
        <View>
            <Text>Custom Input</Text>
            <TextInput placeholder='UserName'></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({

})
export default CustomInput;