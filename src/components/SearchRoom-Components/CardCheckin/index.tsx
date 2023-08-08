import { useState } from "react";
import {
  Container,
  OptionItem,
  OptionList,
  Price,
  ReserveButton,
  SelectContainer,
  SelectedOption,
  StyledSelect,
  Table,
  TableEntry,
  ContentSelect,
  IconSelect,
  ContentContainer,
} from "./styles";

import { BsFillArrowDownCircleFill } from "react-icons/bs";

export function CardCheckin() {
  const [selectedValue, setSelectedValue] = useState<string | number>("");
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const options = [1, 2, 4, 6, 8, 10];

  const handleOptionClick = (option: any) => {
    setSelectedValue(option);
    setIsSelectOpen(false);
  };

  return (
    <ContentContainer>
      <Container>
        <Price>
          $150<span>noite</span>
        </Price>
        <Table>
          <TableEntry>
            <h5>Check-in</h5>
            <div>25/08/2023</div>
          </TableEntry>
          <TableEntry>
            <h5>Check-out</h5>
            <div>29/08/2023</div>
          </TableEntry>
          <ContentSelect>
            <SelectContainer>
              <StyledSelect onClick={() => setIsSelectOpen(!isSelectOpen)}>
                <SelectedOption>
                  {selectedValue
                    ? `${selectedValue} dia${selectedValue !== 1 ? "s" : ""}`
                    : "Selecione a duração"}
                </SelectedOption>
              </StyledSelect>
              <OptionList open={isSelectOpen}>
                {options.map((option) => (
                  <OptionItem
                    key={option}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option} dia{option !== 1 ? "s" : ""}
                  </OptionItem>
                ))}
              </OptionList>
            </SelectContainer>
          </ContentSelect>
        </Table>
        <IconSelect>
          <BsFillArrowDownCircleFill size={18.5} />
        </IconSelect>
        <ReserveButton>Reservar</ReserveButton>
      </Container>
    </ContentContainer>
  );
}
