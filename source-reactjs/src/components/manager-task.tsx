import React, { useState, useEffect, useRef } from 'react';
import { ACTION_TASK_TYPE, TaskType } from '../const/constants';
import useDebounce from '../helpers/useDebounce';
import CreateEditTask from './create-edit-task';
import TaskItem from './task-item';
import _ from 'lodash';
import moment from 'moment';
import { compareDate } from '../helpers/logic';

export default function ManagerTask() {

  const [listTask, setListTask] = useState<TaskType[]>([]);
  const [listTaskDisplay, setListTaskDisplay] = useState<TaskType[]>([]);
  const [textSearch, setTextSearch] = useState('');
  const [checkEditTask, setCheckEditTask] = useState(false);
  const debouncedTextSearch = useDebounce(textSearch, 500);
  const refInput = useRef(null);
  // const refInput = useRef(null);

  const findListByName = (text: string) => {
    return listTask.filter(elm => elm.taskName.includes(text));
  }

  useEffect(() => {
    if (textSearch !== '' && listTask.length > 0) {
      const listFilter = findListByName(textSearch);
      setListTaskDisplay(listFilter);
    } else {
      setListTaskDisplay(listTask);
    }
  }, [debouncedTextSearch])


  const onActionTask = (task: TaskType, typeActionTask: string) => {
    if (task.taskName === '') {
      alert('Khong duoc nhap rong');
      return;
    }

    if (findListByName(task.taskName).length > 0) {
      alert('Ten task da ton tai');
      return;
    }

    if(task.dateTime < moment().format('YYYY-MM-DD')) {
      alert('Due date phai sau ngay hien tai');
      return;
    }

    let listTaskClone = _.cloneDeep(listTask)
    if (typeActionTask === ACTION_TASK_TYPE.CREATE) {
      listTaskClone.push(task);
      setTextSearch('');
      listTaskClone.sort(compareDate);
      setListTaskDisplay(listTaskClone);
      setListTask(listTaskClone);
    } else { // mode Update task
      let indexTask = listTask.findIndex(elm => elm.taskId === task.taskId);
      if (indexTask >= 0) {
        listTaskClone[indexTask] = task;
        setListTaskDisplay(listTaskClone);
        setListTask(listTaskClone);
      }
    }

  }
  return (
    <>
      <div className="wrap-container">
        <div className="wrap-container-create-edit">
          <h1 className="title">New Task</h1>
          <CreateEditTask
            typeActionTask={ACTION_TASK_TYPE.CREATE}
            actionTask={onActionTask}
          />
        </div>
        <div className="wrap-container-list">
          <h1 className="title">To Do List</h1>
          <div className="enter-name-task">
            <input className="mr-b20 wd-100" value={textSearch} onChange={envent => setTextSearch(envent.target.value)} placeholder="Search..." />
          </div>
          <ul className="list-task">
            {listTaskDisplay.map(task => (
              <TaskItem
                task={task}
                actionTask={onActionTask}
                setCheckEditTask={() => setCheckEditTask(!checkEditTask)}
              />
            ))}
            {checkEditTask &&
              <div className="bull-action">
                <label>Due Date</label>
                <div className="item-action">
                  <div className="item-action-button">
                    <button className="btn btn-action btn-blue w-120px h-35 mr-r10">Done</button>
                    <button className="btn btn-action btn-red h-35 w-120px">Remove</button>
                  </div>
                </div>
              </div>}
          </ul>
        </div>
      </div>
    </>
  )
}
