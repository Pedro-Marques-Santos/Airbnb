import styled from "styled-components";

//LOCATION
export const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;

  @media (max-width: 650px) {
    justify-content: center;
  }
`;

interface ILocation {
  isType: string;
}

export const Location = styled.div<ILocation>`
  display: ${(props) => (props.isType === "location" ? "flex" : "none")};
  width: 400px;
  height: 250px;
  flex-direction: column;

  @media (max-width: 650px) {
    display: ${(props) => (props.isType === "location" ? "flex" : "none")};
    width: 160px;
  }
`;

export const LocationLi = styled.div`
  margin-bottom: 36px;
  display: flex;
  font-family: "Mulish";
  font-size: 14px;
  font-weight: 400;
`;

export const LocationLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export const IconLocation = styled.div`
  margin-right: 10px;
  color: var(--button-foto);
`;

//GUESTS

interface GuestsProps {
  isType: string;
}

export const Guests = styled.div<GuestsProps>`
  display: ${(props) => (props.isType === "guests" ? "flex" : "none")};
  margin-left: 33%;
  width: 400px;
  height: 250px;
  flex-direction: column;

  @media (max-width: 650px) {
    display: ${(props) => (props.isType === "guests" ? "flex" : "none")};
    margin-left: 0px;
    width: 118px;
  }
`;

export const GuestsLi = styled.div`
  margin-bottom: 52px;
  h1 {
    font-family: "Mulish";
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    color: var(--text-padrao);
  }

  h2 {
    font-family: "Mulish";
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--add-search);
  }
`;

export const QtdGuests = styled.div`
  display: flex;
  margin-top: 12px;
  color: var(--legenda-foto);

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 23px;
    width: 23px;
    border-radius: 4px;
    border: 1px solid #828282;
    margin-right: 15px;
    :nth-child(3) {
      margin-right: 0px;
    }
    :nth-child(2) {
      border: none;
      cursor: text;
    }
    font-size: 15px;
  }
`;

export const Qtd = styled.div`
  color: var(--text-padrao);
  font-family: "Mulish";
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;

  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;
