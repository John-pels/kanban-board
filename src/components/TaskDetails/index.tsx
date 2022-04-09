import { FC } from "react"
import { CustomModal } from "../Common"
import { ModalProps } from "../Common/Modal/types"
import './style.css'
type TaskDetailsProps = Pick<ModalProps, 'setShowModal' | 'showModal'>

const TaskDetails: FC<TaskDetailsProps> = ({ showModal, setShowModal }) => {
    return (
        <CustomModal showModal={showModal} setShowModal={setShowModal} title='Task Details'>
            <section className="task__details">
                <h4 className="task__title">Reusable Navbar</h4>
                <div className="task__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatum inventore praesentium voluptas nesciunt tempora? Esse ipsam vel perspiciatis cupiditate maxime. Veritatis ratione quasi harum deserunt aliquid odit repellat laborum.
                </div>
                <p className="task__date"> <span>Task created at:</span> 17/03/2022</p>
            </section>


        </CustomModal>
    )
}


export { TaskDetails }
