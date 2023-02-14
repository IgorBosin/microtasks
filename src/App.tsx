import React, {useState} from 'react';
import Input1 from "./components/Input1";
import Button1 from "./components/Button1";

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

    const addMessages = (newMessage:string) => {
        setMessages([{message:newMessage}, ...messages])
    }

    const callBack = () => {
        addMessages(title)
        setTitle('')
    }

    return (
        <div className={'App'}>
            <Input1 title={title} setTitle={setTitle}/>
            <Button1 callBack={callBack} name='+'/>
            {messages.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};

export default App;