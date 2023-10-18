import React, { useContext, useState, createContext, useEffect } from 'react';
import axios from 'axios';
import { ImageState } from '../Context/ImageProvider';


//Creating custom hook for fetching data from unsplash api
const useImgApi = (param) => {

    //getting required states from global context
    const { response, setResponse } = ImageState();

    //base URL
    axios.defaults.baseURL = 'https://api.unsplash.com';

    const fetchData = async (url) => {
        try {
            const res = await axios(url);
            setResponse(res.data.results);

        } catch (error) {
            console.log(error);
           
        }
    }

    useEffect(() => {
        fetchData(param);
    }, [param])




    return { response, fetchData: url => fetchData(url) };
}

export default useImgApi;