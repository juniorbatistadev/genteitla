import React from 'react'
import {Text, View, TextInput, Button, ActivityIndicator} from 'react-native'

import defaultStyles from '../../styles/defaultStyle'

export default class RegisterForm extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            name: '',
            email: '',
            password: '',
            isLoading: false
        }

        this.submitForm = this.submitForm.bind(this)
    }



    submitForm(){
        this.setState({isLoading:true})
        fetch('https://api.backendless.com/42963805-9DD5-EB2A-FF49-9402264BF100/BFAA75ED-D030-8862-FF45-357D2A157200/users/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
            }),
        })
        .then((response) =>  response.json())
        .then((data)=> {
            if(data.code){
                alert(data.message)
            }
            if(data.created){
                alert('Success!')
            }
            this.setState({isLoading:false})
        })
    }

    render(){
        
        if(this.state.isLoading){
            return <ActivityIndicator size="large" color="#0000ff" />

        }

        return(
            <View>
                <Text>Sign Up</Text>
                
                <TextInput
                    name="name"
                    style={defaultStyles.inputText}
                    onChangeText ={ (text) => this.setState({name:text}) }
                    value={this.state.name}
                    placeholder="What's your name?"
                    maxLength={20}
                />

                <TextInput
                    name="email"
                    style={defaultStyles.inputText}
                    onChangeText ={ (text) => this.setState({email:text})}
                    value={this.state.email}
                    placeholder="What's your email"
                    maxLength={100}
                />

                <TextInput
                    name="password"
                    style={defaultStyles.inputText}
                    onChangeText ={ (text) => this.setState({password:text})}
                    value={this.state.password}
                    secureTextEntry= {true}
                    placeholder="Password"
                    maxLength={1000}
                />

                <Button
                    onPress={this.submitForm}
                    title="Register"
                    color="#841584"
                />

            </View>
        )
    }
}