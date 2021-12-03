import React from 'react';

function SubstringEXP(props) {
    var str = "Hello world, react js SubString example";
    return (
        <div>
            <div><h1>SubString example</h1></div>
            {str.substring(0,10)}
        </div>
    );
}

export default SubstringEXP;