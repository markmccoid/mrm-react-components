import React from 'react';
import ProgressBar from 'ps-react/ProgressBar';

/** Show a 100% progress and height of 20px */
const Example10Percent = () => {
        return ( <ProgressBar 
            percent={100}
            width={150}
            height={20}
            />);
        };

export default Example10Percent;