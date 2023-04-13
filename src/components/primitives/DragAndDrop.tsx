import { useEffect, useState } from 'react';
import { FaFileCsv } from 'react-icons/fa';

interface Props {
    onChange: (e: React.ChangeEvent<HTMLInputElement> | File) => void;
}

const DragAndDrop = ({ onChange }: Props) => {
    const [dragEnter, setDragEnter] = useState(false);
    const [doc, setDoc] = useState<Document | null>(null);

    const getFileName = () => {
        if (doc !== null) {
            const file: HTMLInputElement = doc.getElementById(
                'dataset-file'
            ) as HTMLInputElement;
            if (file) {
                if (file.files) {
                    if (file.files.length > 0) {
                        return file.files[0].name;
                    }
                }
            }
            return '';
        }
    };

    const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (doc !== null) {
            let data = e.dataTransfer.files;
            let input: HTMLInputElement = document.getElementById(
                'dataset-file'
            ) as HTMLInputElement;
            if (input) {
                input.files = data;
                onChange(data[0]);
            }
        }
    };

    useEffect(() => {
        setDoc(document);
    });

    return (
        <div className='outline-2 outline-dashed outline-npink-400 rounded-lg h-56 w-[450px] my-4'>
            <div className='relative group w-full h-full flex justify-center items-center'>
                <input
                    type='file'
                    id='dataset-file'
                    name='data'
                    style={{ display: 'none' }}
                    className='relative z-10 opacity-0 w-full h-full cursor-pointer'
                    onChange={onChange}
                />
                <div
                    className='absolute top-0 right-0 bottom-0 left-0 w-full h-full m-auo flex flex-col gap-4 items-center justify-center'
                    onDragOver={(e) => {
                        e.preventDefault();
                        setDragEnter(true);
                    }}
                    onDrop={handleOnDrop}
                >
                    <FaFileCsv size={30} />
                    <div className='space-y-6 text-center w-44'>
                        <span
                            className='p-[3px] border rounded-md bg-npurple-300 text-lg hover:bg-npurple hover:cursor-pointer'
                            onClick={() => {
                                let input: HTMLElement =
                                    document.getElementById(
                                        'dataset-file'
                                    ) as HTMLElement;
                                input.click();
                            }}
                        >
                            Choose your file
                        </span>
                        <span
                            className='text-lg'
                            style={{ pointerEvents: 'none' }}
                        >
                            &nbsp; or drop one here
                        </span>
                        <span
                            className='text-sm font-bold overflow-x-hidden'
                            style={{ pointerEvents: 'none' }}
                        >
                            &nbsp; {`${getFileName()}`}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DragAndDrop;
