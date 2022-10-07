import { BordaContainer } from './styles'

interface SearchProps {
    openModalSearch: () => void;
    closeModalSearch: () => void;
}

export function Search( { openModalSearch }: SearchProps ) {
    return(
        <BordaContainer onClick={openModalSearch}>
            <div className='location'>Helsinki, Finland</div>
            <div className='guests'>Add guests</div>
            <div className="material-symbols-outlined search">
                search
            </div>
        </BordaContainer>
    );
}