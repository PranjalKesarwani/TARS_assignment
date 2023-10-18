import { createContext, useEffect, useState } from 'react'
import { useContext } from 'react';



const ImageContext = createContext(); //basically it creates an context object

const ImageProvider = ({ children }) => {
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [search, setSearch] = useState('');
    const [mode, setMode] = useState(false);


    const value = {
        response,
        isLoading,
        error,
        search,
        setSearch,
        setResponse,
        setIsLoading,
        setError,
        mode,
        setMode

    }
    return (
        <ImageContext.Provider value={value}>
            {children}
        </ImageContext.Provider>
    )
}

export const ImageState = () => {

    return useContext(ImageContext);
}

export default ImageProvider