import React, {useState} from 'react';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

export type MessagesType = {
    message: string
}

const App = () => {

    let [title, setTitle] = useState('')

    let [messages, setMessages] = useState<MessagesType[]>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const addMessages = (title:string) => {
        setMessages([{message:title}, ...messages])
    }

    const callback = () => {
        addMessages(title)
        setTitle('')
    }


    return (
        <div className={'App'}>
            {/*<FullInput addInput={addMessages}/>*/}
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callback={callback} />
            {messages.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};

export default App;