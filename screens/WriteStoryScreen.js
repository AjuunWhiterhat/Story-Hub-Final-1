import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,KeyboardAvoidingView, ToastAndroid, ScrollView} from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';
import firebase from 'firebase';



export default class WriteStoryScreen extends React.Component{

    constructor(){
        super();
        this.state = {storyTitle:'',author:'',story:'', storyId:'s1'}
    }

    

    submitStory = async()=>{
        db.collection('story').doc(this.state.storyId).update({
          "storyTitle":this.state.storyTitle,
          "author":this.state.author,
          "story":this.state.story  
        })

        ToastAndroid.show("Your story has been submitted", ToastAndroid.SHORT);
    }

    
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" enabled>
            <ScrollView>
                <AppHeader/>
                <TextInput style={styles.inputBox} placeholder="Story Title" onChangeText = {(text)=>{this.setState({
   storyTitle:text,
 })}} value={this.state.storyTitle} />
                <TextInput style={styles.inputBox} placeholder="Author" onChangeText = {(text)=>{this.setState({
   author:text,
 })}} value={this.state.author}/>
                <TextInput style={styles.inputBox2} placeholder="Write your story" onChangeText = {(text)=>{this.setState({
   story:text,
 })}} value={this.state.story}/>


                <TouchableOpacity style={{width:60,height:30,backgroundColor:'pink',alignSelf:'center', justifyContent:'center', marginTop:25}} 
                onPress={this.submitStory}>
                    <Text style={{fontWeight:'bold',textAlign:'center'}}>Submit</Text>
                </TouchableOpacity>

            </ScrollView>

            </KeyboardAvoidingView>

            
            
            
        )
    
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
      },
inputBox:{width:'80%',height:40, borderWidth:1.5, fontSize:20, alignSelf:'center', marginBottom:20, marginTop:20 },
inputBox2:{width:'80%',height:320, borderWidth:1.5, fontSize:20, alignSelf:'center'},
})