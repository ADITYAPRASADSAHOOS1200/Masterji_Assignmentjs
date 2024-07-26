import React, { useState } from 'react';
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Course = ({ item, onMoveToTop, onMoveToBottom, onDelete }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className='flex items-center bg-[#f3f3f3] m-4 justify-between p-4 shadow-lg rounded-md'
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className='flex items-center gap-2'>
                <PiDotsSixVerticalBold className='text-3xl text-gray-500' />
                <img src={item.image} alt={item.course} className='w-20 h-18 rounded-md' />
                <h2 className='text-lg font-semibold ml-4'>{item.course}</h2>
            </div>
            <div className='flex items-center gap-3 relative'>
                <p className='text-lg font-semibold text-black'>{item.price}</p>
                <p className='bg-green-200 shadow-sm shadow-black text-[10px] px-3 py-1 font-semibold'> {item.type}</p>
                <BsThreeDotsVertical className='text-3xl text-gray-500' />
                {isOpen && (
                    <div className='absolute right-0 mt-10 bg-white shadow-lg rounded-md'>
                        <button onClick={() => { setIsOpen(true); onMoveToTop(item.id); }} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'>Move to Top</button>
                        <button onClick={() => { setIsOpen(true); onMoveToBottom(item.id); }} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'>Move to Bottom</button>
                        <button onClick={() => { setIsOpen(true); onDelete(item.id); }} className='block px-4 py-2 text-sm text-red-700 hover:bg-red-200'>Delete</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Course;
