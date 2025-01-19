Express Server 🚀
===========================

Ein Express-Server ist ein Webserver, der mit dem Node.js-Framework Express erstellt wurde. Express ist ein beliebtes Framework für die Entwicklung von Webanwendungen und APIs mit Node.js. 
Im gegensatz zu einen normalen Http-Server bietet Express viele Funktionen und Erweiterungen, die die Entwicklung von Webanwendungen erleichtern.

1. Installieren von Express
----------------------------------

Um einen Express-Server zu erstellen, müssen Sie das Express-Paket installieren. Führen Sie den folgenden Befehl aus, um Express in Ihrem Projekt zu installieren:

.. code-block:: bash

    npm install express

2. Express-Server erstellen
----------------------------------

Der folgende Code erstellt einen einfachen Express-Server, der auf Port 3000 läuft:

.. code-block:: javascript

    const express = require('express');
    // oder import express from 'express'; // ES6-Modul
    const app = express();
    const port = 3000;

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.listen(port, () => {
        console.log(`Express-Server läuft unter http://localhost:${port}`);
    });

**Erläuterung:**

- `app.get()`: Definiert eine Route für GET-Anfragen auf dem angegebenen Pfad ('/').
- `res.send()`: Sendet die Antwort 'Hello World!' zurück.
- `app.listen()`: Startet den Server auf Port 3000 und gibt eine Erfolgsmeldung aus.

3. Server starten 🚀
----------------------------------

Führen Sie den Node.js-Code aus (node datei.js), um den Express-Server zu starten. Öffnen Sie Ihren Webbrowser und navigieren Sie zu `http://localhost:3000/`, um die Ausgabe 'Hello World!' zu sehen.

.. note::

    Der Server läuft lokal auf Ihrem Computer und ist nur über `http://localhost:3000/` erreichbar.

4. Routen und Middleware
----------------------------------

Express bietet viele Funktionen, um Routen und Middleware zu definieren, die die Anfrage- und Antwortobjekte manipulieren. Hier sind einige Beispiele:

- Routen: Definieren Sie verschiedene Pfade und Methoden für Ihre Anwendung.
- Middleware: Fügen Sie Funktionen hinzu, die vor oder nach der Verarbeitung von Anfragen ausgeführt werden.

.. code-block:: javascript

    // Beispiel für eine Route
    app.get('/about', (req, res) => {
        res.send('Über uns');
    });

    // Beispiel für Middleware
    app.use((req, res, next) => {
        console.log('Anfrage empfangen');
        next();
    });

5. Express-Anwendungen
----------------------------------

Express kann für die Entwicklung von Webanwendungen, APIs und Single-Page-Anwendungen verwendet werden. Hier sind einige Beispiele für Express-Anwendungen:

- Webanwendung: Erstellen Sie eine dynamische Website mit Express und einem Template-Engine wie EJS oder Pug.
- API: Entwickeln Sie eine RESTful-API mit Express und MongoDB für die Datenbank.
- Single-Page-Anwendung: Erstellen Sie eine SPA mit Express als Backend und einem Frontend-Framework wie React oder Angular.

Express bietet viele Funktionen und Erweiterungen, die die Entwicklung von Webanwendungen erleicht


