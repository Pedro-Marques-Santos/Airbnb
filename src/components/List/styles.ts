import styled from "styled-components";

export const Container = styled.div`
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    @media (max-width: 805px) {
        padding-left: 10px;
        padding-right: 10px;
    }
`;

export const ItemMain = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 395px;
    min-height: 340px;
    margin-bottom: 49px;

    margin-right: 21px;

    :nth-child(3n) {
        margin-right: 0px;
    } 

    @media (max-width: 1280px) {
        margin-right: 0px;
        :nth-child(1n) {
            margin-right: 21px;
        }
    }

    @media (max-width: 805px) {
        :nth-child(1n) {
            margin-right: 0px;
        }
        margin-right: 0px;
    }
`