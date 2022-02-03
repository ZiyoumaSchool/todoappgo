import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TaskItem from '../components/Task/TaskItem/index';

export default {
  component: TaskItem,
  title: 'TaskItem',
  dateBegin: new Date(2021, 0, 1, 9, 0),
  dateEnd: new Date(2021, 0, 1, 9, 0),
  description: 'Description of the task is going there',
};

const Template = args => <TaskItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  taskItem: {
    id: '1',
    title: 'Test TaskItem',
    // dateBegin: new Date(2021, 0, 1, 9, 0),
    dateBegin: new Date(2021, 0, 1, 9, 0),
    dateEnd: "2021-12-31",
    description: 'Default Description of the task inbox is going there',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  taskItem: {
    ...Default.args.taskItem,
    state: 'TASK_PINNED',
    description: 'Default Description of the task pinned is going there',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  taskItem: {
    ...Default.args.taskItem,
    state: 'TASK_ARCHIVED',
    description: 'Default Description of the task archived is going there',
  },
};