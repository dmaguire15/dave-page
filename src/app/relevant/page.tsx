'use client'

import { doTheThing, getMovie, sendMessage } from './actions';

export default function Relevant() {

    return (
        <main>
            <h1 className='text-center'>Stay Relevant.</h1>
            <br></br>
            <div className='grid grid-cols-6 gap-4'>
                <form className='col-span-4 col-start-2' action={doTheThing}>
                    <div className='text-center m-5'>
                        <label>Enter a Message:<br/></label>
                        <input  type='text' name='message'></input>
                        <br/>
                        <button className='mt-5 hover:bg-white hover:text-black' type='submit'>Send</button>
                    </div>
                </form>
                <div className='col-span-4 col-start-2 text-center'>
                    <p className='m-5'>Enter a year and I will give you a random movie from that year:</p>
                    <form action={getMovie}>
                        <input type='text' name='movie' placeholder='Write a movie son'></input>
                        <br/>
                        <button type='submit' className='mt-5'>Click</button>
                    </form>
                </div>
            </div>

        </main>
);
}