import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import DayPickerInput from '../components/DayPickerInput';

export default {
  component: DayPickerInput,
  // title: 'TaskAdd',
  // dateBegin: new Date(2021, 0, 1, 9, 0),
  // dateEnd: new Date(2021, 0, 1, 9, 0),
  // description: 'Description of the task is going there',
};

const Template = args => <DayPickerInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  DayPickerInput: {
    id: '1',
    
  },
};

