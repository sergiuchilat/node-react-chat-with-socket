import React, { useState } from 'react';
import { socket } from '../../socket';

export function Create() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        const payload = {
            name,
            message
        }

        socket.timeout(5000).emit('new-message', payload, () => {
            setIsLoading(false);
        });
    }

    return (
        <form onSubmit={ onSubmit }>
            <div>
                Name
                <input onChange={ e => setName(e.target.value) } />
            </div>

            <div>
                Message
                <input onChange={ e => setMessage(e.target.value) } />
            </div>

            <button type="submit" disabled={ isLoading }>Submit</button>
        </form>
    );
}