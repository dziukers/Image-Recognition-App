import React from 'react';

const Rank = ({name, entries}) => {
    return (
    <div>
        <div className='white f3 pb2'>
            {name==='Anonymous'?
            `Hi, if you would like to have your place in score table, please register :)`
            :`${name}, your current score is:`}
        </div>
        <div className='white f1'>
            {name==='Anonymous'?null:entries}
        </div>
    </div>
    )
}

export default Rank;