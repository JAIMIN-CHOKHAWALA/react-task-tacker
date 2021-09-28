import { useState } from 'react';

const AddTask = ({ onsubmit }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);
    
    const onformsubmit = (e) => {
        e.preventDefault();
        
        if (!text) {
            alert('Please add task!');
            return;
        }
        
        onsubmit({ text, day, reminder });
        
        setText('');
        setDay('');
        setReminder(true);
    }
    
    return (
        <form className='add-form' onSubmit={onformsubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input
                    type='text'
                    placeholder='Add Task'
                    value={text}
                    onChange={
                        (e)=> setText(e.target.value)
                    }
                />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input
                    type='text'
                    placeholder='Add Day & Time'
                    value={day}
                    onChange={
                        (e)=> setDay(e.target.value)
                    }
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input
                    type='checkbox'
                    value={reminder}
                    onChange={
                        (e)=> setReminder(e.currentTarget.checked)
                    }
                    // specially for checkbox
                    checked={reminder}
                    />
            </div>
            <input
                type='submit'
                value='Save Task'
                className='btn btn-block'
                
            />
        </form>
    );
}

export default AddTask;