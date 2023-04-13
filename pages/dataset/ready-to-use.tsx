import DatasetTable from '../../src/components/table/DatasetTable';
import { sample } from '../../src/utils/sampleDataset';

const Datasets = () => {
    return (
        <div className='flex flex-col'>
            <h3>Select one of the datasets ready to use</h3>
            <DatasetTable data={sample} />
        </div>
    );
};

export default Datasets;
