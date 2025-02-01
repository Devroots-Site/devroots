.. title:: "Oh My Zsh: History-Plugin Dokumentation"

History ⏲️
========================================


Einführung 🚀
--------------------------

Das `history`-Plugin von Oh My Zsh erweitert die Funktionalität der Zsh-Shell, indem es zusätzliche Aliase und Einstellungen für den Umgang mit der Befehlsverlaufshistorie bereitstellt.
Dies erleichtert die Navigation und Verwaltung vorheriger Befehle und verbessert somit die Effizienz auf der Kommandozeile.

Installation 🛠️
--------------------------

Um das `history`-Plugin zu aktivieren, fügen Sie es der Plugin-Liste in Ihrer `.zshrc`-Datei hinzu:

.. code-block:: sh

   plugins=(... history)

Stellen Sie sicher, dass Sie nach der Änderung die Zsh neu starten oder die `.zshrc` neu laden:

.. code-block:: sh

   source ~/.zshrc

Funktionen und Aliase 🎯
------------------------------ 

Das `history`-Plugin definiert mehrere nützliche Aliase, um die Arbeit mit der Befehlsverlaufshistorie zu erleichtern:

- **`h`**: Alias für den Befehl `history`, zeigt die Befehlsverlaufshistorie an.

- **`hs`**: Führt eine Suche in der Befehlsverlaufshistorie durch. Beispiel:

  .. code-block:: sh

    hs git

Dies listet alle vorherigen Befehle auf, die das Wort "git" enthalten.

- **`hsi`**: Führt eine inkrementelle Suche in der Befehlsverlaufshistorie durch. Beispiel:

  .. code-block:: sh

    hsi ls

Dies zeigt interaktiv alle Befehle an, die mit "ls" beginnen, während Sie tippen.

- **`h -10`**: Zeigt die letzten 10 Befehle in der Verlaufshistorie an.

- **`!n`**: Führt den Befehl mit der Nummer `n` in der Verlaufshistorie erneut aus. Beispiel:

  .. code-block:: sh

    !42

Dies führt den 42. Befehl in der Verlaufshistorie erneut aus.

- **`!string`**: Führt den zuletzt eingegebenen Befehl, der mit `string` beginnt, erneut aus. Beispiel:

  .. code-block:: sh

    !git

Dies führt den letzten Befehl, der mit "git" beginnt, erneut aus.

- **`!?string`**: Führt den zuletzt eingegebenen Befehl, der `string` enthält, erneut aus. Beispiel:

  .. code-block:: sh

    !?status

Dies führt den letzten Befehl, der "status" enthält, erneut aus.



Kombination aus Fuzzy Finder und History 🧩
====================================================

Das `history`-Plugin kann mit dem Fuzzy Finder (`fzf`) kombiniert werden, um die Suche und Auswahl von Befehlen in der Verlaufshistorie zu verbessern.

Nach der Installation von `fzf` können Sie die Befehlsverlaufshistorie interaktiv durchsuchen:

- **Befehlshistorie durchsuchen**:

  .. code-block:: sh

     history | fzf

- **Befehlshistorie durchsuchen und ausführen**:

  .. code
  
     eval $(history | fzf)

- **Befehlshistorie durchsuchen und bearbeiten**:

    .. code-block:: sh
    
         eval $(history | fzf | sed 's/^[0-9]* *//')

- **Befehlshistorie durchsuchen und in Editor öffnen**: 

  .. code-block:: sh

     fc -l | fzf | xargs $EDITOR

- **Befehlshistorie durchsuchen und in Shell ausführen**:

    .. code-block:: sh
    
         fc -l | fzf | sh

- **Befehlshistorie durchsuchen und in Vim öffnen**:

    .. code-block:: sh
    
         fc -l | fzf | xargs vim

- **Befehlshistorie durchsuchen und in Tmux öffnen**:

    .. code-block:: sh
    
         fc -l | fzf | xargs tmux

STRG R überschreiben von FZF (Fuzzy Finder) 🔄
---------------------------------------------------------

Diese Anleitung beschreibt, wie Sie einen Fuzzy Finder für die Zsh-Historie einrichten können. Damit können Sie über die Tastenkombination **Strg+R** (oder eine andere Kombination) schnell und einfach durch Ihre Zsh-Historie navigieren und Befehle auswählen.

Voraussetzungen
----------------

- **Zsh** ist installiert und als Standard-Shell konfiguriert.
- Ihre Zsh-Historie wird bereits gespeichert.
- Das Tool **fzf** ist installiert. Anleitung zur Installation finden Sie unter [fzf Dokumentation](https://test.com).

Schritt 1: Funktion zur Nutzung des Fuzzy Finders erstellen
-----------------------------------------------------------

Fügen Sie die folgende Funktion in Ihre ``~/.zshrc`` Datei ein:

.. code-block:: zsh

    # Fuzzy-Finder für die Zsh-Historie ohne Nummern
    function fzf_history() {
        local selected_command=$(history -r 1 | awk '{ $1=""; print substr($0,2) }' | fzf --height 40% --reverse --border --preview="echo {}")
        if [ -n "$selected_command" ]; then
            BUFFER="$selected_command"   # Setzt den gewählten Befehl in die Kommandozeile
            CURSOR=$#BUFFER              # Setzt den Cursor ans Ende der Zeile
        fi
        zle reset-prompt
    }

Schritt 2: Tastenkombination hinzufügen
----------------------------------------

Verknüpfen Sie die Funktion mit einer Tastenkombination, zum Beispiel **Strg+R**. Fügen Sie dazu folgende Zeilen in Ihre ``~/.zshrc`` ein:

.. code-block:: zsh

    zle -N fzf_history
    bindkey '^R' fzf_history

Schritt 3: Änderungen aktivieren
---------------------------------

Damit die Änderungen wirksam werden, laden Sie Ihre ``~/.zshrc`` Datei neu:

.. code-block:: zsh

    source ~/.zshrc

Schritt 4: Nutzung des Fuzzy Finders
-------------------------------------

- Drücken Sie **Strg+R**, um den Fuzzy Finder zu öffnen.
- Navigieren Sie durch Ihre Zsh-Historie.
- Wählen Sie den gewünschten Befehl aus, und er wird in Ihre Kommandozeile eingefügt.

Weitere Informationen
----------------------

Besuchen Sie die `Fuzzy-Finder <../../packetes/fuzzyfinder.html>`_ , um mehr über die Anpassungsmöglichkeiten von **fzf** zu erfahren.