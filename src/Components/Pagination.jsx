import React, { useEffect, useState } from 'react'
import useImgApi from '../hooks/useImgApi';

const Pagination = ({ heading, page, setPage }) => {

    const { fetchData } = useImgApi();

    const handleInc = () => {
        setPage((prev) => prev + 1);
    }
    const handleDec = () => {
        page >=2 ? setPage((prev)=>prev-1) :<></> 

    }
    useEffect(()=>{
        fetchData(`/search/photos?page=${page}&query=${heading}&client_id=ryOeIMFxJgTHcNn31v3JmOhyFmEZWyhswqPeg-10lZM`);

    },[page]);

    return (
        <>


            <div id='footer' aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link text-black" role='button' onClick={handleDec} >Previous</a></li>
                    <li className="page-item"><a className="page-link text-black" role='button' >{page}</a></li>
                    <li className="page-item"><a className="page-link text-black" role='button' onClick={handleInc}>Next</a></li>
                </ul>
            </div>
          

        </>
    )
}

export default Pagination
