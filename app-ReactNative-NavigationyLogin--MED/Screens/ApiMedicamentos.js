import React from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';

const obtenerInfoMedicamento = require("../library.js");

export class Api extends React.Component {

    constructor(props){
        super(props);
        this.state={
            laboratorio: "",
            nombre: "",
            nregistro: "",
            pactivos: "",
            encontrado: true,
            texto: "",
        }
 
        this.handlerObtenerMedicamento = this.handlerObtenerMedicamento.bind(this);
        this.handlerObtenerNumeroRegistro = this.handlerObtenerNumeroRegistro.bind(this);    
    }  
    
        handlerObtenerNumeroRegistro(event){
            this.setState({nregistro: event.target.value + "%20ESP"});
        }
   
        handlerObtenerMedicamento(){
            obtenerInfoMedicamento(this.state.nregistro).then((info) => {
                this.setState({ encontrado: true,
                                laboratorio: "Laboratorio: "+info.data.labtitular,
                                nombre: "Medicamento: "+info.data.nombre,
                                pactivos: "Principios Activos: "+info.data.pactivos,
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
                            <Text style={styles.peticiones} h1>{this.state.laboratorio}</Text>
                            <Text style={styles.peticiones} h1>{this.state.nombre}</Text>
                            <Text style={styles.peticiones} h1>{this.state.pactivos}</Text>
                        </View>
                        <View>
                            <Text style={styles.titulo}> Ingrese numero de Registro </Text>
                            <TextInput
                                editable
                                keyboardAppearance={'light'}
                                maxLength={4}  
                                style={styles.cuadrado}
                                onChange={this.handlerObtenerNumeroRegistro}
                                numberOfLines={4}
                            />
                            <Button
                                onPress={this.handlerObtenerMedicamento}
                                title="Apretar"
                                color="#990"
                            />
                            <Text style={styles.aclaracion}> Existen a partir del numero 1 al numero 3944</Text>
                        </View>
                    </View>
                );
            } else {
                return (
                    <View style={styles.container}>
                        <Text style={styles.danger}>Numero de Registro INVALIDO</Text>

                        <View >
                            <Text style={styles.titulo} h2> Ingrese numero de Registro</Text>
                            <TextInput
                            editable
                            keyboardAppearance={'light'}
                            maxLength={4}  
                            style={styles.cuadrado}
                            onChange={this.handlerObtenerNumeroRegistro}
                            numberOfLines={4}
                            /> 
                            <Button 
                                onPress={this.handlerObtenerMedicamento}
                                title="Apretar"
                                color="#841584"
                            />
                        </View>
                            <Text style={styles.aclaracion} h2> Existen a partir del numero 1 al numero 3944</Text>
                        
                        
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
  