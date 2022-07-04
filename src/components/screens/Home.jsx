import { useState } from 'react';
import CreateTodoFild from './createTodoFild/CreateTodoFild';
import TodoItem from './item/TodoItem';

const data = [
  {
    _id: 'sfos9sy7s',
    title: 'Finish the essay collaboration',
    isCompleted: false,
  },
  {
    _id: 'fs9gsd78gs',
    title: 'Read next chapter of the book',
    isCompleted: false,
  },
  {
    _id: 'hdffh8df',
    title: 'Send the finished assigment',
    isCompleted: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t._id !== id));
  };

  return (
    <div className=' text-white w-4/5 mx-auto'>
      <h1 className='text-2xl font-bold text-center mb-10'>Todo List</h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <CreateTodoFild setTodos={setTodos} />
    </div>
  );
};

export default Home;
