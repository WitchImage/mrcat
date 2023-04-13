type Data = {
    [col: string]: string | number;
}[];

interface Props {
    data: Data;
}

const DatasetTable = ({ data }: Props) => {
    const columns = Object.keys(data[0]);
    return (
        <div className='self-center w-[80%] h-96 overflow-auto'>
            <table className='border-separate border-spacing-2 border border-slate-500'>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th className='p-1 border border-slate-600 bg-npink-400'>
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        return (
                            <tr>
                                {Object.entries(item).map(([k, v]) => {
                                    return (
                                        <td className='px-2 py-1 border border-slate-700'>
                                            {v}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
                <span>hola</span>
            </table>
        </div>
    );
};

export default DatasetTable;
