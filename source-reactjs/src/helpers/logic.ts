import { TaskType } from "../const/constants";

export const compareDate = (taskFist: TaskType, taskSecond:TaskType) => {
  if ( taskFist.dateTime < taskSecond.dateTime ){
    return -1;
  }
  if ( taskFist.dateTime > taskSecond.dateTime ){
    return 1;
  }
  return 0;
}