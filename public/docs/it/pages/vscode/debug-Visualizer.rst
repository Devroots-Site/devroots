Debug Visualizer
=============================


Der Debug Visualizer ist eine leistungsstarke Erweiterung für Visual Studio Code, die es ermöglicht, komplexe Datenstrukturen während des Debuggens visuell darzustellen. Diese Anleitung zeigt, wie man die Erweiterung installiert und in verschiedenen Programmiersprachen verwendet.

Installation
------------

1. **Visual Studio Code öffnen:**

   Stellen Sie sicher, dass Visual Studio Code installiert ist.

2. **Erweiterungen anzeigen:**

   Öffnen Sie die Erweiterungsübersicht (Shortcut: `Strg+Shift+X` oder `Cmd+Shift+X` auf macOS).

3. **Debug Visualizer suchen:**

   Geben Sie in der Suchleiste `hediet.debug-visualizer` ein.

4. **Installieren:**

   Klicken Sie auf die Schaltfläche **Installieren** neben der Erweiterung.

5. **Neu starten:**

   Starten Sie Visual Studio Code neu, um sicherzustellen, dass die Erweiterung korrekt geladen wird.

Verwendung
----------

Allgemeine Schritte
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. **Debugger starten:**
   Starten Sie den Debugger in Visual Studio Code.

2. **Datenvisualisierung aktivieren:**

   Klicken Sie auf die Schaltfläche **Debug Visualizer** in der Seitenleiste oder öffnen Sie die Visualisierung über `Strg+P` und den Befehl `Debug Visualizer: Show`.

3. **Ausdruck visualisieren:**

   Geben Sie den gewünschten Ausdruck ein oder markieren Sie einen Ausdruck im Code, klicken Sie mit der rechten Maustaste und wählen Sie **Visualize in Debug Visualizer**.

Unterstützte Programmiersprachen
--------------------------------

JavaScript/TypeScript
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. **Debugger konfigurieren:**

   Fügen Sie eine `launch.json`-Datei hinzu, falls nicht vorhanden.

.. code-block:: json

   {
      "version": "0.2.0",
      "configurations": [
            {
               "type": "node",
               "request": "launch",
               "name": "Launch Program",
               "program": "${workspaceFolder}/index.js"
            }
      ]
   }
    
2. **Visualisierung verwenden:**

   Visualisieren Sie Objekte, Arrays oder Funktionen durch Eingabe der Ausdrücke im Debug Visualizer.

React (JavaScript/TypeScript)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Der Debug Visualizer kann auch in React-Projekten verwendet werden, da React auf JavaScript oder TypeScript basiert.

1. **React-Projekt einrichten:**

   Stellen Sie sicher, dass Sie ein React-Projekt mit einer gültigen Debug-Konfiguration eingerichtet haben.

2. **Debugger konfigurieren:**

   Fügen Sie eine `launch.json`-Datei hinzu:

    .. code-block:: json

        {
            "version": "0.2.0",
            "configurations": [
                {
                    "type": "chrome",
                    "request": "launch",
                    "name": "Launch React App",
                    "url": "http://localhost:3000",
                    "webRoot": "${workspaceFolder}/src"
                }
            ]
        }

3. **Visualisierung verwenden:**

   Nutzen Sie den Debug Visualizer, um React-Zustände (`useState`, `useReducer`) oder Props zu analysieren, indem Sie die entsprechenden Variablen während des Debuggens eingeben oder markieren.

Python
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. **Python-Extension installieren:**

   Installieren Sie die Python-Erweiterung von Microsoft.

2. **Debugger konfigurieren:**

   Erstellen Sie eine `launch.json`-Datei:

.. code-blocK:: json
   
   {
      "version": "0.2.0",
      "configurations": [
            {
               "type": "python",
               "request": "launch",
               "name": "Python Debugging",
               "program": "${workspaceFolder}/main.py"
            }
      ]
   }

3. **Daten visualisieren:**

   Markieren Sie Variablen oder Datenstrukturen und visualisieren Sie sie mit Debug Visualizer.

Java
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. **Debugger installieren:**

   Installieren Sie die Erweiterung "Debugger for Java" von Microsoft.

2. **Launch-Konfiguration erstellen:**

   Erstellen Sie eine `launch.json`-Datei:

.. code-block:: json

   {
      "version": "0.2.0",
      "configurations": [
            {
               "type": "java",
               "request": "launch",
               "name": "Launch Java",
               "mainClass": "com.example.Main"
            }
      ]
   }

3. **Daten visualisieren:**

   Nutzen Sie den Debug Visualizer, um komplexe Java-Objekte zu analysieren.

Weitere Sprachen
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Der Debug Visualizer kann mit jeder Programmiersprache verwendet werden, die Visual Studio Code Debugging unterstützt. Stellen Sie sicher, dass die Sprache in Visual Studio Code korrekt eingerichtet ist, und folgen Sie den allgemeinen Schritten.

Tipps und Tricks
----------------

- **Kurzbefehle nutzen:**

  Nutzen Sie `Strg+P` und den Befehl `Debug Visualizer: Show`, um schnell auf die Visualisierung zuzugreifen.

- **Eigene Datenansichten erstellen:**

  Schreiben Sie eigene Funktionen, die die Daten vorverarbeiten, bevor sie visualisiert werden.

- **Themen und Einstellungen:**

  Passen Sie die Debug Visualizer-Einstellungen in den VS Code Einstellungen an.

Ressourcen
----------

- [Debug Visualizer Marketplace-Seite](https://marketplace.visualstudio.com/items?itemName=hediet.debug-visualizer)
- [VS Code Dokumentation](https://code.visualstudio.com/docs)

