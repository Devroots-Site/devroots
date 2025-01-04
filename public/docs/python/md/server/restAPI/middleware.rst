Middleware-Konfiguration
========================

Middleware in FastAPI erlaubt es, benutzerdefinierte Logik für eingehende und ausgehende Anfragen zu implementieren. 
Sie kann verwendet werden, um Aufgaben wie Authentifizierung, Logging, oder das Hinzufügen von Headern zu übernehmen.

Erstellen und Konfigurieren einer Middleware
--------------------------------------------

1. **Erstelle eine Middleware-Klasse oder verwende vorhandene.**

2. **Füge die Middleware zur FastAPI-Anwendung hinzu.**

Beispiel für eine benutzerdefinierte Middleware:

.. code-block:: python

   from fastapi import FastAPI, Request
   from starlette.middleware.base import BaseHTTPMiddleware

   app = FastAPI()

   # Benutzerdefinierte Middleware
   class CustomMiddleware(BaseHTTPMiddleware):
       async def dispatch(self, request: Request, call_next):
           print("Eingehende Anfrage:", request.url)
           response = await call_next(request)
           response.headers["X-Custom-Header"] = "Mein benutzerdefinierter Wert"
           return response

   # Middleware zur Anwendung hinzufügen
   app.add_middleware(CustomMiddleware)

Eingebaute Middleware verwenden
--------------------------------

FastAPI bietet integrierte Middleware-Optionen, wie zum Beispiel für CORS (Cross-Origin Resource Sharing):

.. code-block:: python

   from fastapi.middleware.cors import CORSMiddleware

   app = FastAPI()

   app.add_middleware(
       CORSMiddleware,
       allow_origins=["*"],  # Erlaubte Ursprünge (z. B. "http://example.com")
       allow_credentials=True,
       allow_methods=["*"],  # Erlaubte HTTP-Methoden
       allow_headers=["*"],  # Erlaubte Header
   )

Fazit
-----

Middleware ist ein leistungsfähiges Werkzeug, um wiederkehrende Aufgaben zu automatisieren und Anfragen/Antworten 
anzupassen. FastAPI erlaubt sowohl die Verwendung von benutzerdefinierten als auch eingebauten Middleware-Komponenten.
