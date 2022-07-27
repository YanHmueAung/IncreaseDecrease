import React,{useEffect, useState} from 'react';
import {View, Text,StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResult from '../hooks/useResult';
import ResultList from '../components/ResultList';

const SearchScreen=()=>{
    const [term,setTerm]=useState('');
    const [SearchApi,result,errorMessage]=useResult()
    console.log(result)

    const filterResultByPrice=(price)=>{
        return result.filter((results)=>{
            return results.price === price
        })
    }
    return(
        <View>
            <SearchBar 
            term={term} 
            searchTerm={setTerm}
            onTermSubmit={SearchApi}
            />
            {errorMessage ? <Text>{errorMessage}</Text>:null}
            
            <Text>we found {result.length} results</Text>
            <ResultList result={filterResultByPrice('$')} title='Cost Effective'/>
            <ResultList result={filterResultByPrice('$$')} title='Bit Pricer'/>
            <ResultList result={filterResultByPrice('$$$')} title='Big Spender'/>

        </View>
    )
}

const styles=StyleSheet.create({})
export default SearchScreen;