Erstellen des REST-API-Endpunkts / Servers 👩‍💻
===========================================================

Diese Anleitung zeigt dir Schritt für Schritt, wie du einen REST-API-Server mit FastAPI und Uvicorn erstellst, der typische HTTP-Methoden wie GET, POST, PUT und DELETE implementiert.

Voraussetzungen
----------------

- **Python**: Stelle sicher, dass Python 3.7 oder höher installiert ist.
- **FastAPI und Uvicorn**: Installiere die Bibliotheken mit folgendem Befehl:

  .. code-block:: bash

     pip install fastapi uvicorn
     
Schritt 1: Projektstruktur erstellen 📂
----------------------------------------

Erstelle die folgende Ordnerstruktur für dein Projekt:

.. code-block:: text

   my_project/
   ├── main.py  # Hauptdatei des Projekts

Schritt 2: FastAPI-Anwendung einrichten 🚀
-------------------------------------------

Erstelle eine Datei namens `main.py` und füge den folgenden Basiscode hinzu:

.. code-block:: python

   from fastapi import FastAPI

   app = FastAPI()

   @app.get("/")
   async def root():
       return {"message": "Willkommen bei deinem FastAPI-Server!"}

Schritt 3: Endpunkte für CRUD-Operationen erstellen 🛠️
-------------------------------------------------------

Füge die CRUD-Endpunkte hinzu: 

- **GET**: Daten abrufen
- **POST**: Neue Daten hinzufügen
- **PUT**: Vorhandene Daten aktualisieren
- **DELETE**: Daten löschen

Aktualisiere `main.py` wie folgt:

.. code-block:: python

   from fastapi import FastAPI

   app = FastAPI()

   # Fiktive Datenbank
   items = {
       1: {"name": "Item 1", "description": "Dies ist das erste Item."},
       2: {"name": "Item 2", "description": "Dies ist das zweite Item."}
   }

   # GET: Alle Items abrufen
   @app.get("/items")
   async def get_items():
       return items

   # GET: Ein einzelnes Item abrufen
   @app.get("/items/{item_id}")
   async def get_item(item_id: int):
       return items.get(item_id, {"error": "Item nicht gefunden"})

   # POST: Ein neues Item hinzufügen
   @app.post("/items")
   async def create_item(item_id: int, name: str, description: str):
       if item_id in items:
           return {"error": "Item mit dieser ID existiert bereits."}
       items[item_id] = {"name": name, "description": description}
       return items[item_id]

   # PUT: Ein Item aktualisieren
   @app.put("/items/{item_id}")
   async def update_item(item_id: int, name: str, description: str):
       if item_id not in items:
           return {"error": "Item nicht gefunden."}
       items[item_id]["name"] = name
       items[item_id]["description"] = description
       return items[item_id]

   # DELETE: Ein Item löschen
   @app.delete("/items/{item_id}")
   async def delete_item(item_id: int):
       if item_id not in items:
           return {"error": "Item nicht gefunden."}
       deleted_item = items.pop(item_id)
       return {"deleted": deleted_item}

Schritt 4: Server starten 🚀
-----------------------------


Starte den Server mit dem folgenden Befehl:

.. code-block:: bash

   uvicorn main:app --reload

- **main**: Der Name der Python-Datei ohne `.py`.
- **app**: Die FastAPI-Anwendung, die in der Datei definiert ist.
- **--reload**: Aktiviert automatisches Neuladen bei Codeänderungen.

Der Server wird unter `http://127.0.0.1:8000` gestartet.

Schritt 5: Endpunkte testen 🧪
---------------------------------

Du kannst die API mit Tools wie **Postman**, **cURL** oder direkt im Browser testen. 
FastAPI bietet auch eine automatisch generierte Dokumentation unter diesen URLs:

- Swagger UI: `http://127.0.0.1:8000/docs`
- ReDoc: `http://127.0.0.1:8000/redoc`

Beispiele für cURL-Befehle:

- **GET** alle Items:

  .. code-block:: bash

     curl -X GET "http://127.0.0.1:8000/items"

- **POST** ein neues Item:

  .. code-block:: bash

     curl -X POST "http://127.0.0.1:8000/items" -d "item_id=3&name=Item3&description=Neues Item"

- **PUT** ein Item aktualisieren:

  .. code-block:: bash

     curl -X PUT "http://127.0.0.1:8000/items/3" -d "name=Aktualisiertes Item&description=Geänderte Beschreibung"

- **DELETE** ein Item:

  .. code-block:: bash

     curl -X DELETE "http://127.0.0.1:8000/items/3"

Fazit 🤓
---------

Du hast erfolgreich einen FastAPI-Server mit CRUD-Endpunkten erstellt und gestartet. 
Dieser Server kann leicht erweitert werden, um komplexere Anwendungsfälle zu unterstützen.
