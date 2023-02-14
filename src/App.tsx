import React, {useState} from 'react';
import {FullInput} from "./components/FullInput";

export type MessagesType = {
    message: string
}

const App = () => {

    let [messages, setMessages] = useState<MessagesType[]>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const addMessages = (title:string) => {
        setMessages([{message:title}, ...messages])
    }

    return (
        <div className={'App'}>
            <FullInput addInput={addMessages}/>
            {messages.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};

export default App;