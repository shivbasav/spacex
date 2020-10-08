import { createGlobalStyle } from "styled-components";
import colors from "./color.scss";

const theme = { ...colors };

export default theme;

export const GlobalStyle = createGlobalStyle` 




  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background-color: #ffffff;
  }

  &&& {
    html.has-navbar-fixed-top,
    body.has-navbar-fixed-top {
      padding-top: 0;
    }
    .tabs li.is-active a {
    background: #f6f6f6;
     }
    .react-autosuggest__input {
      box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
      max-width: 100%;
      width: 100%;
      background-color: white;
      border-color: #dbdbdb;
      border-radius: 4px;
      color: #363636;
      -webkit-appearance: none;
      align-items: center;
      border: 1px solid transparent;
      border-radius: 4px;
      box-shadow: none;
      display: inline-flex;
      font-size: 1rem;
      height: 2.25em;
      justify-content: flex-start;
      line-height: 1.5;
      padding-bottom: calc(0.375em - 1px);
      padding-left: calc(0.625em - 1px);
      padding-right: calc(0.625em - 1px);
      padding-top: calc(0.375em - 1px);
      position: relative;
      vertical-align: top;
      :focus {
        border-radius: 4px;
      }
    }
    .react-autosuggest__container {
      position: relative;
    }

    .react-autosuggest__input--focused {
      outline: none;
    }

    .react-autosuggest__input--open {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .react-autosuggest__suggestions-container {
      display: none;
    }

    .react-autosuggest__suggestions-container--open {
      display: block;
      position: absolute;
      top: 40px;
      width: 100%;
      border: 1px solid #f6f6f6;
      max-height:20rem;
      overflow:scroll;
      background-color: #fff;
      font-weight: 300;
      font-size: 16px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1),
        0 0 0 1px rgba(10, 10, 10, 0.1);
      z-index: 2;
    }

    .react-autosuggest__suggestions-list {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    .react-autosuggest__suggestion {
      cursor: pointer;
      padding: 12px;
      border-bottom: 1px solid #f6f6f6 !important;
    }

    .react-autosuggest__suggestion--highlighted {
      background-color:#f6f6f6;
    }
    .react-datepicker__month {
      z-index: 9999;
    }
    /* .rc-time-picker-clear{
      display:none;
    } */
  }
`;
