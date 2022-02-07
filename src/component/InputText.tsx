import React from 'react';

 export  const textareaInput = ({input, meta, ...props}:any) => {
    const {touched,error,warning} = meta
     return (
        <div>
            <div> <textarea {...input} {...props}/></div>
            {touched &&
            ((error && <span style={{color:'red'}}>{error}</span>) ||
                (warning && <span style={{color:'red'}}>{warning}</span>))}
        </div>

    );
};

export  const textInput = ({input, meta, ...props}:any) => {
    const {touched,error,warning} = meta
    return (
        <div>
            <div> <input type='text' {...input} {...props}/></div>
            {touched &&
            ((error && <span style={{color:'red'}}>{error}</span>) ||
                (warning && <span style={{color:'red'}}>{warning}</span>))}
        </div>

    );
};



