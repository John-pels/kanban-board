import { useState } from "react"
import { CustomButton, CustomInput, CustomTextArea } from "../Common"


const AddNewtaskBox = () => {
    const [showContent, setShowContent] = useState(false)

    const handleShowContent = (bol: boolean) => setShowContent(bol)
    return (
        <section className="newtask-container">

            {
                showContent ?
                    <form className="form">
                        <CustomInput label="Task Title" name="title" placeholder="task title" />
                        <CustomTextArea label="Task Description" name="title" placeholder="task title" />


                        <div className="flex-row">
                            <CustomButton text="Add Task" className=" btn-stone btn-full-width" />
                            <CustomButton text="Cancel" onClick={() => handleShowContent(false)} />
                        </div>
                    </form> : null
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
