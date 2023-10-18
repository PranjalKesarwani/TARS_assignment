import React from 'react'
import { ImageState } from '../Context/ImageProvider';

const Modal = ({ setIsModal, selectedUser }) => {

    const handleCloseModal = () => {
        setIsModal(false);
    }

    return (
        <div className='modalContainer absolute right-0 top-0  text-white  flex items-center justify-center'>
            <div className=" modalChild1 bg-white  p-1  text-black">

                <a href={selectedUser.urls.full} target='_blank' className="imgBox bg-slate-50  flex items-center justify-center">
                    <img src={selectedUser.urls.full} title='Click for full display' className='w-fit h-full' alt="" />
                </a>
                <div className="modalChild2 details w-2/6 flex flex-col justify-around">
                    <div className="w-full text-right  flex items-center justify-end ">
                        <i className="fa-regular fa-circle-xmark cursor-pointer   text-2xl mr-4 p-2" onClick={handleCloseModal}></i>
                    </div>
                    <div className="modalChild3">
                        <div className="userPic ">
                            <img src={selectedUser.user.profile_image.large} className='rounded-full mx-auto ' alt="" />
                        </div>
                        <div className="flex flex-col">
                            <h1 className=' text-center p-1 '>{selectedUser.user.first_name} {selectedUser.user.last_name}</h1>
                            <hr className=' w-2/4 mx-auto' />
                            <h1 className=' text-center p-1 '><i className="fa-solid fa-heart text-red-500 m-1"></i>{selectedUser.user.total_likes}</h1>
                            <hr className=' w-2/4 mx-auto' />
                            <div className=' text-center p-1 '><i className="fa-brands fa-instagram"></i> {selectedUser.user.social.instagram_username}</div>
                            <hr className=' w-2/4 mx-auto' />
                            {
                                selectedUser.user.social.twitter_username ? <><div className='flex items-center justify-center p-1'><i className="fa-brands fa-twitter mr-1 text-blue-600"></i>{selectedUser.user.social.twitter_username}</div></> : <></>
                            }
                            <hr className=' w-2/4 mx-auto' />

                        </div>
                    </div>



                    <a href={selectedUser.user.portfolio_url} target='_blank' className='text-center text-black'><i className="fa-regular fa-share-from-square text-black mr-2"></i>My_Portfolio</a>


                </div>


            </div>
        </div>
    )
}

export default Modal
