import { ButtonSearch, CityCountry, ContentSearch, GroupSearch, Icon, Location, LocationBorda, LocationTag, SmallButtonSearch } from "./styles";
import Modal from 'react-modal';
import { GroupContentSearch } from "../GroupContentSearch";
import { EditSearch } from "../EditSearch";
import { useState } from "react";

interface ModalSearchPros {
    isOpen: boolean;
    closeModalSearch: () => void;
}

export function ModalSearch( { isOpen, closeModalSearch }: ModalSearchPros ) {

    const [ stateLocationOrGts, setStatesLocationOrGts ] = useState('location')

    return (
        <Modal
            isOpen={isOpen} onRequestClose={closeModalSearch}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            ariaHideApp={false}
            >
            <EditSearch closeModalSearch={closeModalSearch}/>
            <GroupSearch>
                <Location onClick={ () => setStatesLocationOrGts('location') }>
                    <LocationBorda isActive={stateLocationOrGts === 'location'}>
                        <LocationTag>LOCATION</LocationTag>
                        <CityCountry isActive={stateLocationOrGts === 'location'}>
                            Helsinki, Finland
                        </CityCountry>
                    </LocationBorda>
                </Location>
                <Location onClick={ () => setStatesLocationOrGts('guests') }>
                    <LocationBorda isActive={stateLocationOrGts === 'guests'}>
                        <LocationTag>GUESTS</LocationTag>
                        <CityCountry isActive={stateLocationOrGts === 'guests'}>4 guests</CityCountry>
                    </LocationBorda>
                </Location>
                <Location>
                    <ContentSearch>
                        <ButtonSearch>
                            <div>
                                <Icon className="material-symbols-outlined search">search</Icon>
                                <h2>Search</h2>
                            </div>
                        </ButtonSearch>
                    </ContentSearch>
                </Location>
            </GroupSearch>
            <GroupContentSearch isType={stateLocationOrGts} />
            <SmallButtonSearch>
                <div>
                    <Icon className="material-symbols-outlined search">search</Icon>
                    <h2>Search</h2>
                </div>
            </SmallButtonSearch>
        </Modal>
    );
}