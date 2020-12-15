import React, { Component } from 'react';

const Messenger = (props) => {
    const { chat, username, welcome } = props;
    if (!welcome) {
        return (
            <div className='chat-container'>

                <ul className='message-list'>
                    {chat.map((message, index) => {
                        <li>
                            <p key={username + index}>{username}</p>
                            <p key={message + index}>{message}</p>
                        </li>
                    })}
                </ul>

                <form>
                    <input type='text'></input>
                    <button>Send</button>
                </form>
            </div >
        );
    }

    return (
        <div className='chat-container'>
            <ul className='message-list'>
            </ul>
            <form className='message-input'>
                <input type='text'></input>
                <button>Send</button>
            </form>
        </div>
    )


}

export default Messenger;