# New Note Creation Diagram

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Types note in text field
    User->>Browser: Clicks Save button

    Note right of Browser: Browser captures form submit event

    Browser->>Server: POST /new_note (note data)

    Note right of Server: Server processes request and saves note

    Server-->>Browser: Response (redirect or JSON)

    alt Page reload
        Browser->>Server: GET /notes
        Server-->>Browser: Updated HTML
        Browser->>User: Displays updated notes
    else SPA behavior
        Browser->>Browser: Updates UI dynamically
        Browser->>User: Shows new note instantly
    end
