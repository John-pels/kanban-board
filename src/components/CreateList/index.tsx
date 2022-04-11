import { useState } from "react"
import { FC } from "react"
import { CustomButton, CustomInput, CustomModal } from "../Common"
import { ModalProps } from "../Common/Modal/types"
import { taskRequests } from '../../services/requests'
import toast from "react-hot-toast"
import { useContext } from "react"
import { Store } from "../context"

type CreateListProps = Pick<ModalProps, "setShowModal" | 'showModal'>

const CreateListModal: FC<CreateListProps> = ({ showModal, setShowModal }) => {
    const [title, setTitle] = useState({ title: "" })
    const [isProcessing, setIsProcessing] = useState(false)
    const { setLists } = useContext(Store)

    const handleSubmit = async (e: any) => {
        setIsProcessing(true)
        e.preventDefault()
        try {
            const response = await taskRequests.addTickets(title)
            toast.success(response?.data?.message || 'Ticket created successfully!')

            if (response?.data) {
                setShowModal(false)
                setIsProcessing(false)
                setTitle({ title: "" })
                const listResults = await taskRequests.getAllTickets()
                const allLists = await listResults.data
                setLists([...allLists])
            }

        } catch (error: any) {
            setIsProcessing(false)
            toast.error(error?.response?.data?.message)
        }
    }

    const handleClose = () => setShowModal(false)


    return (
        <CustomModal showModal={showModal} setShowModal={setShowModal}>
            <form className="form">
                <CustomInput label="List Title"
                    name="title"
                    value={title.title}
                    placeholder="Enter the list title"
                    onChange={(e) => setTitle({ title: e.target.value })} />
            </form>
            <div className="flex-row">
                <CustomButton text="Cancel" onClick={handleClose} />
                <CustomButton
                    text="Create"
                    className="btn-stone"
                    isProcessing={isProcessing}
                    onClick={handleSubmit} />
            </div>

        </CustomModal>
    )
}


export { CreateListModal }
