import './style.css'
import { AiFillCopy } from 'react-icons/ai'
import { TaskDetails } from '../TaskDetails'
import { useState } from 'react'

const TaskBox = () => {
    const [showTaskDetails, setShowTaskDetails] = useState(false)
    const handleShowDetails = () => setShowTaskDetails(true)
    return (
        <>
            <TaskDetails showModal={showTaskDetails} setShowModal={setShowTaskDetails} />
            <section className='card' >
                <div className="card__header">
                    <h4 className='card__title' onClick={handleShowDetails}>Reusable Navbar</h4>
                    <span className="card__clipboard">
                        <AiFillCopy />
                    </span>
                </div>
                <p className="card__description">This is a reusable navbar component</p>
                <span className="card__date">02 Tue, 2022</span>
            </section>
        </>
    )
}

export { TaskBox }
