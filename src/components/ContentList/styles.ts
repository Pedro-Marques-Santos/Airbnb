import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
`;

export const ImgMain = styled.div`
  img {
    display: flex;
    height: 269px;
    width: 100%;
    border-radius: 24px;
    object-fit: cover;
  }
`;
//Itens commum
export const Legenda1Commum = styled.div`
  font-size: 14px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const Legenda2Commum = styled.div`
  margin-top: 10px;
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
`;

export const AvaliationCommum = styled.div`
  display: flex;
  align-items: center;
`;

export const LegendCommum = styled.div`
  color: var(--legenda-foto);
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
`;

//itens superhost

export const Legend1SuperHost = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;

  div {
    display: flex;
  }
`;

export const ButtonSuperHost = styled.div`
  height: 28px;
  width: 100px;
  padding-left: 9px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  font-family: "Montserrat";
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  color: var(--button-foto);
  border: 1px solid var(--button-foto);
  margin-right: 5px;
`;

export const LegendaTitleSuperHost = styled.div`
  display: flex;
  align-items: center;
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  color: var(--legenda-foto);
`;

export const AvaliationSuperHost = styled.div`
  display: flex;
  align-items: center;
`;

export const TagAvaliation = styled.div`
  color: var(--total-stays);
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  margin-left: 5px;
`;

export const Legenda2SuperHost = styled.div`
  margin-top: 12px;
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

//utilizavel nos dois

export const IconAv = styled.div`
  color: var(--logo);
`;
