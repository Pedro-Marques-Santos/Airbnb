import { AvaliationCommum, IconAv, ImgMain, Legenda1Commum, Legenda2Commum, TagAvaliation, LegendCommum, AvaliationSuperHost, Legend1SuperHost, ButtonSuperHost, LegendaTitleSuperHost, Legenda2SuperHost } from './styles'

interface ContentListProps {
    img?: string;
    type?: string;
    tagAv?: string;
    leg?: string;
    legTitle?: string;
}

export function ContentList({ img, type, tagAv, leg, legTitle }: ContentListProps) {

    if (type === 'superhost') {
        return (
            <>
                <ImgMain>
                    <img src={img} alt="" />
                </ImgMain>
                <Legend1SuperHost>
                    <div>
                        <ButtonSuperHost>
                            SUPER HOST
                        </ButtonSuperHost>
                        <LegendaTitleSuperHost>
                            {legTitle}
                        </LegendaTitleSuperHost>
                    </div>
                    <AvaliationSuperHost>
                        <IconAv className="material-symbols-outlined">
                            grade
                        </IconAv>
                        <TagAvaliation>{tagAv}</TagAvaliation>
                    </AvaliationSuperHost>
                </Legend1SuperHost>
                <Legenda2SuperHost>{leg}</Legenda2SuperHost>
            </>
        );
    } else {
        return (
            <div>
                <ImgMain>
                    <img src={img} alt="" />
                </ImgMain>
                <Legenda1Commum>
                    <LegendCommum>{legTitle}</LegendCommum>
                    <AvaliationCommum>
                        <IconAv className="material-symbols-outlined">
                            grade
                        </IconAv>
                        <TagAvaliation>{tagAv}</TagAvaliation>
                    </AvaliationCommum>
                </Legenda1Commum>
                <Legenda2Commum>
                    {leg}
                </Legenda2Commum>
            </div>
        );
    }
}