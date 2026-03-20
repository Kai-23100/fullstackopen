# SPA New Note Creation Diagram

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Writes note in input field
    User->>Browser: Clicks Save button

    Note right of Browser: JavaScript handles form submit and prevents page reload

    Browser->>Server: POST /new_note (JSON data)

    Note right of Server: Server processes and saves the note

    Server-->>Browser: JSON response (saved note)

    Note right of Browser: JavaScript updates notes list dynamically

    Browser->>User: New note appears instantly (no reload)
