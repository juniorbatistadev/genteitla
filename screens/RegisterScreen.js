import React from 'react';
import {View} from 'react-native';

import defaultStyles from '../styles/defaultStyle'

import RegisterForm from "../components/forms/RegisterForm";

export default class RegisterScreen extends React.Component{

    static navigationOptions = {
        header:null
    }

    render(){
        return(
            <View style={defaultStyles.center}>
                <RegisterForm/>
            </View>
        )
    }
}