import React from 'react';

function ConvertStringToNumber(props) {
    const num="2000";
    return (
        <div>
            <div><h1>Convert String to Number</h1></div>
            {Number(num)}
        </div>
    );
}
export default ConvertStringToNumber;