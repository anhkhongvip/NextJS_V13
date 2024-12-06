import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

type Props = {
    bgColorProgress: string;
    total: number;
    target: number;
}


const AnimatedCircle = styled.circle`
    transition: stroke-dashoffset 2s ease-in-out;
`

const CardProgress = ({total, target, bgColorProgress}: Props) => {
    const [progress, setProgress] = useState<number>(1)
    useEffect(() => {
        setProgress(total / target);
    }, [total])
    return (
        <div className={'w-[3.75rem] h-[3.75rem] skew-y-[180deg] origin-center'}>
            <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
                <circle
                    cx="22"
                    cy="22"
                    r="15.91549431"
                    fill="transparent"
                    stroke="#d3d3d3"
                    strokeWidth="10"
                />
                <AnimatedCircle
                    cx="22"
                    cy="22"
                    r="15.91549431"
                    fill="transparent"
                    stroke={bgColorProgress}
                    strokeWidth="10"
                    strokeDasharray="100, 100"
                    strokeDashoffset={progress * 100}
                />
            </svg>
        </div>
    )
}

export default CardProgress