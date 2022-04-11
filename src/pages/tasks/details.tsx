import { useParams } from "react-router-dom"
import { TasDetailsScreenContent } from "../../../src/components/TaskDetails/detailsScreen"


const TaskDetailsScreen = () => {
    const params = useParams()
    const taskId = params?.id

    return (
        <TasDetailsScreenContent taskId={taskId} />
    )
}


export default TaskDetailsScreen 
