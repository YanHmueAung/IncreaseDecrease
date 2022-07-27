import React from "react";
import {View, Text,StyleSheet} from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import ResultDetails from "./ResultDetails";

import ResultDetailsl from "./ResultDetails";

const ResultList=({title,result})=>{
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
                        <ResultDetails result={item}/>
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

export default ResultList;