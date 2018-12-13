import React from 'react';
import styled from "styled-components";
import Filter from "./filter/filter";

const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Filters = () => {
    return (
        <FiltersContainer>
            <Filter>
                <option value="h">holis</option>
            </Filter>
            <Filter type={'select'}></Filter>
            <Filter type={'select'}></Filter>
            <Filter type={'select'}></Filter>
        </FiltersContainer>
    );
};

export default Filters;
