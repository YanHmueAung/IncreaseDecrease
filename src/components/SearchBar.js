import React from 'react';
import {View, Text,StyleSheet,TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar=({term,searchTerm,onTermSubmit})=>{
    return(
        <View style={styles.background}>
            <Feather style={styles.iconStyle} name='search' size={30}/>
            <TextInput 
            style={styles.inputStyle}
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Search'
            value={term}
            onChangeText={searchTerm}
            onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    background:{
        marginTop:10,
        backgroundColor:'#00EEFF',
        height:50,
        marginHorizontal:15,
        borderRadius:12,
        flexDirection:'row',
        marginBottom:10,
    },inputStyle:{
        //borderColor:'black',
        //borderWidth:1,
        flex:1,
        fontSize:18,
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15,
    }
})
export default SearchBar;