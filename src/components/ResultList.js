import React from "react";
import {View, Text,StyleSheet} from 'react-native';
import { FlatList } from "react-native-gesture-handler";

const ResultList=({title,result})=>{
    return(
        <View>
            <Text style={style.titleStyle}>{title}</Text>
            <Text>Result is {result.length}</Text>
            <FlatList
            horizontal
            data={result}
            keyExtractor={result=>result.id}
            renderItem={({item})=>{
                return(
                    <Text>{item.name}</Text>
                )
            }}
            />
        </View>
    )
}
const style=StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:'bold'
    }
})

export default ResultList;