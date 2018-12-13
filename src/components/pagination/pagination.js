import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import CardGrid from "../cardGrid/cardGrid";
import SpinnerLoading from "../spinnerLoading/spinnerLoading";
import Page from "../pages/page";
import styled from "styled-components";

const PageNumbersContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  margin-top: 30px;
`;

const ContainerGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-areas: 
    'a1 a1 . . . .'
    'a1 a1 a2 a2 a4 a4'
    'a1 a1 a2 a2 a4 a4'
    'a1 a1 a3 a3 a4 a4'
    'a1 a1 a3 a3 a7 a7'
    'a5 a5 a6 a6 a7 a7'
    'a5 a5 a6 a6 a7 a7'
    'a5 a5 . . . .'
    'a5 a5 . . . .';
    
    @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
      
      div {
        margin-bottom: 2 0px;
      }
    }
  ;
`;

const range = (from, to) => {
    const range = [];

    for (let i = from; i <= to; i++) {
        range.push(i);
    }

    return range;
};

class Pagination extends Component {
    state = {
        currentPage: 1,
        elementsPerPage: 9
    };

    componentDidMount() {
        const { match, elementsPerPage } = this.props;

        if (match.params.page) {
            this.setState(() => ({
                currentPage: parseInt(match.params.page)
            }));
        }

        if (elementsPerPage) {
            this.setState(() => ({
                elementsPerPage
            }));
        }
    }

    componentDidUpdate(prevProps) {
        const { page } = this.props.match.params;
        const { page: prevPage } = prevProps.match.params;

        if (page !== prevPage) {
            this.setState(() => ({
                currentPage: parseInt(page)
            }));
        }
    }

    getPageNumbers = () => {
        const { totalItems } = this.props;
        const { elementsPerPage, currentPage } = this.state;

        const totalPages = Math.ceil(totalItems / elementsPerPage);

        let pages;

        if (currentPage <= 2) {
            if (totalPages > 5) {
                pages = range(1, 5);
            } else {
                pages = range(1, totalPages)
            }
        } else {
            if (totalPages > (currentPage + 2)) {
                pages = range(currentPage - 2, currentPage + 2)
            } else {
                pages = range(currentPage - 2, totalPages)
            }
        }

        return pages;
    };

    render() {
        const { renderFn, loading, onChangePage, items, grid } = this.props;
        const { currentPage } = this.state;

        const pageNumbers = this.getPageNumbers();

        return (
            <React.Fragment>
                {
                    !!grid && (
                        <ContainerGrid>
                            {
                                !!items.length && items.map(renderFn)
                            }
                            {
                                loading && <SpinnerLoading/>
                            }

                            {
                                !loading && !items.length && <h1>No se encontraron elementos</h1>
                            }
                        </ContainerGrid>
                    )
                }
                {
                    !grid && (
                        <CardGrid>
                            {
                                !!items.length && items.map(renderFn)
                            }
                            {
                                loading && <SpinnerLoading/>
                            }

                            {
                                !loading && !items.length && <h1>No se encontraron elementos</h1>
                            }

                        </CardGrid>
                    )
                }

                <PageNumbersContainer>
                    {
                        !!pageNumbers.length && pageNumbers.map(pageNumber => (
                            <Page
                                active={pageNumber === currentPage}
                                key={pageNumber}
                                onClick={() => onChangePage(pageNumber)}
                            >{pageNumber}</Page>
                        ))
                    }
                </PageNumbersContainer>
            </React.Fragment>
        );
    }
}

export default withRouter(Pagination);