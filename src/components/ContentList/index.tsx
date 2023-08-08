import {
  AvaliationCommum,
  IconAv,
  ImgMain,
  Legenda1Commum,
  Legenda2Commum,
  TagAvaliation,
  LegendCommum,
  AvaliationSuperHost,
  Legend1SuperHost,
  ButtonSuperHost,
  LegendaTitleSuperHost,
  Legenda2SuperHost,
  Container,
  Icon,
} from "./styles";

interface ContentListProps {
  img?: string;
  type?: string;
  tagAv?: string;
  leg?: string;
  legTitle?: string;
}

export function ContentList({
  img,
  type,
  tagAv,
  leg,
  legTitle,
}: ContentListProps) {
  if (type === "superhost") {
    return (
      <Container>
        <ImgMain>
          <img src={img} alt="" />
        </ImgMain>
        <Legend1SuperHost>
          <div>
            <ButtonSuperHost>SUPER HOST</ButtonSuperHost>
            <LegendaTitleSuperHost>{legTitle}</LegendaTitleSuperHost>
          </div>
          <AvaliationSuperHost>
            <Icon>
              <IconAv className="material-symbols-outlined">grade</IconAv>
            </Icon>
            <TagAvaliation>{tagAv}</TagAvaliation>
          </AvaliationSuperHost>
        </Legend1SuperHost>
        <Legenda2SuperHost>{leg}</Legenda2SuperHost>
      </Container>
    );
  } else {
    return (
      <Container>
        <ImgMain>
          <img src={img} alt="" />
        </ImgMain>
        <Legenda1Commum>
          <LegendCommum>{legTitle}</LegendCommum>
          <AvaliationCommum>
            <Icon>
              <IconAv className="material-symbols-outlined">grade</IconAv>
            </Icon>
            <TagAvaliation>{tagAv}</TagAvaliation>
          </AvaliationCommum>
        </Legenda1Commum>
        <Legenda2Commum>{leg}</Legenda2Commum>
      </Container>
    );
  }
}
