
import { AddNewtaskBox } from '../AddNewTask'
import { TaskBox } from '../TaskBox'
import './style.css'

const ListColumn = () => {

    return (
        <section className="list-column">
            <div className="list-column__header">
                <h3 className="list-column__heading">Reusable components</h3>
                <p className="list-column__subheading">5 Tasks</p>
            </div>
            <div className="list-column__content">
                <TaskBox />
                <TaskBox />
                <TaskBox />
                <AddNewtaskBox />
            </div>
        </section>
    )
}


export { ListColumn }
