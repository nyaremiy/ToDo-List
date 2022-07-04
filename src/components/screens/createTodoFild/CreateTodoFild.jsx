import { useState } from 'react';

const CreateTodoFild = ({ setTodos }) => {
  const [title, setTitle] = useState('');
  const addTodo = (title) => {
    setTodos((prev) => [
      { _id: new Date(), title, isCompleted: false },
      ...prev,
    ]);
    setTitle('');
  };
  return (
    <div className='w-full flex items-center justify-between mb-4 rounded-3xl bg-gray-900 p-5 border-2 border-gray-800 mt-20'>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTodo(title)}
        className='bg-transparent w-full border-none outline-none'
        placeholder='Add a task'
      />
    </div>
  );
};

export default CreateTodoFild;
