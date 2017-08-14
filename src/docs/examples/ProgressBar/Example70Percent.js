import React from 'react';
import ProgressBar from 'ps-react/ProgressBar';

/** Show a 70% progress */
const Example10Percent = () => {
        return ( <ProgressBar 
                  percent = { 70 }
                  width = { 150 }
                />
            );
        };

        export default Example10Percent;