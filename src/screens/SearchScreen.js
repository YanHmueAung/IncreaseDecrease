import React,{useState} from 'react';
import {View, Text,StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen=()=>{
    const [term,setTerm]=useState('');
    const [result,setResult]=useState('');
    const [errorMessage,setErrorMessage]=useState('');

    const SearchApi=async ()=>{
    try{
        const response=await yelp.get('/search',{
            params:{
              limit:50,
              term,
              location:'Singapore'
            }
        });
        setResult(response.data.businesses);
    }catch(e){
        setErrorMessage('something is wrong');
    }
    };

    return(
        <View>
            <SearchBar 
            term={term} 
            searchTerm={setTerm}
            onTermSubmit={SearchApi}
            />
            {errorMessage ? <Text>{errorMessage}</Text>:null}
            <Text>Search Screen1
            </Text>
            <Text>we found {result.length} results</Text>
        </View>
    )
}

const styles=StyleSheet.create({})
export default SearchScreen;