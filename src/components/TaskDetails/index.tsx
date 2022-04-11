import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useCallback } from "react"
import { FC } from "react"
import { CustomModal } from "../Common"
import { ModalProps } from "../Common/Modal/types"
import { Store } from "../context"
import './style.css'
type NewProps = Pick<ModalProps, 'setShowModal' | 'showModal'>


interface TaskDetailsProps extends NewProps {
    taskId: string
}
const TaskDetails: FC<TaskDetailsProps> = ({ showModal, setShowModal, taskId }) => {
    const { lists } = useContext(Store)
    const [details, setDetails] = useState({
        id: '',
        title: '',
        description: '',
        createdAt: ''
    })

    const filterTaskDetails = useCallback(
        () => {
            const taskDetails = lists?.map((ticket: any) => {
                return ticket?.tasks?.filter((task: any) => {
                    if (taskId === task?.id) {
                        return setDetails({ ...task })
                    }
                    return task
                })
            })

            return taskDetails
        }, [lists, taskId]
    )
    useEffect(() => {
        filterTaskDetails()
    }, [lists, taskId, filterTaskDetails])


    return (
        <CustomModal showModal={showModal} setShowModal={setShowModal} title='Task Details'>
            <section className="task__details">
                <h4 className="task__title">{details.title}</h4>
                <div className="task__description">
                    {details.description || ''}
                </div>
                <p className="task__date">
                    <span>Task created at:
                    </span>{new Date(details.createdAt).toDateString()}</p>
            </section>


        </CustomModal>
    )
}


export { TaskDetails }
