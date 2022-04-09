
import { AddNewtaskBox } from '../AddNewTask'
import { TaskBox } from '../TaskBox'
import './style.css'

const ListColumn = () => {

    return (
        <section className="column">
            <div className="column__header">
                <h3 className="column__heading">Reusable components</h3>
                <p className="column__subheading">5 Tasks</p>
            </div>
            <div className="column__content">
                <TaskBox />
                <TaskBox />
                <TaskBox />
                <AddNewtaskBox />
            </div>
        </section>
    )
}


export { ListColumn }
