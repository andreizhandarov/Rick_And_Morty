import ResponsivePagination from 'react-responsive-pagination';
import style from './Pagination.module.css';

type Props ={
  info: {pages?: number};
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void
}

export const Pagination = ({info, pageNumber, setPageNumber}: Props) => {

  return (

    <ResponsivePagination 
      current={pageNumber} 
      total={info.pages || 1} 
      onPageChange={(newPage) => setPageNumber(newPage)}
      className={style.pagination}
      pageItemClassName={style.pageItem}
      pageLinkClassName={style.pageLink}
      activeItemClassName={style.active}
      disabledItemClassName={style.disabled}
      previousClassName={style.prev}
      nextClassName={style.next}
      previousLabel="Prev" 
      nextLabel="Next" 
      />
  );
};






