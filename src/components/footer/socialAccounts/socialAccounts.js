import React from 'react';
import styled from "styled-components";
import IconWithText from "../../iconWithText/iconWithText";
import correoIcon from "../../../assets/icons/correo.png";
import facebookIcon from "../../../assets/icons/facebook.png";
import twitterIcon from "../../../assets/icons/twitter.png";
import instagramIcon from "../../../assets/icons/instagram-GRIS.png";
import IconLink from "../../iconLink/iconLink";

const socialAccounts = ({ className }) => {
    return (
        <div>
            <div className={className}>
                <IconLink
                    icon={facebookIcon}
                    link={'https://www.facebook.com/kavanarevest/'}
                    external
                />

                <IconLink
                    icon={instagramIcon}
                    link={'https://instagram.com/kavanarevest'}
                    external
                />

                <IconLink
                    icon={twitterIcon}
                    link={'https://twitter.com/kavanarevest'}
                    external
                />
            </div>
            <IconWithText icon={correoIcon}>
                info@kavanarevestimientos.com
            </IconWithText>
        </div>
    );
};

const SocialAccounts = styled(socialAccounts)`
  height: 60px;
  display: flex;
  width: auto;
  flex-direction: row;
`;

export default SocialAccounts;
