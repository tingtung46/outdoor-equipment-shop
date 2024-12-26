import { ArrowLeft, ArrowRight } from 'lucide-react';
import { usePagination, DOTS } from '../utils/UsePagination';
import classNames from 'classnames';
import '../styles/pagination.css';

export const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage - 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange - 1];

  return (
    <ul className="flex list-none">
      <li>
        <button
          onClick={onPrevious}
          className={classNames('arrow', { disabled: currentPage === 1 })}
        >
          <ArrowLeft />
        </button>
      </li>

      {paginationRange.map((index, pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li key={index}>
              <button>&#8230</button>
            </li>
          );
        }

        return (
          <li
            key={index}
            onClick={onPageChange(pageNumber)}
            className={classNames({ selected: currentPage === pageNumber })}
          >
            {pageNumber}
          </li>
        );
      })}

      <li>
        <button
          onClick={onNext}
          className={classNames('arrow', { disabled: currentPage === lastPage })}
        >
          <ArrowRight />
        </button>
      </li>
    </ul>
  );
};
