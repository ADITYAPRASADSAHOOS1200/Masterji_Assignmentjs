import React, { useState, useEffect } from 'react';
import Data from '../RowsPaginate/Data';
import Page from './Page';

const Pagination = () => {
    const [table, setTable] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => { 
        setTable(Data);
    }, []);

    // Function to handle search input and filter the table data
    const handleSearch = (event) => {
        const searchValue = event.target.value.toLowerCase();
        setInput(searchValue);

        // Check the searchValue
        console.log("Search Value:", searchValue);

        // Check the Data filtering
        const filteredData = Data.filter(item =>
            item.Title.toLowerCase().includes(searchValue)
        );

        console.log("Filtered Data:", filteredData);

        setTable(filteredData);
    };

    return (
        <div className='min-h-screen p-2'>
            <div className='p-4'>
                <h1 className='text-4xl font-bold font-sans text-slate-700'>Batches</h1>
                <p className='text-base font-base text-slate-400'>Create learner’s batch and share information at the same time.</p>    
            </div>
            <div className='flex items-center gap-2 p-4'>
                <input 
                    type="text" 
                    className='text-xl placeholder:text-xl p-1 outline-none border-2 border-blue-300' 
                    placeholder='Search by title' 
                    value={input}
                    onChange={handleSearch}
                />
             <button className='text-sm bg-blue-950 text-white py-2 px-2 rounded-sm' >Search</button>
            </div>
            <Page info={table} />
        </div>
    );
};

export default Pagination;

