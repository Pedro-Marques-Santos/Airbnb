import styled from "styled-components";

export const GroupSearch = styled.form`

    width: 100%;
    height: 55px;
    box-shadow: 0px 1px 6px 0px #0000001A;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 650px) {
        flex-direction: column;
        height: 110px;
        box-shadow: 0px 1px 6px 0px #0000001A;
    }

`;

export const Location = styled.div`
    cursor: pointer;
    width: 100%;
    height: 55px;
    border-right: 1px solid var(--branco);
    display: flex;
    flex-direction: column;
    z-index: 1;
    :nth-child(3) {
        border-right: none;
    }

    @media (max-width: 650px) {
        border-right: none;
        border-radius: 16px;
        :nth-child(3) {
            display: none;
        }

        :nth-child(1) {
            border-bottom: 1px solid #F2F2F2;
            border-radius: 0px;
        }
    }
`

interface LocationBordaProps {
    isActive: boolean;
}

export const LocationBorda = styled.div<LocationBordaProps>`
    height: 100%;
    border-radius: 16px;
    border: ${ (props) => props.isActive ? '1px solid var(--legenda-foto)' : 'none'};
    padding-top: 12px;
    padding-left: 26px;

    @media (max-width: 650px) {
        border: none;
    }
`

export const LocationTag = styled.div`
    font-family: 'Mulish';
    font-size: 9px;
    font-weight: 800;
    line-height: 11px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 4px;
`

interface CityCountryProps {
    isActive: boolean;
}

export const CityCountry = styled.div<CityCountryProps>`
    font-family: 'Mulish';
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: ${ (props) => props.isActive ? 'var(--text-padrao)' : 'var(--add-search)' };
`

export const ContentSearch = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonSearch = styled.div`
    height: 48px;
    width: 126px;
    left: 1084px;
    top: 97px;
    border-radius: 16px;
    background: var(--button-color);
    box-shadow: 0px 1px 6px 0px #0000001A;
    cursor: pointer;

    div {
        display: flex;
        margin-top: 7px;
        margin-left: 10px;
    }

    h2 {
        font-family: 'Mulish';
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
        letter-spacing: 0em;
        display: flex;
        padding-top: 8px;
        color: var(--branco);
    }
`

export const Icon = styled.div`
    color: var(--branco);
    margin-right: 10px;
`

//small button search

export const SmallButtonSearch = styled.div`
    display: none;
    height: 48px;
    width: 126px;
    border-radius: 16px;
    background: var(--button-color);
    cursor: pointer;
    box-shadow: 0px 1px 6px 0px #0000001A;
    margin: 0 auto;
    margin-top: 100px;

    border: 1px solid red;

    div {
        display: flex;
        margin-top: 7px;
        margin-left: 10px;
    }

    h2 {
        font-family: 'Mulish';
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
        letter-spacing: 0em;
        display: flex;
        padding-top: 8px;
        color: var(--branco);
    }

    @media (max-width: 650px) {
        display: flex;
    }
`