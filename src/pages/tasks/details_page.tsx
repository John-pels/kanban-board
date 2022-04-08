import { useParams } from "react-router-dom"



const TaskDetailsScreen = () => {
    const params = useParams()


    return (
        <div>
            Welcome to the Tasks Details Page {params?.id}
        </div>
    )
}


export default TaskDetailsScreen 
