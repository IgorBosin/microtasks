import React, {useState} from 'react';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";
import FullInput1 from "./components/FullInput1";

export type MessagesType = {
    message: string
}

const App = () => {

    let [messages, setMessages] = useState<MessagesType[]>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const addMessages = (newMessages:string) => {
        setMessages([{message:newMessages}, ...messages])
    }

    return (
        <div className={'App'}>
            <FullInput1 addMessages={addMessages}/>
            {messages.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};

export default App;