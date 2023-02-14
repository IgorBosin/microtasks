import React, {ChangeEvent} from 'react';

type Input1PropsType = {
    title: string
    setTitle: (title: string) => void
}

const Input1 = (props:Input1PropsType) => {

    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
       props.setTitle(event.currentTarget.value)
    }

    return (
        <div>
            <input onChange={onChangeInputHandler} value={props.title}/>
        </div>
    );
};

export default Input1;