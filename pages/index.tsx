import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { request } from '../src/services/api/request';

const Home: NextPage = () => {
    interface Ditto {
        name: string;
    }

    useEffect(() => {
        const getDitto = async () => {
            const response = await request<Ditto>('get', {
                url: 'pokemon/ditto',
            });
            console.log(response.data);
        };
        getDitto();
    }, []);

    return (
        <div>
            <Head>
                <title>MrCat</title>
            </Head>
            <div className='flex flex-col items-center justify-center min-w-screen min-h-screen'>
                <h1 className='text-npink'>MrCat</h1>
                <h2 className='text-npurple-300'>MrCat</h2>
                <h5 className='text-nblue-300'>MrCat</h5>
            </div>
        </div>
    );
};

export default Home;
