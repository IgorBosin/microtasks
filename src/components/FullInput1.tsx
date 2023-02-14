import React, {ChangeEvent, useState} from 'react';

type FullInput1PropsType = {
    addMessages: (newMessages:string)=> void
}

const FullInput1 = (props:FullInput1PropsType) => {

    let [title, setTitle] = useState('')

    const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessages(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

export default FullInput1;