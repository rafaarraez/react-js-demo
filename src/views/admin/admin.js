import React, {Component} from 'react';
import styled from "styled-components";
import AdminNavbar from "./adminNavbar/adminNavbar";
import AdminRoutes from "./adminRoutes/adminRoutes";

const AdminContainer = styled.div`
  width: 80%;
  margin: 20px auto;
`;

class Admin extends Component {
    render() {
        return (
            <React.Fragment>
                <AdminNavbar/>
                <AdminContainer>
                    <AdminRoutes/>
                </AdminContainer>
            </React.Fragment>
        );
    }
}

export default Admin;