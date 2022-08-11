import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CellsListAccountUi-styles.js';
import '@bbva-web-components/bbva-web-header-multistep/bbva-web-header-multistep.js';
import '@bbva-web-components/bbva-web-progress-multistep-bar/bbva-web-progress-multistep-bar.js';
import '@bbva-web-components/bbva-web-button-multistep-back/bbva-web-button-multistep-back.js';
import '@bbva-web-components/bbva-web-link/bbva-web-link.js';
import '@bbva-web-components/bbva-web-divider/bbva-web-divider.js';
import '@bbva-web-components/bbva-web-list-item-option/bbva-web-list-item-option.js';
import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default.js';
import '@bbva-web-components/bbva-web-amount/bbva-web-amount.js';



/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<cells-list-account-ui></cells-list-account-ui>
```

##styling-doc

@customElement cells-list-account-ui
*/
export class CellsListAccountUi extends LitElement {
  static get is() {
    return 'cells-list-account-ui';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('cells-list-account-ui-shared-styles')
    ];
  }


  _headerSection(){
    return html`
    <div class="header">
        <div class="zone">
          <bbva-web-header-multistep block-title="Transfiere y recibe" id="header-title" closeLabel="Salir">
          </bbva-web-header-multistep>
          <bbva-web-progress-multistep-bar current="1" max="5"></bbva-web-progress-multistep-bar>
          <section>
            <bbva-web-button-multistep-back text="Anterior"></bbva-web-button-multistep-back>
          </section>
        </div>
      </div>
    `
  }

  _listSection(){
    return html`
      <div class="list-section">
        <p>1 de 4</p>
        <h2>Selecciona la cuenta desde donde quieres transferir el dinero</h2>
        <br>
        <table>
          <tr>
            <td id="list-title">Cuentas</td>
            <td><bbva-web-link href="#">Ver todas</bbva-web-link></td>
          </tr>
        </table>
        <br>
        <ul>
          <li>
            <bbva-web-list-item-option title-option="Cuenta de ahorros" value="$300.000" type="radio" description="*1234" description3="Saldo disponible">
              <bbva-web-amount amount="300.000" currency-code="USD" local-currency="USD" slot="amount" variant="dark"></bbva-web-amount>
            </bbva-web-list-item-option>
            <bbva-web-divider id="divider"></bbva-web-divider>
          </li>
          <li>
            <bbva-web-list-item-option title-option="Cuenta de Ahorros tradicional" value="$650.000" type="radio" description="*3456" description3="Saldo disponible">
              <bbva-web-amount amount="650.000" currency-code="USD" local-currency="USD" slot="amount" variant="dark"></bbva-web-amount>
            </bbva-web-list-item-option>
            <bbva-web-divider id="divider"></bbva-web-divider>
          </li>
          <li>
            <bbva-web-list-item-option title-option="Cuenta de ahorros" value="$800.000" type="radio" description="*1234" description3="Saldo disponible">
              <bbva-web-amount amount="800.000" currency-code="USD" local-currency="USD" slot="amount" variant="dark"></bbva-web-amount>
            </bbva-web-list-item-option>
          </li>
        </ul>
      </div>
    `
  }


  // Define a template
  render() {
    return html`
      ${this._headerSection()}
      <div class="main-container">
        ${this._listSection()}
      </div>
    `;
  }
}
