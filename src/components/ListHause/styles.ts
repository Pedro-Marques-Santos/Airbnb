import styled from "styled-components";

export const Container = styled.div`
    max-width: 1228.5px;
    margin: 0 auto;
    margin-top: 67px;
`;

export const Stays = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 1255px) {
        padding-left: 10px;
        padding-right: 10px;
    }

    h1 {
        font-size: 24px;
        font-family: 'Montserrat';
        font-weight: 700;
    }

    div {
        display: flex;
        align-items: center;
        color: var(--total-stays);
    }
`;