export const ACTION_TASK_TYPE = {
  CREATE: 'create',
  UPDATE_DISPLAY: 'update-display',
  REMOVE_DISPLAY: 'remove-display',
  DONE: 'update-item-select',
  REMOVE: 'remove-item-select'
};

export const OPTION_PIORITY = [
  { value: '1', label: 'Low' },
  { value: '2', label: 'Normal'},
  { value: '3', label: 'High'},
]

export type TaskType = {
  taskId: string,
  taskName: string,
  descriptionTask: string,
  dateTime: string,
  piorityTask: {}
}