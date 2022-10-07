import { Container } from "./styles";

interface EditSearchProps {
    closeModalSearch: () => void;
}

export function EditSearch( { closeModalSearch } : EditSearchProps ) {
    return (
        <Container>
            <h1>Edit your search</h1>
            <div className="material-symbols-outlined" onClick={closeModalSearch}>
                close
            </div>
        </Container>
    );
}