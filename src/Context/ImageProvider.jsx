import { createContext, useState } from 'react'
import { useContext } from 'react';


//Creating global storage
const ImageContext = createContext(); 


//Creating provider which will take App.jsx as children
const ImageProvider = ({ children }) => {


    const [response, setResponse] = useState([]);
    const [search, setSearch] = useState('');
    const [mode, setMode] = useState(false);


    const value = {
        response,

        search,
        setSearch,
        setResponse,
     
        mode,
        setMode
    }
    return (
        <ImageContext.Provider value={value}>
            {children}
        </ImageContext.Provider>
    )
}

//getting global state from which various components will get the data
export const ImageState = () => {
    return useContext(ImageContext);
}

export default ImageProvider