import React from 'react';
import {Button, View, StyleSheet} from 'react-native';


export default class HomeScreen extends React.Component{

    static navigationOptions = {
        headerStyle:{
            height: 0,
        }
    }


    render(){
        const {navigate} = this.props.navigation;
        
        return(
            <View style={Styles.center}>
                <Button title="Register"  onPress={ () => { navigate('Register') } }/>
            </View>
        )
    }
}


const Styles = StyleSheet.create({
    center:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})