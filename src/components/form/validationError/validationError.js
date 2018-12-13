import React from "react";
import styled from "styled-components";
import { ErrorMessage } from "formik";

const ValidationError = (props) => {
    const { name } = props;

    const StyledDiv = styled.div`
      color: #cc0000;
      font-weight: 500;
      margin-top: 3px;
      font-size: 0.90rem;
    `;

    return (
        <ErrorMessage component={StyledDiv} name={name}/>
    )
};

export default ValidationError;