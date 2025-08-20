import {
  PaginationWrapper,
  PaginationButton,
  StyledVectorLeft,
  StyledVectorRight,
  PageInfo,
  Page,
  ButtonParagraph,
} from "./styled.js";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const goToFirstPage = () => onPageChange(1);
  const goToPreviousPage = () => onPageChange(Math.max(currentPage - 1, 1));
  const goToNextPage = () =>
    onPageChange(Math.min(currentPage + 1, totalPages));
  const goToLastPage = () => onPageChange(totalPages);

  return (
    <PaginationWrapper>
      <PaginationButton onClick={goToFirstPage} disabled={currentPage === 1}>
        <span className="double-arrow">
          <StyledVectorLeft disabled={currentPage === 1} />
          <StyledVectorLeft
            className="mobile-only"
            disabled={currentPage === 1}
          />
        </span>
        <ButtonParagraph>First</ButtonParagraph>
      </PaginationButton>

      <PaginationButton onClick={goToPreviousPage} disabled={currentPage === 1}>
        <StyledVectorLeft disabled={currentPage === 1} />
        <ButtonParagraph>Previous</ButtonParagraph>
      </PaginationButton>

      <PageInfo>
        Page <Page>{currentPage}</Page> of <Page>{totalPages}</Page>
      </PageInfo>

      <PaginationButton
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
      >
        <ButtonParagraph>Next</ButtonParagraph>
        <StyledVectorRight disabled={currentPage === totalPages} />
      </PaginationButton>

      <PaginationButton
        onClick={goToLastPage}
        disabled={currentPage === totalPages}
      >
        <ButtonParagraph>Last</ButtonParagraph>
        <span className="double-arrow">
          <StyledVectorRight disabled={currentPage === totalPages} />
          <StyledVectorRight
            className="mobile-only"
            disabled={currentPage === totalPages}
          />
        </span>
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default Pagination;
