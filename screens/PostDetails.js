import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View,Image, TextInput,StatusBar , FlatList, TouchableOpacity, ScrollView,SafeAreaView } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {stylesMain} from '../Styles/Styles'
import Icon from 'react-native-vector-icons/FontAwesome';
const PostDetails = ({route,navigation}) => {
    const item = route.params;
    
    const recentImage = { uri: "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" };
    const [gallery, setgallery] = useState([
      { image: {uri: 'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27'}, title: 'Switzerland',  key: '1' },
      { image:{uri:'https://cdn.pixabay.com/photo/2018/11/29/21/19/hamburg-3846525_960_720.jpg'}, title: 'New Zeland',key: '2' },
      { image:{uri:'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_960_720.jpg'}, title: 'Rome',key: '3' },
      { image:{uri:'https://cdn.pixabay.com/photo/2018/03/12/20/07/maldives-3220702_960_720.jpg'}, title: 'Tahiti', key: '4' },
    ]);
    const suggest = gallery.filter((img)=>img!=item);
    // data.filter(data => data.state == "New York" && count === 2);
    return(
      <View>
        {/* <Text>{JSON.stringify(item)}</Text> */}
        <View>
          <Image 
            source={item.image}
            style={{
              height:350,
              borderBottomRightRadius:50,
              borderBottomLeftRadius:50,
            }
            }
          />
          <View style={{position:'absolute',top:200,left:20,right:20}}>
            <Text style={{color:'#fff',fontSize:28,fontWeight:'bold'}}>Discover {item.title}</Text>
            <Text style={{color:'#f3f3f3',opacity:0.9,fontSize:23,fontWeight:'normal'}}>Explore the scenic beauty of {item.title}</Text>
          </View>
           <TouchableOpacity style={styels.bookNowBtn}>
             <Text style={styels.bookNowText}>Book Now</Text>
           </TouchableOpacity>
           <TouchableOpacity style={{position:'absolute',top:40,left:20,backgroundColor:'#ff6200',padding:10,borderRadius:40}}>
           <Feather name="arrow-left" size={28} color="#fff" onPress={() => navigation.popToTop()}  />
           </TouchableOpacity>
           <TouchableOpacity style={{position:'absolute',top:40,right:20,backgroundColor:'#ff6200',padding:10,borderRadius:40}}>
              <Feather name="heart" size={28} color="#fff"  />
           </TouchableOpacity>      
        </View>
        <ScrollView>
            <View>
              <Text style={{padding:24,fontSize:24}}>About this place</Text>
              <Text style={{paddingLeft:24,fontSize:18,paddingRight:24,textAlign:'justify',lineHeight:26}} >
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>
            </View>
            <Text style={{fontSize:24,fontWeight:'bold',padding:10,marginLeft:5}}>Suggest</Text>
            <FlatList 
            horizontal = {true}
              data={suggest}
              renderItem={({item})=>(
                <View style={{paddingLeft:10}}> 
                  <TouchableOpacity onPress={()=> navigation.navigate('PostDetails',item)}>
                    <Image 
                      source={item.image}
                      style={{height:250,width:150,borderRadius:10,marginRight:10,marginLeft:4}}
                    />
                    <View style={stylesMain.topTrendingOverlay}></View>
                  </TouchableOpacity>
                  <View style={stylesMain.imageTitle}>
                    <Icon name="map-marker" size={20} color="#fff" />
                    <Text style={{color:'#fff',fontSize:16,marginLeft:10}}>{item.title}</Text>
                  </View>
                </View>
              )}
            />
            <View>
              <View style={stylesMain.recentViewTitle}>
                <Text style={{fontSize:36,fontWeight:'bold',marginLeft:5}}>Recent View</Text>
                <Text style={{marginTop:18,color:'coral',fontSize:18}}>View all</Text>
              </View>
              <View>
                <Image 
                  source={recentImage}
                  style = {{
                    height:300,
                    borderRadius:15,
                    marginLeft:10, 
                    marginRight:10               
                  }}
                />                         
              </View>
            </View>
          </ScrollView>
       

      </View>
    )
}

export default PostDetails;

const styels = StyleSheet.create({
  topIconBar:{
    flexDirection:'row',
    position:'absolute',
    
  },
  topIcon:{
    backgroundColor:'orange',
    width:40,
    height:40,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    paddingTop:5,
    paddingLeft:5,
  },
  bookNowBtn:{
    position:'absolute',
    top:330,
    right:20,
    backgroundColor:'#ff6200',
    padding:16,
    borderRadius:40,
    elevation: 8,
  },
  bookNowText:{
    color:'#fff',
    fontSize:14
  },
  // copy
  topTrendingOverlay:{
    paddingLeft:10,
    height:250,
    width:150,
    marginRight:10,
    marginLeft:4,
    backgroundColor:'#000',
    position:'absolute',
    opacity:0.1,
    borderRadius:10
  },
  imageTitle:{
    flexDirection:'row',
    position:'absolute',
    paddingLeft:18,
    marginTop:220
  },
  scrollView: {
    marginHorizontal: 10,
    paddingBottom:100
  },
  text: {
    fontSize: 42,
  },
  //copy

})