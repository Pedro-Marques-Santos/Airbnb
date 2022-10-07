import { ContentList } from "../ContentList";
import { Container, ItemMain } from "./styles";

import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'

export function List() {
    return (
        <Container>
            <ItemMain>
                <ContentList img={img1} type='superhost' tagAv='4.40' leg='Stylist apartment in center of the city' legTitle='Entire apartment.2 beds' />
            </ItemMain>
            <ItemMain>
                <ContentList img={img2} type='commum' tagAv='4.25' leg='Cozy, peaceful and private room with...' legTitle='Private room'  />
            </ItemMain>
            <ItemMain>
                <ContentList img={img3} type='commum' tagAv='4.96' leg='Cozy, peaceful and private room with...' legTitle='Entire house'  />
            </ItemMain>
            <ItemMain>
                <ContentList img={img4} type='superhost' tagAv='4.85' leg='Stylist room in design district' legTitle='Entire apartment.2 beds'  />
            </ItemMain>
            <ItemMain>
                <ContentList img={img5} type='commum' tagAv='4.54' leg='Modern apartment close to nature' legTitle='Private room' />
            </ItemMain>
            <ItemMain>
                <ContentList img={img2} type='commum' tagAv='4.54' leg='Modern apartment close to nature' legTitle='Private room' />
            </ItemMain>
        </Container>
    );
}