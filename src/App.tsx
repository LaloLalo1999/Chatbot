import { useState } from 'react';
import styles from './App.module.scss';
import './App.scss';
import '@chatscope/chat-ui-kit-react-styles/dist/default/styles.min.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <div style={{ position: "relative", height: "800ox", width: "700px" }}>
                <MainContainer>
                    <ChatContainer>
                        <MessageList>
                            
                        </MessageList>
                    </ChatContainer>
                </MainContainer>
            </div>
        </div>
    );
}

export default App;
