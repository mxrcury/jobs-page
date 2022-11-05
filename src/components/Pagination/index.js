import React from 'react'
import { PATH } from '../../constants'
import { Container, ArrowButton, ArrowIcon, PageNumber, Numbers, VerticalLine, FlexContainer,ArrowContainer } from './styles'
import { usePagination } from './../../hooks/usePagination';

const Pagination = () => {

    const {pagination, currentPage, setCurrentPage} = usePagination({totalCount:180,pageSize:10, siblingCount:1})

    const onPageChange = (num) => {
      if(num !== '...'){
        setCurrentPage(num)
      }
    }
    const onPageNumberDecrease = () =>{
        setCurrentPage(prev=>prev-1)
    }
    const onPageNumberIncrease = () =>{
        setCurrentPage(prev=>prev+1)
    }

  return (
    <Container>
      <FlexContainer>
        <ArrowContainer>
          <ArrowButton onClick={onPageNumberDecrease}>
            <ArrowIcon src={PATH.ArrowLeftIcon} alt="Left Arrow" />
          </ArrowButton>
          <VerticalLine />
        </ArrowContainer>
        <Numbers>
          {pagination.map((num, idx) => (
            <PageNumber
              active={num === currentPage}
              onClick={() => onPageChange(num)}
            >
              {num}
            </PageNumber>
          ))}
        </Numbers>
        <ArrowContainer>
          <VerticalLine />
          <ArrowButton onClick={onPageNumberIncrease}>
            <ArrowIcon src={PATH.ArrowRightIcon} alt="Right Arrow" />
          </ArrowButton>
        </ArrowContainer>
      </FlexContainer>
    </Container>
  );
}

export default Pagination
