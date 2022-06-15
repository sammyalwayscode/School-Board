import React from "react";
import styled from "styled-components";
import Dashboard from "./BoardRoutes/Dashboard/Dashboard";

const DashBoard = () => {
  return (
    <Container>
      <Wrapper>
        <Dashboard />
      </Wrapper>
    </Container>
  );
};

export default DashBoard;

const Container = styled.div`
  margin-top: 50px;
  min-height: calc(100vh - 50px);
  background-color: #f0f1f3;
  flex: 1;
  /* height: 100%; */
`;
const Wrapper = styled.div``;
