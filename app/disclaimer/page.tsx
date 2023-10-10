import BottomFooter from "@/components/bottomFooter"

const Disclaimer:()=>void = ()=>{
    return (
        <>
            <div className="text-gray-700">
                <div className="flex h-fit bg-gradient-to-b from-o1 to-o2">
                    <label className="text-2xl pl-6 text-white font-bold
                    py-4">Disclaimer</label>
                </div>
                <div className="flex flex-col space-y-4 m-2 pl-4 mt-2 bg-bg2">
                    <h2 className="text-primaryGreen text-xl font-bold pt-4 ">Disclaimer </h2>
                    <p className="text-sm">
                    All content available on this site is the sole property of FIN INFOLIB.  
                     The software, text, images, and graphics used on this site belong to FIN 
                       INFOLIB. No material from this site may be copied, modified,   reproduced, 
                       
                       republished, uploaded, transmitted, posted or distributed in  
                        any form without prior written permission from FIN INFOLIB. All rights 
                          not expressly granted herein are reserved. Illegal use of the materials 
                            appearing on this site may violate copyright, trademark and other 
                      applicable laws, and could result in criminal or civil penalty.
                    </p>
                    <p className="text-sm pb-4">
                    We have taken appropriate precautions to ensure that your 
                      access to this website is secure and free from any viruses or similar 
                        destructive software. However, FIN INFOLIB does not, in any manner and 
                          for any purpose, warrant that your access to this website will be secure  
                           and free from any destructive software and you are hereby cautioned  
                            that viruses, Trojans or similar will not, under any circumstances, 
                              accept any liability for
                     any damage sustained as a result of your   accessing this website.

                    </p>
                    
                </div>
            </div>
            <div className="mt-4">
                <BottomFooter/>
            </div>
        </>
    )
}
export default Disclaimer