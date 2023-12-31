import React, { useEffect, useState } from 'react';
import useImgApi from '../hooks/useImgApi';
import { ImageState } from '../Context/ImageProvider';
import Modal from './Modal';




const ImgCards = () => {


    const { mode } = ImageState();
    //When the component will render useImgApi hook will call the fetch data and then that will set the response
    const { response } = useImgApi(`/search/photos?page=1&query=office&client_id=ryOeIMFxJgTHcNn31v3JmOhyFmEZWyhswqPeg-10lZM`);
    const [isModal, setIsModal] = useState(false);
    const [selectedUser,setSelectedUser] = useState({});


    const openModal = (item) => {
        setIsModal(true);
        setSelectedUser(item);

    }
  
    return (
        <>

            <div className={mode ? 'w-full flex justify-center items-center p-3 bg-dark' : 'w-full flex justify-center items-center p-3'}>

                {
                    isModal ? <><Modal setIsModal={setIsModal} selectedUser={selectedUser} /></> : <></>
                }

                <div className='image-gallery w-12/12  flex flex-wrap gap-3 p-3 items-start justify-around'>

            {/*----------------- Mapping the response------------------*/}

                    {
                        response.map((item, key) => {
                            return (
                                <div key={key} className=' image-container  bg-gray-50 p-1 rounded-md shadow-md'>


                                    <img className="image rounded-md cursor-pointer" src={item.urls.regular} alt={item.alt_description} role='button' onClick={()=>openModal(item)} />

                                    <div className='flex justify-center items-start flex-col p-1'>
                                        <div className='flex items-center justify-start p-1'>
                                            <img className='userProfile mr-2' src={item.user.profile_image.small} alt="" />
                                            <h1>{item.user.name}</h1>
                                        </div>
                                        <h2 className='text-sm'><i className="fa-solid fa-heart text-red-500 m-1"></i>{item.likes}</h2>
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>
            </div>





        </>
    )

}

export default ImgCards
