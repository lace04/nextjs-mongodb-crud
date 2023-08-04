'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AiOutlinePlus } from 'react-icons/ai';

function NotTasks() {

  return (
    <div className='w-4/5 mx-auto'>
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl text-zinc-100 text-center mt-20 mb-10'>
          No tasks found
        </h1>
        <Link
          href={'/tasks/new'}
          className='bg-blue-500 rounded-md p-2 mt-2 hover:bg-blue-700 transition duration-500 flex items-center gap-x-2'
        >
          <AiOutlinePlus />
          New Task
        </Link>
      </div>
      <Image
        className='mx-auto'
        src='./notTasks.svg'
        priority='high'
        width={300}
        height={300}
        alt='not task'
        as='image'
      />

      <p className='text-zinc-100 text-center mt-10 font-extralight'>
        You don't have any active tasks right now.
      </p>
    </div>
  );
}

export default NotTasks;
