import React from 'react';
import { ImageState } from '../Context/ImageProvider';


const Navbar = () => {
    const { setMode,mode } = ImageState();

    //For toggling dark/light mode
    const handleMode = (e)=>{
        setMode(e.target.checked);
    }

    return (

        <nav className={mode ? 'bg-slate-50 w-full flex  px-1 py-2 items-center justify-between bg-dark text-white fixed shadow-md' : 'bg-slate-50 w-full flex  px-1 py-2 items-center justify-evenly fixed shadow-md'}>
            <div className='p-1 w-3/12 title'>
                <h1 className='w-full text-center navTitle'>Image Gallery</h1>
            </div>
           
            <div className='flex  p-1 w-9/12 justify-evenly items-center'>
                <div className='flex gap-1 text-sm  p-1'>
                    <div className='p-1 '>Explore</div>
                    <div className='p-1 '>Collection</div>
                    <div className='p-1 '>Community</div>
                </div>

                <div className="form-check form-switch">
                    <input className="form-check-input cursor-pointer" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={(e) => handleMode(e)} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked"> {mode ? 'Light Mode' : 'Dark Mode'} </label>
                </div>


            </div>
        </nav>
   

    )
}

export default Navbar

