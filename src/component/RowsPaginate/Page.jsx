import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Page = ({ info }) => {
    console.log("Page component received info:", info);

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const totalPages = Math.ceil(info.length / rowsPerPage);
    const startIdx = (currentPage - 1) * rowsPerPage;
    const endIdx = startIdx + rowsPerPage;

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleRowsPerPageChange = (e) => {
        setRowsPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to the first page whenever rows per page changes
    };

    return (
        <section>
            <div className='border-2 border-slate-400 rounded-lg'>
                <div className='grid grid-cols-8 border-b-2 rounded-sm border-slate-500'>
                    <div className='font-bold col-span-3 p-10 text-black rounded-md bg-slate-100'>Title</div>
                    <div className='custom-size'>Start Date</div>
                    <div className='custom-size'>End Date</div>
                    <div className='custom-size'>Price</div>
                    <div className='custom-size'>Validity/Expiry</div>
                    <div className='custom-size'>Status</div>
                </div>

                {info.length > 0 ? (
                    info.slice(startIdx, endIdx).map((item, index) => (
                        <div key={index} className='grid grid-cols-8'>
                            <div className='flex items-center col-span-3 p-3 border-slate-400 font-semibold'>
                                <img src={item.image} alt={item.Title} className='w-20 rounded-md h-14 mr-4' />
                                {item.Title}
                            </div>
                            <div className='custom-data'>{item["Start Date"]}</div>
                            <div className='custom-data'>{item["End Date"]}</div>
                            <div className='custom-data'>{item.Price}</div>
                            <div className='custom-data'>{item["Validity/Expiry"]}</div>
                            <div className='custom-data'><span className='bg-green-200  text-[10px] px-3 py-1 font-semibold'>{item.Status}</span></div>
                        </div>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>
            <div className='flex ml-[800px] gap-10 items-center p-4'>
                <div>
                    <label htmlFor='rowsPerPage' className='font-semibold text-xl'>Rows per page: </label>
                    <select id='rowsPerPage' value={rowsPerPage} onChange={handleRowsPerPageChange} className='border-2 border-slate-600 rounded-md'>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                    </select>
                </div>
                <div className='flex items-center'>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-2 py-1 border rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <IoIosArrowBack className='text-2xl' />
                    </button>
                    <span className='px-4'>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-2 py-1 border rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <IoIosArrowForward className='text-2xl' />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Page;
