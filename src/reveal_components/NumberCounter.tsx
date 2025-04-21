import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface NumberCounterProps {
    from: number;
    to: number;
    duration?: number;
    delay?: number;
}

const NumberCounter = ({ from, to, duration = 1, delay = 0 }: NumberCounterProps) => {
    const [currentValue, setCurrentValue] = useState(from);
    const controls = useAnimation();
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            controls.start({ value: to, transition: { duration, delay } });
        }
    }, [isInView, controls, to, duration, delay]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial={{ value: from }}
            onUpdate={(latest) => setCurrentValue(Math.round(latest.value))}
        >
            {currentValue}
        </motion.div>
    );
};

export default NumberCounter;
