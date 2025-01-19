Cookies erstellen und im Browser speichern 🍪
==============================================

Cookies können in FastAPI verwendet werden, um Daten zwischen dem Server und dem Browser zu speichern, 
z. B. für Sitzungen oder Benutzereinstellungen.

Schritt 1: Cookie setzen 🤳
----------------------------

Verwende die FastAPI-Funktion `Response.set_cookie`, um einen Cookie zu setzen.

.. code-block:: python

   from fastapi import FastAPI, Response

   app = FastAPI()

   @app.get("/set-cookie")
   async def set_cookie(response: Response):
       response.set_cookie(key="user_id", value="12345", httponly=True, max_age=3600)
       return {"message": "Cookie wurde gesetzt!"}

- **key**: Der Name des Cookies (z. B. `user_id`).
- **value**: Der Wert des Cookies (z. B. `12345`).
- **httponly**: Verhindert Zugriff auf den Cookie durch JavaScript (empfohlen für Sicherheit).
- **max_age**: Gültigkeitsdauer des Cookies in Sekunden (z. B. 3600 für eine Stunde).

Schritt 2: Cookie im Browser überprüfen 🕵️
---------------------------------------------

1. Starte den FastAPI-Server:

   .. code-block:: bash

      uvicorn main:app --reload

2. Rufe den Endpunkt im Browser oder mit einem Tool wie Postman auf:

   .. code-block:: text

      http://127.0.0.1:8000/set-cookie

3. Öffne die Entwicklertools deines Browsers (F12) und gehe zum Tab **Application** > **Storage** > **Cookies**, 
um den gesetzten Cookie zu sehen.

Schritt 3: Cookie lesen 📖
-----------------------------

Verwende `Request.cookies`, um Cookies im Servercode auszulesen.

.. code-block:: python

   from fastapi import FastAPI, Request

   app = FastAPI()

   @app.get("/get-cookie")
   async def get_cookie(request: Request):
       user_id = request.cookies.get("user_id")
       if user_id:
           return {"user_id": user_id}
       return {"error": "Cookie nicht gefunden"}

Fazit
---------

Cookies sind eine einfache Möglichkeit, Daten sicher zwischen Server und Client auszutauschen. 
Mit FastAPI kannst du sie leicht setzen, auslesen und verwalten.
