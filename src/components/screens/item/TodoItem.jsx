import classNames from 'classnames';
import Check from './Check';
import { FaTrash } from 'react-icons/fa';

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div className='w-full flex items-center justify-between mb-4 rounded-3xl bg-gray-800 p-5'>
      <button className='flex' onClick={() => changeTodo(todo._id)}>
        <Check isCompleted={todo.isCompleted} />
        <span className={classNames({ 'line-through': todo.isCompleted })}>
          {todo.title}
        </span>
      </button>
      <button onClick={() => removeTodo(todo._id)}>
        <FaTrash className='hover:text-red-500 transition-colors ease-in-out duration-300' />
      </button>
    </div>
  );
};

export default TodoItem;
