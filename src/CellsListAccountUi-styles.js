/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.header #header-title {
  background-color: #072146;
}
.header section {
  text-align: center;
}

.main-container {
  padding: 5px;
}

@media screen and (min-width: 800px) {
  .main-container {
    width: 100%;
    padding: 10px 100px;
  }
  .main-container .list-section {
    width: 60%;
  }
  .main-container .list-section ul li {
    list-style: none;
  }
  .main-container .list-section table {
    padding: 5x;
    width: 100%;
  }
  .main-container .list-section table tr td {
    font-style: italic;
    text-align: right;
  }
  .main-container .list-section table tr td:first-child {
    text-align: left;
    font-weight: bold;
  }
}
`;