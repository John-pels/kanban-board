
import { FC } from 'react'
import { AddNewtaskBox } from '../AddNewTask'
import { TaskBox } from '../TaskBox'
import './style.css'


interface ListProps {
    ticketTitle: string
    ticketId: string
    tasks: Array<{
        id: string
        ticketId: string
        title: string
        description: string
        createdAt: string | number
    }>
    provided: any
    noOfTasks: number
}

const ListColumn: FC<ListProps> = ({ ticketId, ticketTitle, tasks, provided, noOfTasks = 0 }) => {

    return (
        <section className="list-column">
            <div className="list-column__header">
                <h3 className="list-column__heading">{ticketTitle}</h3>
                <p className="list-column__subheading">{noOfTasks > 1 ? `${noOfTasks} Tasks` : `${noOfTasks} Task`}</p>
            </div>
            <div
                className="list-column__content"
                {...provided.droppableProps}
                ref={provided.innerRef}
            >
                {
                    tasks.map(({ id, title, description, createdAt }, index) => (
                        <TaskBox
                            description={description}
                            key={id}
                            title={title}
                            date={createdAt}
                            id={id}
                            taskIndex={index}
                        />
                    ))
                }
                {provided.placeholder}
            </div>
            {<AddNewtaskBox ticketId={ticketId} />}
        </section >
    )
}


export { ListColumn }
