import React from 'react';

function Count(props)
{
    return(
        <div className="center">
            <h4 className="display-4"> 
                Count of contacts {props.count}    
            </h4>
        </div>
    )
}

export default  Count