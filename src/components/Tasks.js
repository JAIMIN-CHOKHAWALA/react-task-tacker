/*
NOTE: WE USE STATES INSTEAD OF DOING THIS, THIS WAY...
const tasks = [
    {
        id: 1,
        text: 'Learn React-essentials',
        day: 'Sep 20 at 16:00',
        reminder: true
    },
    {
        id: 2,
        text: 'React & Redux from SoloLearn',
        day: 'Sep 21 at 12:00',
        reminder: false
    },
    {
        id: 3,
        text: 'React libraries and packages',
        day: 'Sep 21 at 19:00',
        reminder: true
    },
    {
        id: 4,
        text: 'Serverless programming in React',
        day: 'Sep 22 at 11:00',
        reminder: true
    }
];
*/

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

