// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import * as fs from 'fs';
import { parse } from 'csv-parse';

type Data = {
    name: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.log('🙌', req.body);
    const { file } = req.body;
    console.log('❤️file serverless', file);
    const dummyData: any = [];
    if (file) {
        fs.createReadStream(file.webkitRelativePath)
            .pipe(
                parse({
                    delimiter: ',',
                    columns: true,
                    ltrim: true,
                })
            )
            .on('data', (row) => dummyData.push(row))
            .on('error', (error) => console.log(error))
            .on('end', () => console.log(dummyData));
    }

    res.status(200).json({ name: 'John Doe' });
}
