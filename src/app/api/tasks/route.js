import { NextResponse } from 'next/server';
import { connectDB } from '@/utils/mongoose';
import Task from '@/models/Task';

export async function GET() {
  connectDB();
  try {
    const tasks = await Task.find();
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const newTask = new Task(data);
    const savedTask = await newTask.save();
    return NextResponse.json(savedTask);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
