Info zu FastAPI & Uvicorn 🦄
=================================

In diesem Bereich geht es um REST-APIs und serverseitige Anwendungen. 
Dabei liegt der Fokus auf der Verwendung des Webframeworks **FastAPI** und des ASGI-Servers **Uvicorn**, 
die gemeinsam leistungsfähige und moderne Server-Anwendungen ermöglichen.

FastAPI ⚡
-----------

FastAPI ist ein modernes Webframework für Python, das speziell für den schnellen Aufbau von APIs entwickelt wurde. 
Es basiert auf **Starlette** (einem asynchronen Webframework) und **Pydantic** (für Datenvalidierung) und bietet eine 
intuitive und performante Lösung für API-Entwicklung.


**Hauptmerkmale von FastAPI:**

- **Automatische Dokumentation**: OpenAPI (Swagger UI, ReDoc) wird automatisch generiert.
- **Asynchrone Programmierung**: Unterstützung für `async`/`await`, ideal für parallele Anfragen.
- **Eingebaute Validierung**: Dank Pydantic werden Eingaben und Ausgaben automatisch validiert und serialisiert.
- **Hohe Performance**: FastAPI ist eines der schnellsten Frameworks für Python, vergleichbar mit Node.js-Frameworks.
- **Typensicherheit**: Durch die Nutzung von Python-Typannotation ist FastAPI sicher und leicht zu debuggen.
- **Einfacher Einstieg**: Ideal für Anfänger, bietet aber genug Flexibilität für komplexe Anwendungen.

**Anwendungsfälle von FastAPI:**

- **REST-APIs**: Ideal für die Implementierung von CRUD-Operationen, Benutzerverwaltung, Datenbankanbindungen usw.
- **WebSocket-Server**: Ermöglicht die Echtzeitkommunikation für Chat-Apps oder Dashboards.
- **Backend für Machine-Learning-Modelle**: APIs zur Bereitstellung von KI-Modellen oder Datenanalyse.
- **Ereignisbasierte Anwendungen**: Microservices und andere Event-getriebene Systeme.
- **Webhooks**: Integration mit externen Diensten wie Payment-Gateways oder GitHub.

Uvicorn
-------

**Uvicorn** ist ein leichter und schneller ASGI-Server (Asynchronous Server Gateway Interface). 
Er dient als Server, der FastAPI-Apps ausführt und HTTP-/WebSocket-Anfragen verarbeitet. 


**Hauptmerkmale von Uvicorn:**

- **ASGI-Unterstützung**: Vollständig kompatibel mit asynchronen Python-Frameworks.
- **Hohe Geschwindigkeit**: Minimalistisch und effizient, perfekt für Echtzeitanwendungen.
- **WebSocket-Unterstützung**: Ermöglicht bidirektionale Kommunikation für Echtzeitdienste.
- **Hot Reloading**: Perfekt für Entwicklungsumgebungen, Änderungen werden sofort wirksam.
- **Flexibilität**: Kann sowohl einfache APIs als auch komplexe Anwendungen hosten.

**Anwendungsfälle von Uvicorn:**

- **Hosting von FastAPI-Apps**: Startet FastAPI-Anwendungen und stellt sie bereit.
- **WebSocket-Server**: Unterstützung für Echtzeitprotokolle.
- **Streaming-Dienste**: Verarbeitung von Video-, Audio- oder Datenströmen.
- **Microservices**: Ideal für modulare, serviceorientierte Architekturen.

Installation 🛠️
------------------

Die Installation von FastAPI und Uvicorn ist einfach und erfordert nur wenige Schritte.

1. Stelle sicher, dass Python 3.7 oder höher installiert ist.
2. Führe folgenden Befehl aus, um beide Pakete zu installieren:

   .. code-block:: bash

      pip install fastapi uvicorn

3. Optional: Verwende virtuelle Umgebungen, um deine Projekte sauber und getrennt zu halten.

Zusammenspiel von FastAPI und Uvicorn 🙏
------------------------------------------

FastAPI und Uvicorn arbeiten nahtlos zusammen:

- **FastAPI**: Definiert die Logik, Struktur und Endpunkte der API.
- **Uvicorn**: Hostet die Anwendung und verarbeitet die HTTP-/WebSocket-Anfragen.

Typischer Workflow:

- Die API wird in FastAPI definiert (z. B. `app = FastAPI()`).
- Uvicorn startet die Anwendung und bietet sie unter einer bestimmten Adresse an:

  .. code-block:: bash

     uvicorn main:app --reload

  - `main`: Der Name der Python-Datei.
  - `app`: Die FastAPI-Anwendung.
  - `--reload`: Aktiviert automatisches Neuladen bei Codeänderungen.

Vergleich: FastAPI und Uvicorn ⚖️
----------------------------------

.. list-table:: Vergleich zwischen FastAPI und Uvicorn
   :header-rows: 1
   :widths: 25 25 50

   * - **Merkmal**
     - **FastAPI**
     - **Uvicorn**
   * - Rolle
     - Webframework
     - ASGI-Server
   * - Aufgabe
     - Definiert APIs und Logik
     - Führt die Anwendung aus
   * - Technologie
     - Pydantic, Starlette
     - ASGI, HTTP/WebSockets
   * - Verwendung
     - API-Entwicklung
     - Bereitstellung der App

Weitere Einsatzmöglichkeiten 🚀
--------------------------------

**FastAPI** und **Uvicorn** können für viele Anwendungsfälle außerhalb von klassischen REST-APIs eingesetzt werden:

- **GraphQL-APIs**: Kombiniert mit GraphQL-Frameworks wie Ariadne oder Strawberry.
- **Streaming-Anwendungen**: Video-/Audio-Streams oder Live-Datenfeeds.
- **Microservices**: Hosting kleiner, isolierter Dienste.
- **Protokollübergreifende Server**: Verarbeitung von HTTP, WebSocket oder anderen Protokollen (z. B. MQTT).

Zusammenfassung 🤓
---------------------

FastAPI und Uvicorn bilden ein leistungsstarkes Duo für moderne Webanwendungen. 
Während FastAPI die API-Logik definiert, stellt Uvicorn sicher, dass die Anwendung effizient ausgeführt wird. 
Diese Kombination eignet sich hervorragend für REST-APIs, Echtzeitkommunikation, Streaming-Dienste und vieles mehr.
