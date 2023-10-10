import {CiFacebook,CiInstagram,CiLinkedin} from 'react-icons/ci'

export default function BottomFooter() {
    return (
        <>
            <div className="w-full flex flex-col bg-darkBlue text-gray-300 justify-center 
            items-center p-4 text-xs">
                <h2 className='text-2xl text-primaryGreen'>FIN INFOLIB</h2>
                <div className='w-full mt-6'>
                    <ul className='w-full flex justify-between border-b border-gray-400 pb-2 mb-2
                    '>
                        <li><a>About Us</a></li>
                        <li><a>Services</a></li>
                        <li><a>Terms & Conditions</a></li>
                        
                    </ul>
                </div>
                <div className='w-full '>
                    <ul className='w-full flex justify-between pb-4'>
                        <li><a>Privacy Policy </a></li>
                    <li><a>Disclaimer</a></li>
                    <li><a>Accessibility</a></li>
                    
                    </ul>
                </div>
                <div className="w-2/5">
                    <ul className='flex justify-between'>
                        
                        <a className='text-primaryGreen w-fit h-fi px-2 py-2 text-3xl font-bold'><CiFacebook /></a>
                        <a className='text-primaryGreen w-fit h-fi px-2 py-2 text-3xl font-bold'><CiInstagram/></a>
                        <a className='text-primaryGreen w-fit h-fi px-2 py-2 text-3xl font-bold'><CiLinkedin/></a>
                    </ul>

                </div>
                <label className='text-center text-white mt-2'>Copyright © 2023 | All Rights Reserved</label>
            </div>
        </>
    )
}