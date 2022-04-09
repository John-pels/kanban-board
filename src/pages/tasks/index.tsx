import { TasksHomeContent } from "../../components/Task"
import { CustomButton } from "../../components/Common"
import { useState } from "react"
import { CreateListModal } from "../../components"



const TaskHomeScreen = () => {
    const [showCreateListModal, setShowCreateListModal] = useState(false)

    const handleShowModal = () => setShowCreateListModal(true)
    return (
        <>
            <CreateListModal showModal={showCreateListModal} setShowModal={setShowCreateListModal} />
            <main className="wrapper">
                <section className="container  full-screen">
                    <header className="header">
                        <h1 className="herotext">Task Board</h1>
                        <CustomButton text="Create New List" className="btn-cyan" onClick={handleShowModal} />
                    </header>
                    <TasksHomeContent />
                </section>
            </main>
        </>

    )
}


export default TaskHomeScreen 
