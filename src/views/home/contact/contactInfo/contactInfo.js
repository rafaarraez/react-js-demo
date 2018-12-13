import React from 'react';
import styled from "styled-components";
import StyledLink from "../../../../components/link/link";
import LocationIcons from "../../../../components/iconWithText/iconWithText";
import locationIcon from "../../../../assets/icons/UBICACION.png";
import correoIcon from "../../../../assets/icons/CORREO-NARANJA.png";
import phoneIcon from "../../../../assets/icons/phone-orange.png";

const ContactInfo = ({ className }) => {

    const LocationLink = styled(StyledLink)`
      font-size: 1.25rem;
      color: ${props => props.theme.secondary};
    `;

    return (
        <div className={className}>
            <p>
                <LocationLink
                    external
                    link={'https://www.google.com/maps/place/Kavana+Revestimientos/@10.2243916,-68.009993,19z/data=!4m5!3m4!1s0x0:0x1fe4e1de45de41e4!8m2!3d10.2241374!4d-68.0094279'}
                >
                    Google maps
                </LocationLink>
            </p>
            <LocationIcons icon={locationIcon}>
                <p>Av. Bolivar Norte, Sector El Recreo</p>
                <p>C.C. Home Shopping Mall, Planta Baja</p>
                <p>Local 15. Valencia</p>
                <p>Edo. Carabobo. Venezuela</p>
            </LocationIcons>

            <LocationIcons icon={phoneIcon}>
                <p>+58 (241) 8256818</p>
                <p>+58 424 - 3674623</p>
            </LocationIcons>

            <LocationIcons icon={correoIcon}>
                <p>info@kavanarevestimientos.com</p>
            </LocationIcons>
        </div>
    );
};

const StyledContactInfo = styled(ContactInfo)`
  display: flex;
  width: auto;
  height: 100%;
  flex-direction: column;
  gap: 25px;
`;

export default StyledContactInfo;
