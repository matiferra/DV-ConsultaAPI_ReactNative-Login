import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import {HomeScreen} from "../Screens/HomeScreen";
import {Api} from "../Screens/ApiMedicamentos";
import {DrawerContentScreen} from "../Screens/DrawerContentScreen";

const Drawer = createDrawerNavigator();

export default class DrawerMenu extends Component {
    
    render(){
        return(
            <Drawer.Navigator 
                initialRouteName="Home"
                headerMode={'none'}
                drawerContent={props => <DrawerContentScreen {...props} onLogout={() => this.props.onLogout()}/>}
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="API" component={Api} />
            </Drawer.Navigator>
        );
    }
    
}

