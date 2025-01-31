import { ArrowLeft, ArrowRight, Ellipsis } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { usePagination, DOTS } from '../utils/usePagination';
import classNames from 'classnames';
import '../styles/pagination.css';

const Pagination = ({ onPageChange, totalCount, siblingCount = 1, currentPage, pageSize }) => {
  const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className="flex list-none gap-3">
      <li>
        <button
          onClick={onPrevious}
          className={classNames('arrow', 'shadow-sm', { disabled: currentPage === 1 })}
        >
          <ArrowLeft />
        </button>
      </li>

      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li key={uuidv4()} className="flex items-center text-gray-600">
              <Ellipsis />
            </li>
          );
        }

        return (
          <li key={uuidv4()}>
            <button
              onClick={() => onPageChange(pageNumber)}
              className={classNames('shadow-sm', { selected: currentPage === pageNumber })}
            >
              {pageNumber}
            </button>
          </li>
        );
      })}

      <li>
        <button
          onClick={onNext}
          className={classNames('arrow', 'shadow-sm', { disabled: currentPage === lastPage })}
        >
          <ArrowRight />
        </button>
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  totalCount: PropTypes.number,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
};

export default Pagination;
