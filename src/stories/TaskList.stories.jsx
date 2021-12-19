import React from 'react';

import TaskList from '../components/Task/TaskList';
import * as TaskItemStories from './TaskItem.stories';

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
};

const Template = args => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  tasks: [
    { ...TaskItemStories.Default.args.taskItem, id: 1, title: 'Task 1' },
    { ...TaskItemStories.Default.args.taskItem, id: 2, title: 'Task 2' },
    { ...TaskItemStories.Default.args.taskItem, id: 3, title: 'Task 3' },
    { ...TaskItemStories.Default.args.taskItem, id: 4, title: 'Task 4' },
    { ...TaskItemStories.Default.args.taskItem, id: 5, title: 'Task 5' },
    { ...TaskItemStories.Default.args.taskItem, id: 6, title: 'Task 6' },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};