import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div
            className='min-w-screen min-h-screen'
            onClick={() => {
                return;
            }}
        >
            <nav>Hola</nav>
            <div className='flex flex-1 items-center justify-center'>
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default MyApp;
