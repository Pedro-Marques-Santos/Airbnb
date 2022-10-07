import styled from "styled-components";

export const BordaContainer = styled.div`
    font-family: 'Mulish';
    font-weight: 400;
    font-size: 14px;
    border: 1px solid var(--background);
    width: 297px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    box-shadow: 0px 1px 6px 0px #0000001A;

    cursor: pointer;

    div {
        height: 100%;
        display: flex;
        align-items: center;
        padding: 7px;
    }

    .location {
        border-right: 1px solid #F2F2F2
    }

    .guests {
        border-right: 1px solid #F2F2F2;
        color: var(--add-search);
    }

    .search {
        margin-left: 9px;
        color: var(--logo);
    }
;
`