import React from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';

const obtenerInfoPais = require("../library.js");

export class Api extends React.Component {

    constructor(props){
        super(props);
        this.state={
            subregion: "",
            name: "",
            capital: "",
            population: "",
            encontrado: true,
        }
 
        this.handlerObtenerInfoPais = this.handlerObtenerInfoPais.bind(this);
        this.handlerObtenerNombrePais = this.handlerObtenerNombrePais.bind(this);    
    }  
    
        handlerObtenerNombrePais(event){
            this.setState({name: event.target.value});
        }
   
        handlerObtenerInfoPais(){
            obtenerInfoPais(this.state.name).then((info) => {
                console.log(info.data[0]);
                this.setState({ encontrado: true,
                                subregion: "Region " + info.data[0].subregion, 
                                name: "Pais: "+info.data[0].name,
                                capital: "Capital: " + info.data[0].capital,
                                population: "Nro Habitantes: " + info.data[0].population,
                                })
             }).catch((err) => {
                console.log(err);
                this.setState({     
                    encontrado: false
                });
            });
        }


        render(){
           
            if(this.state.encontrado === true){
                return (
                    <View style={styles.container}>
                        <View>
                            <Text style={styles.peticiones} h1>{this.state.subregion}</Text>
                            <Text style={styles.peticiones} h1>{this.state.name}</Text>
                            <Text style={styles.peticiones} h1>{this.state.capital}</Text>
                            <Text style={styles.peticiones} h1>{this.state.population}</Text>
                        </View>
                        <View>
                            <Text style={styles.titulo}> Ingrese Nombre del Pais </Text>
                            <TextInput
                                editable
                                keyboardAppearance={'light'}
                                maxLength={20}  
                                style={styles.cuadrado}
                                onChange={this.handlerObtenerNombrePais}
                            />
                            <Button
                                onPress={this.handlerObtenerInfoPais}
                                title="Apretar"
                                color="#990"
                            />
                            <Text style={styles.aclaracion}> Escriba nombre del pais en su lengua de Origen</Text>
                        </View>
                    </View>
                );
            } else {
                return (
                    <View style={styles.container}>
                        <Text style={styles.danger}>NO SE ENCONTRO PAIS, VUELVA A INTENTARLO</Text>

                        <View >
                            <Text style={styles.titulo} h2> Ingrese Nombre del Pais</Text>
                            <TextInput
                            editable
                            keyboardAppearance={'light'}
                            maxLength={20}  
                            style={styles.cuadrado}
                            onChange={this.handlerObtenerNombrePais}
                            /> 
                            <Button 
                                onPress={this.handlerObtenerInfoPais}
                                title="Apretar"
                                color="#841584"
                            />
                        </View>
                            <Text style={styles.aclaracion} h2> Escriba nombre del pais en su lengua de Origen</Text>
                        
                        
                    </View>
                );
            }
        }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cuadrado: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 2,
        margin: 10,
        textAlign: 'center',
    },
    peticiones: {
      color: 'white',
    },
    titulo: {
      color: '#099',
    },
    aclaracion: {
      color: 'grey'
    },
    danger: {
        color: 'red',
        fontSize: 20
    }
  });
  