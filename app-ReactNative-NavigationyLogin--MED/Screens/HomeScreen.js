import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class HomeScreen extends Component {

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.texto}> Ingresado con Exito! </Text>
                <Text style={{fontSize: 16, textAlign: 'center'}}> Ya puede empezar a hacer uso de la API de consultas </Text>
                <StatusBar style="auto" />
            </View>
        );
        }
    
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto: {
        fontSize: 20
    }
  });