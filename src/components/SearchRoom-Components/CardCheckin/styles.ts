import styled from "styled-components";

export const ContentContainer = styled.div`
  padding-left: 6px;
  padding-right: 6px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 150px;

  @media (max-width: 768px) {
    width: 100%;
  }

  h5 {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 2px;
  }
`;

export const Price = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;

  span {
    margin-left: 10px;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const ReserveButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff; /* Cor azul bonita */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 17px;
  font-weight: 500;
`;

export const Table = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
  border-radius: 10px;
  margin-bottom: 12px;
`;

export const TableEntry = styled.div`
  border: 1px solid gray;
  padding: 5px;
  display: flex;
  flex-direction: column;
  &:nth-child(2) {
    border-left: 0px solid gray;
  }
`;

export const ContentSelect = styled.div`
  width: 100%;
  &:nth-child(3) {
    grid-column: span 2;
  }
  z-index: 1000;
`;

// Select
export const SelectContainer = styled.div`
  width: 100%;
  display: inline-block;
  position: relative;
`;

export const StyledSelect = styled.div`
  position: relative;
  display: inline-block;
  padding: 10px;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
  width: 100%;
  cursor: pointer;
`;

export const SelectedOption = styled.div`
  display: flex;
  align-items: center;
`;

interface IOptionList {
  open: any;
}

export const OptionList = styled.ul<IOptionList>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${({ open }) => (open ? "block" : "none")};
`;

export const OptionItem = styled.li`
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const IconSelect = styled.div`
  position: relative;
  top: -42px;
  right: 8px;
  display: flex;
  justify-content: end;
`;
