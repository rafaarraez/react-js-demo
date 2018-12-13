import React from 'react';
import styled from "styled-components";
import Category from "./category/category";
import StyledLink from "../../link/link";

const links = ({ className }) => {

    const SubCategory = styled.div`
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: 0.80rem;
      padding-left: 10px;
      height: auto;
      width: auto;
    `;

    const Link = styled(StyledLink)`
       border-bottom: none;
       
       :hover {
        border-bottom: none;
       }
    `;

    return (
        <div className={className}>
            <Category>
                <Link link={'/inicio'}>
                    Inicio
                </Link>
                <Link link={'/blog'}>
                    Blog
                </Link>
                <Link link={'/nosotros'}>
                    Nosotros
                </Link>
                <Link link={'/servicios'}>
                    Servicios
                </Link>
                <Link link={'/contacto'}>
                    Contacto
                </Link>
            </Category>

            <Category>
                <Link link={'/catalogo'}>
                    Catalogo
                </Link>

                <SubCategory>
                    <Link link={'/catalogo/ceramica'}>
                        ceramica
                    </Link>
                    <Link link={'/catalogo/porcelanato'}>
                        porcelanato
                    </Link>
                    <Link link={'/catalogo/piedras-ornamentales'}>
                        piedras ornamentales
                    </Link>
                    <Link link={'/catalogo/mallas-y-decorados'}>
                        mallas y decorados
                    </Link>
                    <Link link={'/catalogo/piezas-de-baño'}>
                        piezas de baño
                    </Link>
                    <Link link={'/catalogo/muebles-de-baño'}>
                        muebles de baño
                    </Link>
                    <Link link={'/catalogo/griferias'}>
                        griferias
                    </Link>
                    <Link link={'/catalogo/accesorios'}>
                        accesorios
                    </Link>
                </SubCategory>
            </Category>

            <Category>
                <Link link={'/comercio-e-industria'}>
                    Comercio é Industria
                </Link>
                <SubCategory>
                    <Link link={'/comercio-e-industria/constructores'}>
                        constructores
                    </Link>
                    <Link link={'/comercio-e-industria/instaladores'}>
                        instaladores
                    </Link>
                    <Link link={'/comercio-e-industria/arquitectos'}>
                        arquitectos
                    </Link>
                    <Link link={'/comercio-e-industria/diseñadores-de-interiores'}>
                        diseñadores de interiores
                    </Link>
                </SubCategory>
            </Category>
        </div>
    );
};

const Links = styled(links)`
  display: flex;
  flex-direction: row;
  gap: 50px;
  
  @media (max-width: 700px) {
    display: none;
  }
`;

export default Links;
