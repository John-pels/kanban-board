import { FC } from "react"
import { CustomButton, CustomInput, CustomModal } from "../Common"
import { ModalProps } from "../Common/Modal/types"

type CreateListProps = Pick<ModalProps, "setShowModal" | 'showModal'>

const CreateListModal: FC<CreateListProps> = ({ showModal, setShowModal }) => {

    const handleClose = () => setShowModal(false)


    return (
        <CustomModal showModal={showModal} setShowModal={setShowModal}>
            <form className="form" onSubmit={() => { }}>
                <CustomInput label="List Title" name="title" placeholder="Enter the list title" />
                <div className="flex-row">
                    <CustomButton text="Cancel" onClick={handleClose} />
                    <CustomButton text="Create" className="btn-stone" />
                </div>
            </form>

        </CustomModal>
    )
}


export { CreateListModal }
