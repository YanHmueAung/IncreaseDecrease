import { useEffect,useState } from "react";
import yelp from "../api/yelp";

export default()=>{
    const [result,setResult]=useState('');
    const [errorMessage,setErrorMessage]=useState('');

    const SearchApi=async (searchTerm)=>{
        console.log('Hi t')
    try{
        const response=await yelp.get('/search',{
            params:{
              limit:50,
              term:searchTerm,
              location:'Myanmar'
            }
        });
        setResult(response.data.businesses);
    }catch(e){
        console.log('khe')
        setErrorMessage('wrong');
    }
    };

    useEffect(()=>{
        SearchApi('pasta');
    },[])
return [SearchApi,result,errorMessage]
}