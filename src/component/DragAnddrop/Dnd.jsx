import React, { useState, useEffect } from 'react';
import Data from '../DragAnddrop/Data';
import Courselist from './Courselist';
import {
    DndContext,
    KeyboardSensor,
    PointerSensor,
    closestCenter,
    useSensor,
    useSensors
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates, arrayMove } from '@dnd-kit/sortable';

const Dnd = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Data);
    }, []);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const getTaskPos = (id) => data.findIndex((task) => task.id === id);

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id === over.id) return;

        setData((tasks) => {
            const originalPos = getTaskPos(active.id);
            const newPos = getTaskPos(over.id);

            return arrayMove(tasks, originalPos, newPos);
        });
    };

    const handleMoveToTop = (id) => {
        setData((tasks) => {
            const pos = getTaskPos(id);
            if (pos === 0) return tasks;
            return arrayMove(tasks, pos, 0);
        });
    }

    const handleMoveToBottom = (id) => {
        setData((tasks) => {
            const pos = getTaskPos(id);
            if (pos === tasks.length - 1) return tasks;
            return arrayMove(tasks, pos, tasks.length - 1);
        });
    }

    const handleDelete = (id) => {
        setData((tasks) => tasks.filter(task => task.id !== id));
    }

    return (
        <section>
            <h1>Hello, Drag and Drop</h1>
            <DndContext
                sensors={sensors}
                onDragEnd={handleDragEnd}
                collisionDetection={closestCenter}
            >
                <div className="courses">
                    <Courselist 
                        items={data} 
                        onMoveToTop={handleMoveToTop} 
                        onMoveToBottom={handleMoveToBottom} 
                        onDelete={handleDelete} 
                    />
                </div>
            </DndContext>
        </section>
    );
}

export default Dnd;
