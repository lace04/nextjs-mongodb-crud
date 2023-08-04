'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AiFillHome } from 'react-icons/ai';

function NotFound() {
  const router = useRouter();

  return (
    <section className='w-4/5 mx-auto mt-20'>
      <button
        className='bg-blue-500 hover:bg-blue-700 transition duration-500 rounded-md p-2 px-4 py-2 text-zinc-100 flex mx-auto mb-24'
        onClick={() => router.push('/')}
      >
        <AiFillHome />
      </button>

      <Image
        className='mx-auto'
        src={'./404.svg'}
        priority='high'
        width={300}
        height={300}
        alt='404'
        as='image'
      />

      <p className='text-zinc-100 text-center font-extralight'>
        This page does not exist. Please return to the{' '}
      </p>
    </section>
  );
}

export default NotFound;
