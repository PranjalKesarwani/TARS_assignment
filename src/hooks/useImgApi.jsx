import React, { useContext, useState, createContext, useEffect } from 'react';
import axios from 'axios';
import { ImageState } from '../Context/ImageProvider';



 const useImgApi = (param)=>{

const {response,setResponse,isLoading,setIsLoading,error,setError} = ImageState();
    // const [response,setResponse] = useState([]);
    // const [isLoading,setIsLoading] = useState(false);
    // const [error,setError] = useState('');

    axios.defaults.baseURL = 'https://api.unsplash.com';
    // const baseUrl = 'https://api.unsplash.com'

  const fetchData = async (url)=>{
        try {

         
            setIsLoading(true);
           const res = await axios(url);
        //    const res = await axios.get(`${baseUrl}/${url}`);
           setResponse(res.data.results);
            
        } catch (error) {
           
            setError(error);
        }finally{
            setIsLoading(false);
            
        }
    }

    useEffect(()=>{
        fetchData(param);
    },[param])
    



    return {response,isLoading,error,fetchData:url=>fetchData(url)};
}

export default useImgApi;