import React from 'react';

import ButtonSubmit from '../components/ButtonSubmit';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ButtonSubmit',
  component: ButtonSubmit,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ButtonSubmit {...args} />;

export const Enable = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Enable.args = {
  primary: true,
  label: 'ButtonSubmit',
  disable:false,
};

export const Disable = Template.bind({});
Disable.args = {
  label: 'ButtonSubmit',
  disable:true,
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'ButtonSubmit',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'ButtonSubmit',
// };
