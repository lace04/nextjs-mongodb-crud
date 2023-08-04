'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { AiFillHome } from 'react-icons/ai';

function FormPage() {
  //Estado para manejar los inputs del formulario
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
  });

  const router = useRouter();
  const { id } = useParams();

  const getTask = async () => {
    const res = await fetch(`/api/tasks/${id}`);
    const data = await res.json();
    // console.log(data)
    setNewTask(data);
  };

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const creaeTask = async () => {
    try {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.status === 200) router.push('/');
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const updatedTask = async (id) => {
    try {
      const res = await fetch(`/api/tasks/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(newTask),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.status === 200) router.push('/');
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this task?')) return;
    try {
      const res = await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
      });

      if (res.status === 200) router.push('/');
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id) {
      await creaeTask(newTask);
    } else {
      await updatedTask(id);
    }
  };

  useEffect(() => {
    if (id) {
      getTask();
    }
  }, []);

  return (
    <>
      <header className='flex justify-between items-center w-1/2 md:w-1/3 mx-auto mt-10'>
        <h1 className='text-md md:text-xl lg:text-3xl text-zinc-100 text-center m-5'>
          {id ? 'Update Task' : 'Add Task'}
        </h1>

        {id ? (
          <button
            className='bg-red-500 hover:bg-red-700 transition duration-500 rounded-md p-2 px-4 py-2 text-zinc-100'
            onClick={handleDelete}
          >
            <RiDeleteBin2Fill />
          </button>
        ) : (
          <button
            className='bg-blue-500 hover:bg-blue-700 transition duration-500 rounded-md p-2 px-4 py-2 text-zinc-100'
            onClick={() => router.push('/')}
          >
            <AiFillHome />
          </button>
        )}
      </header>

      <form
        onSubmit={handleSubmit}
        className='flex flex-col w-1/2 md:w-1/3 mx-auto
    bg-zinc-800 p-4 rounded-md mt-5 gap-y-2'
      >
        <label>Title:</label>
        <input
          type='text'
          name='title'
          placeholder='Write a title'
          className='bg-zinc-900 rounded-md p-2 placeholder:text-xs'
          onChange={handleChange}
          value={newTask.title}
        />

        <label className='mt-2'>Description:</label>
        <textarea
          name='description'
          placeholder='Write a description'
          rows={3}
          className='bg-zinc-900 rounded-md p-2 placeholder:text-xs'
          onChange={handleChange}
          value={newTask.description}
        />
        <button
          type='submit'
          //disable if the inputs are empty
          className={`bg-blue-500 rounded-md p-2 mt-2 hover:bg-blue-700 transition duration-500 ${
            !newTask.title || !newTask.description
              ? 'opacity-50 hover:cursor-not-allowed'
              : ''
          }`}
        >
          {id ? 'Update Task' : 'Save Task'}
        </button>
      </form>
    </>
  );
}

export default FormPage;
