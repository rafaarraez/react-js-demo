import React from 'react';
import styled from "styled-components";
import StyledContactIcons from "./contactIcons/contactIcons";
import StyledLocation from "./location/location";
import StyledContactInfo from "./contactInfo/contactInfo";

const Contact = ({ className }) => {
    return (
        <div className={className}>
            <StyledContactIcons/>
            <StyledLocation/>
            <StyledContactInfo/>
        </div>
    );
};

const StyledContact = styled(Contact)`
  display: flex;
  flex-direction: row;
  gap: 80px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export default StyledContact;
