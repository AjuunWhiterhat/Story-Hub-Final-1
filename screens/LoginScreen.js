import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList,KeyboardAvoidingView  } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { Alert } from 'react-native';
import WriteStoryScreen from './WriteStoryScreen';

export default class LoginScreen extends React.Component{
    state = {
        emailId:'',
        password:'',

    }

    Login = async(email,password)=>{
        if(email && password){
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(email,password);
                if(response){
                    this.props.navigation.navigate('WriteStory')
                } 
            }

            catch(error){
                switch (error.code){
                    case 'auth/user-not-found':
                        Alert.alert("user doesn't exist")
                        
                        break;
                        case 'auth/invalid-email':
                        Alert.alert('incorrect email or password')
                }
            }
        }
    }
    render(){

        
        return(
            
                <KeyboardAvoidingView>
                    <View>
                    <Text style={{textAlign:'center',fontSize:30}}>Story Hub</Text>
                    </View>

                    <Image source={require("../assets/bedtime.jpg")}
                    style={{width:200,height:260,alignSelf:'center',marginTop:30}}/>
                        <TextInput
                        
                        style = {styles.loginBox}
                        placeholder="abc@example.com"
                        keyboardType='email-address'
                        onChangeText={(text)=>{
                            this.setState({
                                emailId:text,
                            })
                        }}
                        />

                        <TextInput
                        
                        style = {styles.loginBox}
                        secureTextEntry = {true}
                        placeholder="Enter Password"
                        onChangeText={(text)=>{
                            this.setState({
                                password:text,
                            })
                        }}
                        />
                    

                    <View>
                        <TouchableOpacity style={{height:30,width:130,borderWidth:1,marginTop:50,paddingTop:5,borderRadius:10, alignSelf:'center'}}
                        onPress={()=>{this.Login(this.state.emailId,this.state.password)}}>

                        <Text style={{textAlign:'center'}}>Login</Text>

                        </TouchableOpacity>
                    </View>
                    
                </KeyboardAvoidingView>
                
        )
    }
}

const styles = StyleSheet.create({
    loginBox:{
        width:'20%',
        height:40,
        borderWidth: 1.5,
        alignSelf:'center',
        fontSize:20,
        margin:10,
        paddingLeft:10,
        marginTop:50,
        borderRadius:20,
        
    },
})