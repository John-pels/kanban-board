
import { taskRequests } from '../../services/requests'
import { arrayLength } from '../../utils/data'
import { useCallback, useEffect } from 'react'
import { useContext, useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import toast from 'react-hot-toast'
import { Spinner } from '../Common'
import { Store } from '../context'
import { ListColumn } from '../ListColumn'
import './style.css'
import { EmptyPlaceholder } from './emptyPlaceholder'

const TasksHomeContent = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { lists, setLists } = useContext(Store)
    const [allTicketList, setAllTicketLists] = useState<Array<any>>([...lists]);
    const isArrayValid = arrayLength(lists)

    const reFetchTickets = useCallback(async () => {
        if (!isArrayValid) {
            setIsLoading(true)
            try {
                const response = await taskRequests.getAllTickets()
                const allLists: Array<any> = response.data
                setIsLoading(false)
                setAllTicketLists([...allLists])
                return setLists([...allLists])

            } catch (error: any) {
                setIsLoading(false)
                return toast.error(error?.response?.data?.message
                    || 'Network Error, please try again')
            }
        }
        return lists
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        reFetchTickets()
    }, [reFetchTickets])

    useEffect(() => {
        if (isArrayValid)
            setIsLoading(false);
        return setAllTicketLists([...lists])
    }, [lists, isArrayValid])


    const updateTicket = useCallback(async (data) => {
        try {
            const response = await taskRequests.updateTaskTicket({ ...data })
            if (response.data) {
                const result: any = await taskRequests.getAllTickets()
                setLists([...result.data])
            }
        } catch (error: any) {
            console.log(error)
            toast.error(error?.resonse?.data?.message
                || 'Something went wrong, please try again')
        }
    }, [setLists])


    const onFinishDragging = (response: any) => {
        if (!response.destination) return;

        const { source, destination, draggableId } = response;

        if (source.droppableId !== destination.droppableId) {
            const sourceTicket = allTicketList.filter(
                (ticket) => ticket.id === source.droppableId
            )[0];
            const destTicket = allTicketList.filter(
                (ticket) => ticket.id === destination.droppableId
            )[0];

            const sourceItems = [...sourceTicket.tasks];
            const destItems = [...destTicket.tasks];

            const [removed] = sourceItems.splice(source.index, 1);

            destItems.splice(destination.index, 0, removed);

            const updatedSouceTicket = { ...sourceTicket, tasks: sourceItems };
            const updatedDestTicket = { ...destTicket, tasks: destItems };

            setAllTicketLists(
                allTicketList.map((ticket) => {
                    if (ticket.id === source.droppableId) {
                        return { ...updatedSouceTicket };
                    }
                    if (ticket.id === destination.droppableId) {
                        return { ...updatedDestTicket };

                    }
                    return ticket;
                })
            );

            const payload = {
                ticketId: source.droppableId,
                destinationId: destination.droppableId,
                taskId: draggableId,
            };
            updateTicket(payload);
        }
    }


    return (
        <main>

            {
                isLoading ? <Spinner /> : (
                    <section>
                        {
                            isArrayValid ?
                                <section className="list-container">
                                    <DragDropContext onDragEnd={(response) => onFinishDragging(response)}>
                                        {
                                            allTicketList?.map(({ id, tasks, title }, _) => {

                                                return (
                                                    <Droppable droppableId={id} key={id}>
                                                        {(provided, snapshot) => {

                                                            return (
                                                                <ListColumn
                                                                    key={id}
                                                                    ticketTitle={title}
                                                                    tasks={tasks}
                                                                    ticketId={id}
                                                                    noOfTasks={tasks?.length}
                                                                    provided={provided}
                                                                />
                                                            )
                                                        }}
                                                    </Droppable>
                                                )
                                            })
                                        }

                                    </DragDropContext>
                                </section>
                                : <EmptyPlaceholder />
                        }
                    </section>

                )
            }

        </main>

    )
}


export { TasksHomeContent }
