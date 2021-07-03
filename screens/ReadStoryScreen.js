import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList  } from 'react-native';
import { useValue } from 'react-native-reanimated';
import { SearchBar } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import AppHeader2 from '../components/AppHeader2';
import { TouchableOpacity } from 'react-native';




export default class ReadStoryScreen extends React.Component{
    
    state = {
      storiesId:'',
        search: '',
        allStories:[],
      };

      

      retrieveStories = async()=>{
        var text = this.state.search;
        
        const query = await db.collection("stories").where('name','==',text).limit(10).get();
        query.docs.map((doc)=>{
          this.setState({
            allStories:[...this.state.allStories, doc.data()],
          })
        })

        
      }


      
    
    
    render(){
        return(
            <View>
                <AppHeader2/>
                <SearchBar
        placeholder="Type Here..."
        onChangeText = {(text)=>{this.setState({
            search:text,
          })}}
        value={this.state.search}
      />

      <TouchableOpacity style={{backgroundColor:'yellow',width:60,height:40,alignSelf:'center'}} onPress={this.retrieveStories}><Text>Search</Text></TouchableOpacity>

<FlatList
          data={this.state.allStories}
          renderItem={({item})=>(
            <View style={{borderBottomWidth: 2, backgroundColor:'grey',}}>
              <Text>{"Title: " + item.name }</Text>
              <Text>{"Author: "+ item.author }</Text>
            </View>
          )}
          keyExtractor= {(item, index)=> index.toString()}
          onEndReachedThreshold={0.7}
        />

      


            </View>

        )
    
    }
}