import { Container, Guests, GuestsLi, IconLocation, Location, LocationLi, LocationLink, Qtd, QtdGuests } from "./styles";

interface GroupContentSearchProps {
    isType: string;
}

export function GroupContentSearch(  { isType }: GroupContentSearchProps ) {

    console.log(isType)
    return(
        <Container>

            <Location isType={isType}>
                <LocationLi>
                    <IconLocation className="material-symbols-outlined">location_on</IconLocation>
                    <LocationLink>Helsinki, Finland</LocationLink>
                </LocationLi>
                <LocationLi>
                    <IconLocation className="material-symbols-outlined">location_on</IconLocation>
                    <LocationLink>Turku, Finland</LocationLink>
                </LocationLi>
                <LocationLi>
                    <IconLocation className="material-symbols-outlined">location_on</IconLocation>
                    <LocationLink>Oulu, Finland</LocationLink>
                </LocationLi>
                <LocationLi>
                    <IconLocation className="material-symbols-outlined">location_on</IconLocation>
                    <LocationLink>Vaasa, Finland</LocationLink>
                </LocationLi>
            </Location>

            <Guests isType={isType}>
                <GuestsLi>
                    <h1>Adults</h1>
                    <h2>Ages 13 or above</h2>
                    <QtdGuests>
                        <div className="material-symbols-outlined">remove</div>
                        <Qtd>0</Qtd>
                        <div className="material-symbols-outlined">add</div>
                    </QtdGuests>
                </GuestsLi>
                <GuestsLi>
                    <h1>Children</h1>
                    <h2>Ages 2-12</h2>
                    <QtdGuests>
                        <div className="material-symbols-outlined">remove</div>
                        <Qtd>0</Qtd>
                        <div className="material-symbols-outlined">add</div>
                    </QtdGuests>
                </GuestsLi>
            </Guests>
        </Container>
    );
}