import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ButtonRegBlue = ({title, onPressed}) => {
  return (
    <TouchableOpacity style={{backgroundColor: '#6892BC', width: '90%', marginLeft: 16, height: 40,  marginBottom: 10, alignSelf: 'center', borderRadius: 8, marginTop: 30, marginRight: 20}} 
              onPress={onPressed} >
        <Text style={{textAlign: 'center', marginTop:3, fontSize: 14, fontFamily: 'Poppins-Light', paddingVertical: 5, color: 'white', fontWeight: 'bold'}} >{title} </Text>
    </TouchableOpacity>
  )
}

export default ButtonRegBlue

const styles = StyleSheet.create({})