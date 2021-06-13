import {StyleSheet} from 'react-native'

export const stylesMain = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    coverImage:{
      height:300,
      width:'100%',
      borderBottomRightRadius:60 
    },
    coverOverlay:{
     height:300,
     width:'100%',
     borderBottomRightRadius:60,
     position:'absolute',
     backgroundColor:'#000',
     opacity:0.1
    },
    searchBox:{
      position:'absolute',
      borderWidth:1,
      borderColor:'#333',
      marginTop:200,
      backgroundColor:'#fff',
      borderTopRightRadius:50,
      borderBottomRightRadius:50,
      paddingLeft:10,
      width: 250
    },
    coverHeading:{
      position:'absolute',
      color: '#fff',
      fontSize:40,
      fontWeight: 'bold',
      marginTop:90,
      marginLeft:10
    },
    coverParagrapg:{
      position: 'absolute',
      color: '#f3f3f3',
      marginTop:150,
      marginLeft:10
    },
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
    recentViewTitle:{
      flexDirection: 'row',
      padding:10,
      justifyContent:'space-between',
    },
    recentViewImageTitle:{
      position:'absolute',
      flexDirection:'row',
      paddingTop:140,
      paddingLeft:25,
    }
  
  });