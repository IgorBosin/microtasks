import React from 'react';

type Button1PropsType = {
    name: string
    callBack: () => void
}

const Button1 = (props:Button1PropsType) => {

    function onClickHandler() {
        props.callBack()
    }

    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

export default Button1;