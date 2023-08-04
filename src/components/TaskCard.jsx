import Link from 'next/link';

function TaskCard({ task }) {
  return (
    <Link href={`/tasks/${task._id}`}>
      <div className='bg-zinc-800 rounded-md p-4 hover:cursor-pointer hover:bg-zinc-700 transition duration-500'>
        <h3 className='text-lg font-semibold text-zinc-100'>{task.title}</h3>
        <p className='text-zinc-100 overflow-wrap: break-all'>
          {task.description}
        </p>
        <p className='text-zinc-600 text-xs'>
          {new Date(task.createdAt).toLocaleString()}
        </p>
        <p className='text-orange-300 text-xs'>
          {new Date(task.updatedAt).toLocaleString()}
        </p>
      </div>
    </Link>
  );
}

export default TaskCard;
