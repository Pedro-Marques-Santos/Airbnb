import styled from "styled-components";

export const Container = styled.div`
    max-width: 1228.5px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
    align-items: center;

    @media (max-width: 1255px) {
        padding-left: 10px;
        padding-right: 10px;
    }

    @media (max-width: 580px) {
        margin-top: 22px;
        width: 100%;
        flex-direction: column;

        .logo {
            width: 100%;
            margin-bottom: 39px;
        }
    } 
`