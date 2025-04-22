import React from 'react';
import './styles/Approach.css';
import FlagIcon from '@mui/icons-material/Flag';
import DrawIcon from '@mui/icons-material/Draw';
import CodeIcon from '@mui/icons-material/Code';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Reveal from '../reveal_components/Reveal';

const steps = [
    {
        number: '01',
        icon: <FlagIcon className='step_icon' sx={{ fontSize: '40px' }} />,
        title: 'Understand Goals',
        description: 'We start by diving deep into your business objectives and user needs.',
        delayOrder: 0,
    },
    {
        number: '02',
        icon: <DrawIcon className='step_icon' sx={{ fontSize: '40px' }} />,
        title: 'Design with Purpose',
        description: 'Creating meaningful and engaging UI/UX centered around users.',
        delayOrder: 1,
    },
    {
        number: '03',
        icon: <CodeIcon className='step_icon' sx={{ fontSize: '40px' }} />,
        title: 'Build Efficiently',
        description: 'Developing responsive, scalable, and maintainable code.',
        delayOrder: 2,
    },
    {
        number: '04',
        icon: <AutoFixHighIcon className='step_icon' sx={{ fontSize: '40px' }} />,
        title: 'Refine & Optimize',
        description: 'We fine-tune your solution to meet business goals and user delight.',
        delayOrder: 3,
    },
];

const Approach = () => {
    return (
        <>
            <Reveal width={'100%'}>
                <h1 className='projects_title'>From Data to Design</h1>
                <div className='approach_container'>
                    {steps.map((step, index) => (
                        <Reveal key={index} delayOrder={step.delayOrder}>
                            <div className='step_container'>
                                <div className='step_number'>{step.number}</div>
                                {step.icon}
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Reveal>
        </>
    );
};

export default Approach;
