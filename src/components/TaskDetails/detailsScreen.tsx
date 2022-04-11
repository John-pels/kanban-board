import { useCallback, useContext, useEffect, useState } from "react"
import { Store } from "../context"
import './style.css'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from "react-router-dom"
import { Spinner } from "../Common"



const TasDetailsScreenContent = ({ taskId }: { taskId: string | any }) => {
    const { lists } = useContext(Store)
    const [isFetching, setIsFetching] = useState(true)
    const [details, setDetails] = useState({
        id: '',
        title: '',
        description: '',
        createdAt: ''
    })

    const filterTaskDetails = useCallback(
        async () => {


            try {
                const taskDetails = lists?.map((ticket: any) => {
                    return ticket?.tasks?.filter((task: any) => {
                        if (taskId === task?.id) {
                            return setDetails({ ...task })
                        }
                        return task
                    })
                })
                setIsFetching(false)
                return taskDetails

            } catch {
                setIsFetching(false)
            }

        }, [lists, taskId]
    )
    useEffect(() => {
        filterTaskDetails()
    }, [lists, taskId, filterTaskDetails])

    return (
        <>

            {
                isFetching ? <Spinner /> :

                    <section className="wrapper full-screen">
                        <div className="container  pt">
                            <Link to='/tasks'>
                                <p className="breadcrumb">
                                    <AiOutlineArrowLeft id="arrow-left" />
                                    Go back</p>

                            </Link>
                            <div className="centered-wrapper">
                                <h2 className="heading">Task Details</h2>
                                <section className="task__details">
                                    <h4 className="task__title"> Title: {details.title}</h4>
                                    <div className="task__description">
                                        <span>  Description:</span>   {details.description || ''}
                                    </div>
                                    <p className="task__date">
                                        <span>Task created at:
                                        </span>{new Date(details.createdAt).toDateString()}</p>
                                </section>
                            </div>
                        </div>
                    </section>
            }
        </>

    )
}

export { TasDetailsScreenContent }
