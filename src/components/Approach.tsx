import React from 'react';
import './styles/Approach.css';
import FlagIcon from '@mui/icons-material/Flag';
import DrawIcon from '@mui/icons-material/Draw';
import CodeIcon from '@mui/icons-material/Code';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Reveal from '../reveal_components/Reveal';
import { useTranslation } from 'react-i18next';

const Approach = () => {
    const { t } = useTranslation();

    const steps = [
        {
            number: '01',
            icon: <FlagIcon className='step_icon' sx={{ fontSize: '40px' }} />,
            title: t('approach.understandGoals.title'),
            description: t('approach.understandGoals.description'),
            delayOrder: 0,
        },
        {
            number: '02',
            icon: <DrawIcon className='step_icon' sx={{ fontSize: '40px' }} />,
            title: t('approach.designWithPurpose.title'),
            description: t('approach.designWithPurpose.description'),
            delayOrder: 1,
        },
        {
            number: '03',
            icon: <CodeIcon className='step_icon' sx={{ fontSize: '40px' }} />,
            title: t('approach.buildEfficiently.title'),
            description: t('approach.buildEfficiently.description'),
            delayOrder: 2,
        },
        {
            number: '04',
            icon: <AutoFixHighIcon className='step_icon' sx={{ fontSize: '40px' }} />,
            title: t('approach.refineAndOptimize.title'),
            description: t('approach.refineAndOptimize.description'),
            delayOrder: 3,
        },
    ];

    return (
        <>
            <Reveal width={'100%'}>
                <h1 className='projects_title'>{t('approach.title')}</h1>
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
