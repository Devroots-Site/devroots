Http Server mit Node.js
===============================

In diesem Abschnitt wird erklärt, wie man einen Http Server mit Node.js erstellt und verwendet. Es wird auf die Grundlagen eingegangen und gezeigt.


Voraussetzungen Node.js 📦
--------------------------------------

- **Node.js installiert:** Node.js sollte auf Ihrem System installiert sein.
- **Grundkenntnisse in JavaScript:** Grundlegende Kenntnisse in JavaScript sind erforderlich.
- **Texteditor oder IDE:** Ein Texteditor oder eine integrierte Entwicklungsumgebung (IDE) zum Schreiben von Code.

Schritt 1: Http Server erstellen 🔗
--------------------------------------

Der erste Schritt besteht darin, einen einfachen Http Server mit Node.js zu erstellen. Verwenden Sie den folgenden Code, um einen Server zu erstellen, der auf Port 3000 läuft.

.. code-block:: javascript
    
    const http = require('http'); // Modul 'http' importieren
    // oder import http from 'http'; // ES6-Modul

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    });

    server.listen(3000, () => {
        console.log('Server läuft unter http://localhost:3000/');
    });

**Erläuterung:**

- `http.createServer()`: Erstellt einen Http Server, der auf eingehende Anfragen reagiert.
- `res.statusCode = 200`: Setzt den Statuscode der Antwort auf 200 (Erfolg).
- `res.setHeader()`: Setzt den Header der Antwort auf 'Content-Type: text/plain'.
- `res.end()`: Beendet die Antwort und sendet 'Hello World' zurück.
- `server.listen()`: Startet den Server auf Port 3000 und gibt eine Erfolgsmeldung aus.

Mögliche Header sind:
- `text/plain`
- `text/html`
- `application/json`
- `image/jpeg`
- `image/png`
- `audio/mpeg`
- `video/mp4`

Schritt 2: Server starten 🚀
------------------------------------------

Führen Sie den Node.js-Code aus (node datei.js), um den Http Server zu starten. Öffnen Sie Ihren Webbrowser und navigieren Sie zu `http://localhost:3000/`, um die Ausgabe 'Hello World' zu sehen.

.. note::
    
    Der Server läuft lokal auf Ihrem Computer und ist nur über `http://localhost:3000/` erreich

Schritt 3: Anfragebehandlung 🔄
------------------------------------------

Der Server reagiert auf eingehende Anfragen und sendet eine Antwort zurück. Sie können den Server anpassen, um verschiedene Arten von Anfragen zu verarbeiten und unterschiedliche Antworten zu senden.

.. code-block:: javascript

    const server = http.createServer((req, res) => {
        if (req.url === '/') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Homepage\n');
        } else if (req.url === '/about') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('About Us\n');
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Not Found\n');
        }
    });

**Erläuterung:**

- Der Server überprüft die URL der Anfrage und sendet je nach URL unterschiedliche Antworten zurück.
- Wenn die URL `/` ist, wird 'Homepage' zurückgegeben.
- Wenn die URL `/about` ist, wird 'About Us' zurückgegeben.
- Andernfalls wird 'Not Found' zurückgegeben.

Schritt 4: Server beenden 🛑

Um den Server zu beenden, drücken Sie `Strg + C` in der Befehlszeile, in der der Server ausgeführt wird. Dadurch wird der Serverprozess beendet und der Port freigegeben.

**Zusammenfassung:**

- Node.js ermöglicht die Erstellung von Http Servern mit dem integrierten Modul 'http'.
- Der Server kann auf eingehende Anfragen reagieren und entsprechende Antworten senden.
- Durch Anpassen des Servercodes können verschiedene Endpunkte und Funktionen implementiert werden.

