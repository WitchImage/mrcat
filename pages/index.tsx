import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { request } from '../src/services/request/request';

const Home: NextPage = () => {
    const [click, setClick] = useState(false);
    type Ditto = {
        name: string;
    };

    useEffect(() => {
        const getDitto = async () => {
            const response = await request<Ditto>('get', {
                url: 'pokemon/ditto',
            });
            console.log('hola', response.data?.name);
        };
        getDitto();
    }, [click]);

    return (
        <div>
            <Head>
                <title>MrCat</title>
            </Head>
            <div className='flex flex-col items-center justify-center min-w-screen min-h-screen'>
                <h1 className='text-npink'>MrCat</h1>
                <h2 className='text-npurple-300'>MrCat</h2>
                <h5 className='text-nblue-300'>MrCat</h5>
                <button onClick={() => setClick(!click)}>Click</button>
            </div>
        </div>
    );
};

export default Home;
