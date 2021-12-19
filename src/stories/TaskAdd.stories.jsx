import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import InputTextNewTask from '../components/Task/InputTextNewTask';

export default {
  component: InputTextNewTask,
  title: 'TaskAdd',
  dateBegin: new Date(2021, 0, 1, 9, 0),
  dateEnd: new Date(2021, 0, 1, 9, 0),
  description: 'Description of the task is going there',
};

const Template = args => <InputTextNewTask {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test TaskAdd',
    dateBegin: new Date(2021, 0, 1, 9, 0),
    dateEnd: new Date(2021, 0, 1, 9, 0),
    description: 'Default Description of the task inbox is going there',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

