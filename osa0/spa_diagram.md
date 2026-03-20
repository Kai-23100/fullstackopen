# Single Page App Diagram

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Opens SPA page

    Browser->>Server: GET /spa
    Server-->>Browser: HTML file

    Browser->>Server: GET main.css
    Server-->>Browser: CSS file

    Browser->>Server: GET spa.js
    Server-->>Browser: JavaScript file

    Note right of Browser: Browser executes JavaScript

    Browser->>Server: GET /data.json
    Server-->>Browser: JSON data (notes)

    Note right of Browser: JavaScript renders notes dynamically

    Browser->>User: Displays notes without reloading page
