import React from 'react';
import Submenu from "../submenu/submenu";
import styled from "styled-components";
import StyledLink from "../../../link/link";

const catalogoRoutes = [
    {
        name: 'Cerámica',
        route: '/catalogo/ceramica/1'
    },
    {
        name: 'Porcelanato',
        route: '/catalogo/porcelanato/1'
    },
    {
        name: 'Piedras Ornamentales',
        route: '/catalogo/piedras-ornamentales/1'
    },
    {
        name: 'Mallas y Decorados',
        route: '/catalogo/mallas-y-decorados/1'
    },
    {
        name: 'Muebles de Baño',
        route: '/catalogo/muebles-de-baño/1'
    },
    {
        name: 'Piezas de Baño',
        route: '/catalogo/piezas-de-baño/1'
    },
    {
        name: 'Griferias',
        route: '/catalogo/griferias/1'
    },
    {
        name: 'Accesorios',
        route: '/catalogo/accesorios/1'
    }
];

const SubNavItem = styled(StyledLink)`
  color: #ffffff;
  padding: 1rem;
  border-bottom: none;
  
  :hover {
    border-bottom: none;
  }
`;

const CatalogoSubmenu = () => {
    return (
        <Submenu>
            {
                catalogoRoutes.map((item) => (
                    <SubNavItem link={item.route} key={item.name}>
                        { item.name }
                    </SubNavItem>
                ))
            }
        </Submenu>
    );
};

export default CatalogoSubmenu;
