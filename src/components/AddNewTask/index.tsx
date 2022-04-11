import { taskRequests } from "../../services/requests"
import { FC, useContext } from "react"
import { useState } from "react"
import toast from "react-hot-toast"
import { CustomButton, CustomInput, CustomTextArea } from "../Common"
import { Store } from "../context"

interface NewTaskProps {
    ticketId: string
}
const AddNewtaskBox: FC<NewTaskProps> = ({ ticketId }) => {
    const [showContent, setShowContent] = useState(false)
    const { setLists } = useContext(Store)
    const [isProcessing, setIsProcessing] = useState(false)
    const [taskData, setTaskData] = useState({
        title: '',
        description: ''
    })

    const handleChange = (event: any) => {
        const { name, value } = event.target
        setTaskData({
            ...taskData,
            [name]: value
        })
    }


    const handleSubmit = async () => {
        setIsProcessing(true)
        try {
            const response = await taskRequests.addTask({ ...taskData, ticketId })
            if (response?.data) {
                setIsProcessing(false)
                setShowContent(false)
                const listResults = await taskRequests.getAllTickets()
                const allLists = await listResults.data
                setLists([...allLists])
            }
        } catch (error: any) {
            setIsProcessing(false)
            const errorMesssage = error?.response?.data?.message
            toast.error(errorMesssage || 'Network error, please try again')
        }
    }

    const handleShowContent = (bol: boolean) => setShowContent(bol)
    return (
        <section className="newtask-container">

            {
                showContent ?
                    <div>
                        <form className="form">
                            <CustomInput label="Task Title"
                                name="title" placeholder="task title"
                                value={taskData.title}
                                onChange={handleChange}
                            />
                            <CustomTextArea
                                label="Task Description"
                                name="description"
                                placeholder="task title"
                                value={taskData.description}
                                onChange={handleChange}
                            />


                        </form>
                        <div className="flex-row">
                            <CustomButton text="Cancel" onClick={() => handleShowContent(false)} />
                            <CustomButton
                                text="Add Task"
                                className=" btn-stone btn-full-width"
                                onClick={handleSubmit}
                                isProcessing={isProcessing}
                            />
                        </div>
                    </div>
                    : null
            }
            {
                !showContent &&
                <CustomButton text="Add Task"
                    className=" btn-stone btn-full-width"
                    onClick={() => handleShowContent(true)}
                />
            }

        </section>
    )
}

export { AddNewtaskBox }
