/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css, unsafeCSS} from 'lit';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class CustomTable extends LitElement {
  static get styles() {
    return css`
      table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }
      
      td, th {
        border: 1px solid var(--border-color, #ddd);
        padding: 8px;
      }
      
      tr:nth-child(even){background-color: var(--nth-background-color, #f2f2f2);}
      
      tr:hover {background-color: var(--hover-background-color, #ddd);}
      
      th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: var(--header-background-color, #04AA6D);
        color: var(--header-text-color, white);
      }
    `;
  }

  static get properties() {
    return {
      rows: {type: Number},
      cols: {type: Number},
      headers: {type: Array},
      items: {type: Array},
      type: {type: String}
    };
  }

  constructor() {
    super();
    this.rows = 3;
    this.cols = 2;
    this.headers = [];
    this.items = [];
    this.type = '#04AA6D';
  }

  render() {
    return html`
      <table>
        <tr>${this.display_headers()}</tr>
        ${this.display_rows()}
      </table>
    `;
  }

  display_headers(){
    return this.headers.map(h =>
    html`<th>${h}</th>`)
  }

  display_cols(cols){
    return cols.map(c =>
      html`<td>${c}</td>`)
  }

  display_rows(){
    return this.items.map(r =>
      html`<tr>${this.display_cols(r)}</tr>`)
  }
}

window.customElements.define('custom-table', CustomTable);
