import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Nav from '../src/components/nav/Nav';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className='min-w-screen min-h-screen flex'>
            <Nav />
            <div className='flex flex-1 items-center justify-center'>
                <Component {...pageProps} />
            </div>
            <ToastContainer
                theme='dark'
                progressStyle={{
                    background:
                        'linear-gradient(to right, #3700CF, #7200CF 50%)',
                }}
            />
        </div>
    );
}

export default MyApp;
