// import { useState } from 'react';
import Task from './Task';

const Tasks = ({ tasks, ondelete, ontoggle }) => {
   
    return (<>
        {
            tasks.map(
                (task, index) => (
                    <Task
                        key={index}
                        task={task}
                        ondelete={ondelete}
                        ontoggle={ontoggle}
                    />
                )
            )
        }
    </>);
}



export default Tasks;

