import React from "react";
import {View, StyleSheet,Text,Image} from 'react-native';
const im='https://dominionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg';
const ResultDetails=({result})=>{
    return(
        <View style={style.container}>
            {console.log(result.image_url)}
            {(!result.image_url)? 
            <Image 
            style={style.image} 
            source={{uri:im}} />
            :<Image 
            style={style.image} 
            source={{uri:result.image_url}} />}
            
            <Text style={style.name}>{result.name}</Text>
            <Text>
                {result.rating} Starts,
                {result.review_count} Review
            </Text>
        </View>
    )
}
const style=StyleSheet.create({
    container:{
        marginLeft:15,
    },
image:{
    width:250,
    height:120,
    borderRadius:4
},
name:{
    fontSize:16,
    fontWeight:'bold'
}
});

export default ResultDetails;