import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import InputTextNewTask from '../components/Task/InputTextNewTask';
import ModalComponent from '../components/Modal';

export default {
  component: ModalComponent,
  title: 'Modal',
  description: 'Description of the Modal Here',
};

const Template = args => <ModalComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  Modal: {
    title: 'Modal',
    description: 'Default Description of the Modal inbox is going there',
    
  },
};

