import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface Props {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delayOrder?: number;
}

const Reveal = ({ children, width = "fit-content", delayOrder = 0 }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }
        , [isInView]);
    return (
        <div ref={ref} style={{ position: 'relative', width: width, }}>
            <motion.div variants={{
                hidden: {
                    opacity: 0,
                    y: 75
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        delay: 0.25 + delayOrder * 0.2
                    }
                }
            }}
                initial='hidden'
                animate={mainControls}
            >{children}</motion.div>
        </div>
    )
}

export default Reveal
