Git Installation 🪛
===================


Voraussetzungen
---------------

Für die Installation von Git benötigst du:
- **Einen Computer mit Internetverbindung**
- **Administratorenrechte** auf deinem System (je nach Betriebssystem)

Die Installation von Git ist für die meisten Betriebssysteme einfach, da die benötigten Pakete bereits in den Standard-Paketquellen enthalten sind. Die genaue Vorgehensweise unterscheidet sich jedoch je nach Betriebssystem.

Installation auf verschiedenen Betriebssystemen 💻
------------------------------------------------------------------

Windows
~~~~~~~~~~~~~~~~~~~

Für Windows gibt es ein Installationspaket, das alle benötigten Komponenten enthält. So kannst du Git auf Windows installieren:

1. **Lade das Installationsprogramm herunter**:
   Besuche die offizielle Git-Website unter https://git-scm.com/download/win und lade das aktuellste Installationspaket für Windows herunter.

2. **Starte das Installationsprogramm**:
   Führe die heruntergeladene `.exe`-Datei aus und folge den Installationsschritten. Du kannst die Standardeinstellungen verwenden, es sei denn, du möchtest bestimmte Optionen anpassen (z.B. den Standard-Texteditor).

3. **Überprüfe die Installation**:
   Öffne eine **Eingabeaufforderung** (Windows-Taste → `cmd` eingeben und Enter drücken) und tippe `git --version`. Du solltest die installierte Git-Version sehen.

macOS
~~~~~~~~~~~~~~~~~~~~

Git kann auf macOS auf verschiedene Arten installiert werden. Die einfachste Methode ist die Installation über Homebrew oder Xcode.

1. **Über Homebrew**:
- Stelle sicher, dass Homebrew auf deinem System installiert ist (Anleitung: https://brew.sh/).
- Öffne das Terminal und führe den folgenden Befehl aus:

.. code-block:: bash

    brew install git


2. **Über Xcode**:
Wenn du Xcode installiert hast, ist Git möglicherweise bereits verfügbar. Wenn nicht, kannst du es so installieren:

- Öffne das Terminal und tippe:

.. code-block:: bash
    
    git --version

- Wenn Git noch nicht installiert ist, wird ein Dialogfenster erscheinen, in dem du aufgefordert wirst, die Xcode Command Line Tools zu installieren. Bestätige dies, um Git zu installieren.

3. **Überprüfe die Installation**:
   Öffne das **Terminal** und tippe `git --version`, um sicherzustellen, dass Git korrekt installiert wurde.

Linux
~~~~~~~~~~~~~~~~~~~~~~~~

Auf den meisten Linux-Distributionen ist Git bereits in den Paketquellen enthalten und lässt sich einfach mit dem Paketmanager installieren.

- **Debian/Ubuntu**:

.. code-block:: bash

    sudo apt update sudo apt install git

Überprüfe die Installation, indem du in einem Terminal `git --version` eingibst.

Erste Konfiguration nach der Installation
-----------------------------------------

Nach der Installation von Git solltest du deine Identität und einige Standardwerte konfigurieren. Dies sind die grundlegenden Einstellungen, die du vornehmen solltest:

1. **Benutzernamen konfigurieren**:

.. code-block:: bash

    git config --global user.name "Dein Name"

2. **E-Mail-Adresse konfigurieren**:

.. code-block:: bash

    git config --global user.email "deine.email@example.com"

3. **Standardeditor festlegen** (optional):
Falls du mit einem bestimmten Texteditor arbeiten möchtest, kannst du diesen ebenfalls konfigurieren:
- Beispiel für `vim`:

.. code-block:: bash

    git config --global core.editor "vim"


4. **Konfiguration überprüfen**:
Um sicherzustellen, dass die Einstellungen korrekt sind, kannst du den folgenden Befehl verwenden:

.. code-block:: bash

    git config --list