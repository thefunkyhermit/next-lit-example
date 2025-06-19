import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('hello-world')
export class HelloWorld extends LitElement {
  @property({ type: String })
  name = 'World';

  static styles = css`
    :host {
      display: block;
      padding: 20px;
      border: 2px solid #3498db;
      border-radius: 8px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      font-family: 'Arial', sans-serif;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    :host(:hover) {
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    .greeting {
      font-size: 2rem;
      font-weight: bold;
      margin: 0;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .name {
      color: #f39c12;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    // Listen for the update-hello-world event
    window.addEventListener('update-hello-world', this.handleUpdateEvent.bind(this) as EventListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // Clean up event listener
    window.removeEventListener('update-hello-world', this.handleUpdateEvent.bind(this) as EventListener);
  }

  private handleUpdateEvent(event: Event) {
    const customEvent = event as CustomEvent;
    if (customEvent.detail && customEvent.detail.name) {
      this.name = customEvent.detail.name;
    }
  }

  render() {
    return html`
      <div class="greeting">
        Hello <span class="name">${this.name}</span>!
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hello-world': HelloWorld;
  }
} 