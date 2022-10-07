import { List } from '../List';
import { Container, Stays } from './styles'

export function ListHause() {
    return (
        <Container>
            <Stays>
                <h1>Stays in Finland</h1>
                <div>12+ Stays</div>
            </Stays>
            <List />
        </Container>
    );
}