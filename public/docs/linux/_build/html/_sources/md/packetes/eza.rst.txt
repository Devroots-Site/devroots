.. title:: "eza: Die moderne Alternative zu ls"

eza 🤯
=============

.. tip:: 
   Die moderne Alternative zu "ls"

Einführung

In der Unix- und Linux-Welt ist "ls" ein Standardwerkzeug zur Anzeige von Dateien und Verzeichnissen. Doch mit modernen Anforderungen an eine übersichtlichere und farblich ansprechendere Ausgabe stößt "ls" an seine Grenzen. Hier kommt "eza" ins Spiel – eine erweiterte Alternative zu "ls", die mit nützlichen Features wie farblicher Darstellung, Git-Integration und erweiterter Metadatenanzeige aufwartet.

Was ist "eza"? ❓
-----------------------------
"eza" ist ein modernes Ersatzwerkzeug für "ls", das in Rust entwickelt wurde und zahlreiche Verbesserungen in der Darstellung und Funktionalität bietet. Es eignet sich besonders für Nutzer, die auf der Kommandozeile effizienter arbeiten möchten.

Warum "eza" nutzen? ❓
---------------------------------


Während "ls" lediglich eine einfache Datei- und Verzeichnisliste ausgibt, bringt "eza" viele praktische Verbesserungen mit sich:

1. **Farbliche Hervorhebung**:
   - "eza" nutzt Farben zur besseren Darstellung von Dateitypen, Berechtigungen und Metadaten.
   - Erleichtert die schnelle Orientierung in komplexen Verzeichnisstrukturen.

2. **Git-Integration**:
   - Zeigt an, welche Dateien verändert wurden, noch nicht versioniert sind oder Änderungen enthalten.
   - Praktisch für Entwickler, die Git direkt im Terminal nutzen.

3. **Erweiterte Metadaten**:
   - "eza" zeigt detailliertere Informationen über Dateien an, inklusive erweiterter Berechtigungen und Inodes.

4. **Baumansicht**:
   - Ermöglicht eine hierarchische Anzeige von Verzeichnissen ohne die Nutzung zusätzlicher Werkzeuge wie "tree".

5. **Schnellere Bedienung**:
   - Modern und ressourcenschonend durch die effiziente Implementierung in Rust.

Installation von "eza" 🛠️
---------------------------------

Die Installation von "eza" ist auf den meisten Linux-Distributionen einfach:

- **Debian/Ubuntu**:

  .. code-block:: sh
  
     sudo apt install eza

- **Arch Linux**:

  .. code-block:: sh
  
     sudo pacman -S eza

- **Fedora**:

  .. code-block:: sh
  
     sudo dnf install eza

- **macOS (via Homebrew)**:

  .. code-block:: sh
  
     brew install eza

Grundlegende Nutzung eza 🚀
-----------------------------------------


Ein einfaches Beispiel für die Nutzung von "eza":

.. code-block:: sh

   eza

Ergebnis:
- Standardmäßige Anzeige der Dateien im aktuellen Verzeichnis mit farblicher Hervorhebung.

Erweiterte Nutzung von "eza" 🚀
------------------------------------------

Einige nützliche Optionen und deren Auswirkungen:

1. **Detaillierte Ansicht (analog zu "ls -l")**:
.. code-block:: sh

   eza -l

2. **Baumansicht für eine strukturierte Darstellung**:
.. code-block:: sh

    eza -T

3. **Mit Git-Status anzeigen**:

.. code-block:: sh

    eza --git

4. **Sortierung nach Dateigröße**:

.. code-block:: sh

   eza -l --sort=size

Integration in bestehende Workflows 🔄
-------------------------------------------------

"eza" kann problemlos "ls" ersetzen. Durch die erweiterten Funktionen wird die Nutzung effizienter und übersichtlicher. Um "eza" als Standardbefehl zu nutzen, kann ein Alias gesetzt werden:

.. code-block:: sh

   alias ls="eza"

Fazit 🎉
-------------------

"eza" ist eine leistungsfähige und moderne Alternative zu "ls". Die farbliche Hervorhebung, Git-Integration und die erweiterten Anzeigeoptionen machen es zu einem unverzichtbaren Werkzeug für alle, die auf der Kommandozeile arbeiten. Durch die effiziente Implementierung in Rust bleibt es zudem ressourcenschonend und schnell. Wer bisher "ls" verwendet, sollte einen Blick auf "eza" werfen und die Vorteile der modernen Darstellung nutzen!
`exa <https://github.com/eza-community/eza?tab=readme-ov-file#display-optionsld
>`_
