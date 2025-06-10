'use client'
import { useState } from 'react';
import {  sendMessage } from './actions';

export default function Backlog() {

    const [movieOverview, setMovieOverview] = useState<string | null>(null);
    const [search, setSearch] = useState('');
    const [options, setOptions] = useState<string[]>([]);
    const [selected, setSelected] = useState('');

    async function handleGetMovie(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const movie = formData.get('movie');
        const res = await fetch('/api/get-movie', {
            method: 'POST',
            headers: {  'Content-Type': 'application/json'},
            body: JSON.stringify({ movie })
        });
        const data = await res.json();
        setMovieOverview(data.overview);
    }

    return (
        <main>
            <h1 className='text-center'>Welcome to your backlog!</h1>
            <br></br>
            <div className='grid grid-cols-6 gap-6'>
                <form className='col-span-4 col-start-2' action={sendMessage}>
                    <div className='text-center m-5 flex items-center justify-center gap-2'>
                        <label htmlFor="message">Add a movie?</label>
                        <input type='text' name='message' id="message" className='w-96' />
                    </div>
                </form>
                <div className='col-span-4 col-start-2 text-center'>
                    <p className='m-5'>Enter the name of a movie and I&apos;ll tell you more:</p>
                    <form onSubmit={handleGetMovie}>
                        <input type='text' name='movie' placeholder='Write a movie'></input>
                        <br/>
                        <button type='submit' className='mt-5'>Click</button>
                    </form>
                </div>
                <div className='col-span-1 col-start-3 text-center'>
                    <label id="test">{movieOverview ?? 'test'}</label>
                </div>
            </div>

        </main>
);
}