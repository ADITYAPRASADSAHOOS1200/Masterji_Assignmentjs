import React from 'react';
import Course from './Course';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

function Courselist({ items, onMoveToTop, onMoveToBottom, onDelete }) {
    return (
        <div className="course-item">
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
                {items.map((item) => (
                    <Course
                        key={item.id}
                        item={item}
                        onMoveToTop={onMoveToTop}
                        onMoveToBottom={onMoveToBottom}
                        onDelete={onDelete}
                    />
                ))}
            </SortableContext>
        </div>
    );
}

export default Courselist;

