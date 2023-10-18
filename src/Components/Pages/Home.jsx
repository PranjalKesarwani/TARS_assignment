import React, { useState } from 'react'
import Navbar from '../Navbar'
import axios from 'axios'
import ImgCards from '../ImgCards'
import { ImageState } from '../../Context/ImageProvider'
import useImgApi from '../../hooks/useImgApi'
// import Footer from '../Footer'

const Home = () => {


    const { setSearch, search, mode } = ImageState();
    const { fetchData } = useImgApi();
    const [heading, setHeading] = useState('');


    const handleSearch = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    const handleSearchResult = () => {
        setHeading(search);
        fetchData(`/search/photos?page=1&query=${search}&client_id=ryOeIMFxJgTHcNn31v3JmOhyFmEZWyhswqPeg-10lZM`);
        setSearch("");
    }



    return (
        <div className="home w-full">
            <Navbar />

            <div className="hero col-12 bg-slate-200 p-1">
                <div className="heroChild1 flex flex-col items-center justify-center gap-3 ">
                    <h1 className='heroHead text-white text-center  font-extrabold'>Download High Quality Images by creators</h1>
                    <h6 className=' text-center text-slate-200'>Over 2.4 million+ stock Images by our talented community</h6>
                    <div className='flex items-center justify-center w-full'>
                        <input type="text" value={search} placeholder='Search high resolution Images, categories, wallpapers' className='heroInput rounded-md' onChange={(e) => handleSearch(e)} />
                        <button type="button" className="heroBtn btn btn-primary" onClick={handleSearchResult} disabled={!search} >Search</button>
                    </div>


                </div>
            </div>
            {
                heading ? <><h1 className={mode ? 'text-center p-3 text-lg bg-dark text-white' : 'text-center p-3 text-lg'}>Result: <strong> {heading}</strong></h1></> : <><h1 className={mode ? 'text-center p-3 text-lg bg-dark text-white' : 'text-center p-3 text-lg'}>Result: <strong> Office</strong></h1></>
            }

            <ImgCards />
            {/* <Footer /> */}

        </div>

    )
}

export default Home
