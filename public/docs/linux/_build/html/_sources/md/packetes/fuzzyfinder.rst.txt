.. _fuzzy_finder:

Fuzzy Finder - Effiziente Suche und Navigation
==============================================

Der Fuzzy Finder (`fzf`) ist ein leistungsstarkes und flexibles Suchwerkzeug für die Kommandozeile, das eine unscharfe (fuzzy) Suche über eine Vielzahl von Eingaben ermöglicht. Er wird häufig verwendet, um Dateien, Befehle oder Verzeichnisse effizient zu durchsuchen und zu navigieren.

Installation
------------
`fzf` kann auf verschiedenen Plattformen einfach installiert werden:

- **Ubuntu/Debian**:

  .. code-block:: sh

    sudo apt install fzf
  
- **macOS** (mit Homebrew):

  .. code-block:: sh
  
    brew install fzf
  
- **Arch Linux**:
  
  .. code-block:: sh
  
    sudo pacman -S fzf
  
- **Manuelle Installation**:
  
  .. code-block:: sh

    git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
    ~/.fzf/install
  

Grundlegende Nutzung
--------------------
Nach der Installation kann `fzf` als interaktiver Filter für verschiedene Kommandozeilen-Operationen verwendet werden:

- **Dateien suchen und auswählen**:

  .. code-block:: sh

    find . -type f | fzf

- **Befehle aus dem Verlauf durchsuchen**:

  .. code-block:: sh

    history | fzf

- **Prozesse filtern und beenden**:

  .. code-block:: sh

    ps aux | fzf | awk '{print $2}' | xargs kill


Wichtige Tastenkombinationen
----------------------------
Während der Nutzung von `fzf` gibt es einige hilfreiche Shortcuts:

- `CTRL + R` → Durchsucht den Befehlshistorie mit `fzf`
- `CTRL + T` → Fügt eine durch `fzf` gefundene Datei in die aktuelle Befehlszeile ein
- `ALT + C` → Wechselt interaktiv zu einem anderen Verzeichnis
- `ESC` oder `CTRL + C` → Beendet `fzf`

Tipps und Tricks
----------------
Ein besonders nützlicher Anwendungsfall für `fzf` ist das schnelle Wechseln zwischen Verzeichnissen. Dafür kann folgender Befehl verwendet werden:

.. code-block:: sh

  cd $(find . -type d | fzf)

Alternativ kann mit `fzf` auch eine interaktive Verzeichnisnavigation eingerichtet werden:

.. code-block:: sh

alias cdf='cd $(find . -type d | fzf)'

Dies erlaubt es, durch einfaches Eingeben von `cdf` ein Verzeichnis aus der aktuellen Struktur auszuwählen und dorthin zu wechseln.

Styling mit Border und mehr
---------------------------
Falls du das Styling von `fzf` anpassen möchtest, kannst du Umrandungen (Borders) und Farbschemata verwenden. Dies kann mit den Umgebungsvariablen oder mit der `--border` Option erfolgen:

.. code-block:: sh

  export FZF_DEFAULT_OPTS='--border --color=fg:#ffffff,bg:#1e1e1e,border:#ff79c6'

  oder  
  fzf --border --color=fg:#ffffff,bg:#1e1e1e,border:#ff79c6


Mehr Informationen und Styling-Möglichkeiten findest du in der offiziellen Dokumentation:
`GitHub - fzf <https://github.com/junegunn/fzf>`_ .

Fazit
-----
Der `fzf` Fuzzy Finder ist ein äußerst nützliches Tool, um effizient durch Dateien, Verzeichnisse oder Befehle zu navigieren. Durch die Vielzahl an Shortcuts und Integrationen kann er Arbeitsabläufe in der Kommandozeile erheblich beschleunigen.

