import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
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
