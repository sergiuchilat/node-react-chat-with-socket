import React from 'react';

export function List({ events: messages }) {
    return (
        <div>
            <h1>Chat messages</h1>
            <ul>
                {
                    messages.map((message, index) =>
                        <li key={ index }>{ message.name }: {message.message}</li>
                    )
                }
            </ul>
        </div>
    );
}