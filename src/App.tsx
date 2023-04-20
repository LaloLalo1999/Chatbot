import { useState } from 'react';
import styles from './App.module.scss';
import './App.scss';
import '@chatscope/chat-ui-kit-react-styles/dist/default/styles.min.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'

function App() {
    const [messages, setMessages] = useState([
        {
            message: "Hello, I am ChatGPT!",
            sender: "ChatGPT"
        }
    ]
    );

    const handleSend = async (message: string) => {
        const newMessage = {
            message: message,
            sender: "user",
            direction: "outgoing"
        }

        const newMessages = [...messages, newMessage];

        // Update our messages state
        setMessages(newMessages);



        // process message to chatGPT (send it over and see the response)

    }
    return (
        <div className={styles.App}>
            <div style={{ position: "relative", height: "800ox", width: "700px" }}>
                <MainContainer>
                    <ChatContainer>
                        <MessageList>
                            {messages.map((message, i) => {
                                return <Message key={i} model={message} />
                            })}
                        </MessageList>
                        <MessageInput placeholder="Type message here..." onSend={handleSend} />
                    </ChatContainer>
                </MainContainer>
            </div>
        </div>
    );
}

export default App;
