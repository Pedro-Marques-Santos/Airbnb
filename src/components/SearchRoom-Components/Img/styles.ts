import styled from "styled-components";

export const Container = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    max-width: 600px;
    max-height: 400px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  }

  h1 {
    font-size: 20px;
    padding-bottom: 20px;
    font-weight: 600;
    text-align: center;
  }
`;
