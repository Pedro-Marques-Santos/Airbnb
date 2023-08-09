import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #FFFFFF;
        --logo: #EB5757;
        --text-padrao: #333333;
        --add-search: #BDBDBD;
        --total-stays: #4F4F4F;
        --legenda-foto: #828282;
        --button-foto: #4F4F4F;
        --branco: #F2F2F2;
        --button-color: #EB5757E5;
    }

    // font-size: Padrão 16px
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--background);
    }

    button {
        cursor: pointer;
    }
    
    body {
        font-family: 'Montserrat';
        font-weight: 500;
    }

    
    .react-modal-overlay {
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
    } 

    .react-modal-content {
        width: 100%;
        height: 460px;
        background: var(--background);
        padding: 96px 93px;
        position: relative;
        border-radius: 4px;
        outline: none;

        @media (max-width: 727px) {
            padding: 16px 16px;
            height: 628px;
        }

    }
    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
    }

    .logo {
      cursor: pointer;
      @media (max-width: 580px) {
    margin-bottom: 20px;
  }
    }
`;
