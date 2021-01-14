import React, { useState, useEffect } from 'react';
import { ACTION_TASK_TYPE, OPTION_PIORITY, TaskType } from '../const/constants';
import moment from 'moment';
import Select from 'react-select';
import { v4 as uuidV4 } from 'uuid';
import _ from 'lodash';

export interface ICreateEditTaskProps {
  typeActionTask: string, // create or edit
  task?: any; // task for case EDIT
  actionTask: (task: TaskType, typeActionTask: string) => void
}

const CreateEditTask: React.FC<ICreateEditTaskProps> = (props) => {
  const [taskName, setTaskName] = useState('');
  const [descriptionTask, setDescriptionTask] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [piorityTask, setPiorityTask] = useState(OPTION_PIORITY[1]);

  useEffect(() => {
    if (_.isNil(props.task)) {
      setDateTime(moment().format('YYYY-MM-DD'));
      setPiorityTask(OPTION_PIORITY[1]);// default is normal
    } else {
      setTaskName(props.task.taskName);
      setDescriptionTask(props.task.descriptionTask);
      setDateTime(props.task.dateTime);
      setPiorityTask(props.task.piorityTask);
    }
  }, [])

  /**
   *  Action to task (update, remove, remove tasks check)
   */
  const actionTaskClick = () => {
    if(props.actionTask) {
      props.actionTask(
        {
          taskId: props.task ? props.task.taskId : uuidV4(),
          taskName,
          descriptionTask,
          dateTime,
          piorityTask,
        },
        props.typeActionTask);
    }
  }

  /**
   * change select piority task
   * @param selectedOption 
   */
  const changeSelectPiority = (selectedOption: any) => {
    setPiorityTask(selectedOption);
  }

  return (
    <>
      <div className="content-add-edit-task">
        <input className="mr-b20 wd-80"
          placeholder={props.typeActionTask === ACTION_TASK_TYPE.CREATE ? 'Add new Task...' : props.task.taskName}
          defaultValue={_.isNil(props.task) ? '' : props.task.taskName}
          onBlur={event => setTaskName(event.target.value)} />
        <div className="description mr-b20">
          <label>Description</label>
          <textarea onBlur={(e) => setDescriptionTask(e.target.value)}>
            {_.isNil(props.task) ? '' : props.task.descriptionTask}
            </textarea>
        </div>
        <div className="option-task mr-b20">
          <div className="option-task-item">
            <label>Due Date</label>
            <input type="date"
              defaultValue={dateTime}
              onChange={event => setDateTime(event.target.value)} />
          </div>
          <div className="option-task-item">
            <label>Piority</label>
            <Select
              classNamePrefix="mySelect"
              onChange={changeSelectPiority}
              className="option-piority"
              value={piorityTask}
              label="Single select"
              options={OPTION_PIORITY} />
          </div>
        </div>
        <button className="btn btn-add-edit btn-green wd-80 mr-t20" onClick={actionTaskClick}>{_.isNil(props.task) ? 'Add' : 'Update'}</button>
      </div>
    </>
  )
}

export default CreateEditTask;