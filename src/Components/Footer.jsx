import React, { useState } from 'react'
import useImgApi from '../hooks/useImgApi';

const Footer = ({ heading, page, setPage }) => {

    // const [page,setPage] = useState(1);
    const { fetchData } = useImgApi();
    let prevHeading = heading;




    const handleIncPage = () => {
        setPage((prev) => prev + 1);
        fetchData(`/search/photos?page=${page}&query=${heading}&client_id=ryOeIMFxJgTHcNn31v3JmOhyFmEZWyhswqPeg-10lZM`);

        console.log(page);
    }
    const handleDecPage = () => {

        if (page >= 2) {
            setPage((prev) => prev - 1);
            fetchData(`/search/photos?page=${page}&query=${heading}&client_id=ryOeIMFxJgTHcNn31v3JmOhyFmEZWyhswqPeg-10lZM`);

            console.log(page);
        }

    }

    return (
        <>


            <div id='footer' aria-label="Page navigation example">
                <ul class="pagination ">
                    <li class="page-item"><a class="page-link text-black" role='button' onClick={handleDecPage} >Previous</a></li>
                    <li class="page-item"><a class="page-link text-black" role='button' >{page}</a></li>
                    <li class="page-item"><a class="page-link text-black" role='button' onClick={handleIncPage}>Next</a></li>
                </ul>
            </div>
          

        </>
    )
}

export default Footer
