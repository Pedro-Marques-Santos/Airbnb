import styled from "styled-components";

export const Container = styled.div`

    display: none;
    justify-content: space-between;
    margin-bottom: 10px;

    h1 {
        font-family: 'Mulish';
        font-size: 12px;
        font-weight: 700;
        line-height: 15px;
        letter-spacing: 0em;
        text-align: left;
    }

    div {
        cursor: pointer;
    }

    @media (max-width: 727px) {
        display: flex;
    }
`;