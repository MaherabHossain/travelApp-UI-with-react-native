import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View,Image, TextInput, FlatList, TouchableOpacity, ScrollView } from "react-native";
import {stylesMain} from '../Styles/Styles'
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Home ({navigation}){
    const recentImage = { uri: "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" };
    const [gallery, setgallery] = useState([
      { image: {uri: 'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27'}, title: 'Switzerland',  key: '1' },
      { image:{uri:'https://cdn.pixabay.com/photo/2018/11/29/21/19/hamburg-3846525_960_720.jpg'}, title: 'New Zeland',key: '2' },
      { image:{uri:'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_960_720.jpg'}, title: 'Rome',key: '3' },
      { image:{uri:'https://cdn.pixabay.com/photo/2018/03/12/20/07/maldives-3220702_960_720.jpg'}, title: 'Tahiti', key: '4' },
    ]);
  
    return(
          <View style={stylesMain.container}>
            <Image
                source={require('../asset/cover.jpg')}
                style={stylesMain.coverImage}
              />
              <TouchableOpacity style={{position:'absolute',top:30,left:20,backgroundColor:'#333',padding:10,borderRadius:50}}>
             <Icon name="sliders"  size={28} color="#fff" />
             </TouchableOpacity>
            <View style={stylesMain.coverOverlay}></View>
            <TextInput placeholder="Search location..." style={stylesMain.searchBox} />
            <Text style={stylesMain.coverHeading}>Hi! MaHerab..</Text>
            <Text style={stylesMain.coverParagrapg}>
              Where you go like today?
            </Text>
            <ScrollView>
              <Text style={{fontSize:36,fontWeight:'bold',padding:10,marginLeft:5}}>Top Treanding</Text>
              <FlatList 
              horizontal = {true}
                data={gallery}
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
                  <View style={stylesMain.recentViewImageTitle}>
                    <Icon name="map-marker" size={24} color="#fff" />
                    <Text style={{color:'#fff',fontSize:24,fontWeight:'bold',marginLeft:10}}>Venice</Text>
                  </View>
                  <Text style={{lineHeight:20,position:'absolute',color:'#f3f3f3',justifyContent:'center',paddingTop:180,paddingLeft:25,paddingRight:25}}>
                      Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals
                  </Text>
                </View>
              </View>
            </ScrollView>
        </View>
        )
  }

