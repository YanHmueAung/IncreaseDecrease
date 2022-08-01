import React from "react";
import {View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

import ResultDetails from "./ResultDetails";

const ResultList=({title,result,navigation})=>{
    if(!result.length){
        return null;
    }
    return(
        <View style={style.container}>
            <Text style={style.titleStyle}>{title}</Text>
            {/* <Text>Result is {result.length}</Text> */}
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={result}
            keyExtractor={result=>result.id}
            renderItem={({item})=>{
                return(
                    <View>
                        <TouchableOpacity 
                        onPress={()=>navigation.navigate('Result',
                        {id:item.id})}
                        >
                        <ResultDetails result={item}/>
                        </TouchableOpacity>
                        
                    </View>
                    
                )
            }}
            />
        </View>
    )
}
const style=StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5,
    },
    container:{
        marginBottom:10,
    }
})

export default withNavigation(ResultList);