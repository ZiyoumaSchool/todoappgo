import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Task from './Task';

export default {
  component: Task,
  title: 'Task',
  dateBegin: new Date(2021, 0, 1, 9, 0),
  dateEnd: new Date(2021, 0, 1, 9, 0),
  description: 'Description of the task is going there',
};

const Template = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    dateBegin: new Date(2021, 0, 1, 9, 0),
    dateEnd: new Date(2021, 0, 1, 9, 0),
    description: 'Default Description of the task inbox is going there',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
    description: 'Default Description of the task pinned is going there',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
    description: 'Default Description of the task archived is going there',
  },
};