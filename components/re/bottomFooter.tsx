import {CiFacebook,CiInstagram,CiLinkedin} from 'react-icons/ci'

export default function BottomFooter() {
    return (
        <>
            <div className="w-full flex flex-col bg-sH text-white justify-center 
            items-center p-4 text-xs">
                <h2 className='text-3xl text-pH font-bold '>FIN INFOLIB</h2>
                
                <div className="w-2/5">
                    <ul className='flex justify-between'>
                        
                        <a className='text-white bg-gray-800 rounded-md w-fit h-fit px-1 py-1 text-3xl font-bold'><CiFacebook /></a>
                        <a className='text-white bg-gray-800 rounded-md w-fit h-fit px-1 py-1 text-3xl font-bold'><CiInstagram/></a>
                        <a className='text-white bg-gray-800 rounded-md w-fit h-fit px-1 py-1 text-3xl font-bold'><CiLinkedin/></a>
                    </ul>

                </div>
                <label className='text-center text-white mt-2'>Copyright © 2023 | All Rights Reserved</label>
            </div>
        </>
    )
}