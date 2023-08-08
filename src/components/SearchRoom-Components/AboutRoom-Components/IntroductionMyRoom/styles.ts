import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 25px;
`;

export const Introduction = styled.div`
  h1 {
    font-size: 22px;
    font-weight: 600;
  }
  h2 {
    margin-top: 8px;
    font-size: 18px;
    font-weight: 400;
  }
  @media (max-width: 425px) {
    text-align: center;
  }
`;

export const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 75px;
    border-radius: 100%;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const Space = styled.span`
  margin-left: 8px;
  margin-right: 8px;
  font-weight: 400;
`;

export const LargText = styled.div`
  margin-top: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 25px;
  font-weight: 400;
  line-height: 24px;
  @media (max-width: 425px) {
    text-align: justify;
  }
`;
