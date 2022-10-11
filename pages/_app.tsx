import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <div className="min-w-screen min-h-screen">
                <nav>Hola</nav>
                <div className="flex flex-1 items-center justify-center">
                    <Component {...pageProps} />
                </div>
            </div>
        </ChakraProvider>
    );
}

export default MyApp;
