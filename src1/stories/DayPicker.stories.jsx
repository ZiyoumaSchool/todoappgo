import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import DayPicker from '../components/DayPicker'

export default {
  component: DayPicker,
  // title: 'TaskAdd',
  // dateBegin: new Date(2021, 0, 1, 9, 0),
  // dateEnd: new Date(2021, 0, 1, 9, 0),
  // description: 'Description of the task is going there',
};

const Template = args => <DayPicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    
  },
};

