import { Variants } from "framer-motion";

const sfl:Variants= {
    initial:{
        x:'100vw',
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:3,
            delay:0.2,
            ease:[0.6,0.01,0.05,0.95]
        }
    }
}

export default sfl