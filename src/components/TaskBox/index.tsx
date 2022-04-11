import './style.css'
import { Draggable } from "react-beautiful-dnd";
import { AiFillCopy } from 'react-icons/ai'
import { TaskDetails } from '../TaskDetails'
import { useState } from 'react'
import { FC } from 'react';
import toast from 'react-hot-toast';

interface TaskProps {
    description: string;
    date: string | number;
    taskIndex: number;
    id: string;
    title: string;
}

const TaskBox: FC<TaskProps> = ({ description, date, taskIndex, id, title }) => {
    const [showTaskDetails, setShowTaskDetails] = useState(false)
    const handleShowDetails = () => setShowTaskDetails(true)
    const location = window.location.href
    const taskUrl = `${location}/${id}/details`

    const handleCopy = async () => {
        try {
            const copy = taskUrl || location
            await navigator.clipboard.writeText(copy)
            toast.success('Url copied to Clipboard')
        } catch {
            toast.error('Error!')

        }
    }


    return (
        <>
            <TaskDetails showModal={showTaskDetails} setShowModal={setShowTaskDetails} taskId={id} />
            <Draggable key={id} draggableId={id} index={taskIndex}>
                {(provided, _) => {
                    return (
                        <section
                            className='card'
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{ ...provided.draggableProps.style }}
                        >
                            <div className="card__header">
                                <h4 className='card__title' onClick={handleShowDetails}>{title}</h4>
                                <span className="card__clipboard">
                                    <AiFillCopy onClick={handleCopy} />
                                </span>
                            </div>
                            <p className="card__description">{description || ''}</p>
                            <span className="card__date">{new Date(date).toDateString()}</span>
                        </section>
                    )
                }


                }
            </Draggable>

        </>
    )
}

export { TaskBox }
