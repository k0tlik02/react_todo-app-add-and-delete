import React from 'react';
import { Status } from '../types/Status';
import cn from 'classnames';

type Props = {
  countNotCompleted: number;
  countCompleted: number;
  status: string;
  setStatus: (status: string) => void;
  onClearCompletedTodos: () => void;
};

export const Footer: React.FC<Props> = ({
  countNotCompleted,
  countCompleted,
  status,
  setStatus,
  onClearCompletedTodos,
}) => {
  return (
    <>
      <footer className="todoapp__footer" data-cy="Footer">
        <span className="todo-count" data-cy="TodosCounter">
          {countNotCompleted} items left
        </span>

        <nav className="filter" data-cy="Filter">
          {[Status.All, Status.Active, Status.Completed].map(filterStatus => (
            <a
              href="#/"
              className={cn('filter__link', {
                selected: filterStatus === status,
              })}
              data-cy={`FilterLink${filterStatus}`}
              key={filterStatus}
              onClick={() => setStatus(filterStatus)}
            >
              {filterStatus}
            </a>
          ))}
        </nav>

        {/* this button should be disabled if there are no completed todos */}
        <button
          type="button"
          className="todoapp__clear-completed"
          data-cy="ClearCompletedButton"
          style={{ visibility: countCompleted ? 'visible' : 'hidden' }}
          disabled={!countCompleted}
          onClick={onClearCompletedTodos}
        >
          Clear completed
        </button>
      </footer>
    </>
  );
};
