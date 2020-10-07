import React, { memo, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import { IPaginate } from './interfaces';
import { ContextApp } from '../../state';
import { Container } from './style';

const Paginate: React.FC<IPaginate> = memo(({ countPage }) => {
    const {
        app_state: { currentPage },
        handlePageClick,
    } = useContext(ContextApp);
    return (
        <Container>
            <ReactPaginate
                previousLabel='<'
                nextLabel='>'
                breakLabel='...'
                breakClassName='break-me'
                pageCount={countPage}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName='pagination'
                activeClassName='active'
                pageClassName='p-page'
                forcePage={currentPage}
            />
        </Container>
    );
});
export default Paginate;
