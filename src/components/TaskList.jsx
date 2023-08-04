import { connectDB } from '@/utils/mongoose';
import Task from '@/models/Task';
import TaskCard from './TaskCard';
import NotTasks from './NotTasks.jsx';

async function getTasks() {
  connectDB();
  const tasks = await Task.find();
  return tasks;
}

async function TaskList() {
  const tasks = await getTasks();

  if (tasks.length === 0) {
    return <NotTasks />;
  }

  return (
    <div className='w-4/5 mx-auto'>
      <h1 className='text-3xl text-zinc-100 text-center my-10 bg-zinc-800 p-2 rounded-md hover:bg-zinc-700 trasition duration-1000'>
        Task List
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
