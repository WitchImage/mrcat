import { useEffect, useState } from 'react';
import DragAndDrop from '../../src/components/primitives/DragAndDrop';
import { AiOutlineArrowUp } from 'react-icons/ai';
import Button from '../../src/components/primitives/Button';
import addNotification from '../../src/utils/addNotification';
import { getCSVData } from '../../src/services/serverless';
// import * as fs from 'fs';
import { parse } from 'csv-parse';

interface Props {
    _fs: any;
}

const UploadDataset = () => {
    const [data, setData] = useState<unknown[]>([]);
    const [file, setFile] = useState<File | null>(null);
    const [delimiter, setDelimiter] = useState(',');
    // const [_fs, setFs] = useState<any>(null);

    const onChange = (ev: any) => {
        setData([]);

        let file;
        if (ev.target) {
            file = ev.target.files[0];
        } else {
            file = ev;
        }
        setFile(file);
        // readFile(file);
    };

    const handleUploadClick = async () => {
        if (delimiter === '') {
            addNotification('You have not set a delimiter for the file');
        } else if (file !== null) {
            const dummyData: any = [];
        }
    };

    // useEffect(() => {
    //     setFs(fs);
    // });

    if (data.length <= 0) {
        return (
            <div className='flex flex-col items-center justify-center gap-4'>
                <h1 className='text-npink'>
                    You haven't uploaded a dataset yet
                </h1>
                <h3 className='text-npink'>Upload one using the input below</h3>
                <div className='mt-5 w-auto'>
                    <DragAndDrop onChange={onChange} />
                </div>
                {file !== null && (
                    <div className='flex flex-row items-center w-[450px] justify-between hover:cursor-default'>
                        <div className='space-x-3'>
                            <span>Set a delimiter</span>
                            <input
                                className='py-1 px-2 w-8 rounded-md text-center'
                                type='text'
                                value={delimiter}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setDelimiter(e.target.value.trim())}
                            />
                        </div>
                        <Button onClick={() => handleUploadClick()}>
                            Upload <AiOutlineArrowUp />
                        </Button>
                    </div>
                )}
            </div>
        );
    }
};

export default UploadDataset;
