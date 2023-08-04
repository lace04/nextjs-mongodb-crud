import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai';
function Navbar() {
  return (
    <nav className='bg-zinc-900 p-4 flex justify-between items-center'>
      <Link
        href='/'
        className='text-2xl hover:text-zinc-400 transition duration-300 font-semibold'
      >
        Task App
      </Link>
      <ul className='flex gap-x-4'>
        <li>
          <Link
            href={'/tasks/new'}
            className='bg-blue-500 rounded-md p-2  hover:bg-blue-700 transition duration-500 flex items-center gap-x-2'
          >
            <AiOutlinePlus />
            New Task
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
