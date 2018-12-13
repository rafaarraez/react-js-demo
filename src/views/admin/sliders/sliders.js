import React, {Component} from 'react';
import styled from "styled-components";
import * as axios from "axios";
import ProductCard from "../../catalogo/productsType/productCard/productCard";
import Button from "../../../components/Button/Button";
import Modal from "../../../components/modal/modal";
import Pagination from "../../../components/pagination/pagination";

const SlidersContainer = styled.div`
  width: 80%;
  margin: 30px auto;
`;

class Sliders extends Component {

    state = {
        sliders: [],
        totalSliders: 0,
        loading: true,
        modalOpen: false,
        modalMessage: ''
    };

    async componentDidMount() {
        const { page } = this.props.match;

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/slider?offset=${page}`);

        const { sliders } = response.data.data;

        this.setState(() => ({
            sliders,
            totalSliders: sliders.length,
            loading: false
        }))
    }

    async componentDidUpdate(prevProps) {
        const { page } = this.props.match.params;
        const { page: prevPage } = prevProps.match.params;

        if (page !== prevPage) {
            this.setState(() => ({
                loading: true,
                products: []
            }));
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/slider`);

            const { sliders } = response.data.data;

            this.setState(() => ({
                sliders,
                loading: false
            }));
        }
    }

    onChangePage = (page) => {
        const { history } = this.props;
        history.push('/admin/slider/' + page);
    };

    onDeleteProduct = async (id) => {
        try {
            this.setState(() => ({
                loading: true,
                sliders: [],
                totalSliders: 0
            }));
            await axios.delete(`${process.env.REACT_APP_API_URL}/slider/${id}`);

            const responseGet = await axios.get(`${process.env.REACT_APP_API_URL}/slider`);

            this.setState(() => ({
                modalOpen: true,
                loading: false,
                modalMessage: 'La imagen ha sido eliminado con exito',
                sliders: responseGet.data.data.sliders,
                totalSliders: responseGet.data.data.sliders.length
            }))

        } catch (e) {
            this.setState(() => ({
                loading: false,
                modalOpen: true,
                modalMessage: 'Ha ocurrido un error. Por favor, vuelva a intentarlo mas tarde'
            }))
        }
    };

    renderFn = (slider, index) => (
        <ProductCard
            icon={process.env.REACT_APP_API_PUBLIC + '/' + slider.image}
            name={slider.message}
            key={index}
        >
            <Button color={'#cc0000'} text={'#ffffff'} onClick={() => this.onDeleteProduct(slider._id)}>borrar</Button>
        </ProductCard>
    );

    onAddProduct = () => {
        this.props.history.push('/admin/slider/agregar')
    };

    closeModal = () => {
        this.setState((prevState) => ({
            modalOpen: !prevState.modalOpen
        }))
    };

    render() {
        const { sliders, totalSliders, loading } = this.state;

        return (
            <div>
                <Modal show={this.state.modalOpen} closeCb={this.closeModal}>
                    <h1>Imagen eliminada</h1>
                    <p>{this.state.modalMessage}</p>
                </Modal>

                <h1>Slider <Button onClick={this.onAddProduct}>agregar imagen</Button></h1>
                <SlidersContainer>
                    <Pagination
                        items={sliders}
                        totalItems={totalSliders}
                        loading={loading}
                        onChangePage={this.onChangePage}
                        renderFn={this.renderFn}
                    />
                </SlidersContainer>
            </div>
        );
    }
}

export default Sliders;