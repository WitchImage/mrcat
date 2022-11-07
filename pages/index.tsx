import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { request } from '../src/services/request/request';
import { Popover, Transition } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi';

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
        };
        getDitto();
    }, [click]);

    return (
        <div>
            <Head>
                <title>MrCat</title>
            </Head>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-npink'>MrCat</h1>
                <h2 className='text-npurple-300'>MrCat</h2>
                <h5 className='text-nblue-300'>MrCat</h5>
                <button onClick={() => setClick(!click)}>Click</button>
            </div>
            <div className='mb-16'>
                <Popover className='relative'>
                    {({ open }) => (
                        <>
                            <Popover.Button className='p-2 flex items-center gap-4 bg-npink-300 outline-none rounded-lg font-medium'>
                                Solutions
                                <FiChevronDown
                                    className={`transition-transform ${
                                        open ? 'rotate-180 transform' : ''
                                    }`}
                                    size={18}
                                />
                            </Popover.Button>

                            <Transition
                                enter='transition duration-100 ease-out'
                                enterFrom='transform scale-95 opacity-0'
                                enterTo='transform scale-100 opacity-100'
                                leave='transition duration-75 ease-out'
                                leaveFrom='transform scale-100 opacity-100'
                                leaveTo='transform scale-95 opacity-0'
                            >
                                <Popover.Panel className='mt-4 w-auto h-auto p-2 rounded-lg absolute z-10 bg-npink-300'>
                                    <div className='flex flex-col'>
                                        <a href='/analytics'>Analytics</a>
                                        <a href='/engagement'>Engagement</a>
                                        <a href='/security'>Security</a>
                                        <a href='/integrations'>Integrations</a>
                                    </div>

                                    <img
                                        src='/solutions.jpg'
                                        alt=''
                                    />
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            </div>
        </div>
    );
};

export default Home;
