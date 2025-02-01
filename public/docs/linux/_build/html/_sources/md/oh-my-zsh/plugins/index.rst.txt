Zsh Plugins 
========================================

.. tip:: 

   Zsh-Plugins erweitern die Funktionalität der Z Shell (Zsh) erheblich und bieten zahlreiche Verbesserungen 
   für Produktivität, Benutzerfreundlichkeit und Anpassung. 
   Eine umfangreiche Sammlung von Plugins ist unter `https://github.com/zsh-users <https://github.com/zsh-users>`_  verfügbar.

Warum Zsh-Plugins?
------------------
Zsh-Plugins sind besonders wichtig, weil sie:

- **Zusätzliche Funktionen bieten**: Plugins erweitern Zsh mit hilfreichen Befehlen und Skripten.
- **Die Autovervollständigung verbessern**: Viele Plugins optimieren und erweitern die Tab-Vervollständigung.
- **Syntaxhervorhebung und Fehlererkennung bieten**: Plugins wie `zsh-syntax-highlighting <https://github.com/zsh-users/zsh-syntax-highlighting>`_  machen die Arbeit in der Shell angenehmer.
- **Arbeitsabläufe beschleunigen**: Plugins reduzieren den Aufwand für sich wiederholende Aufgaben und steigern die Effizienz.

Installation von Zsh-Plugins
----------------------------

Die Installation von Plugins kann manuell oder über Plugin-Manager wie Oh My Zsh erfolgen. 

**Mit Oh My Zsh**
Wenn Oh My Zsh bereits installiert ist, können Plugins einfach in der Konfigurationsdatei aktiviert werden.

1. Öffne die `.zshrc`-Datei:

   .. code-block:: 

      nano ~/.zshrc

2. Füge das gewünschte Plugin zur `plugins`-Liste hinzu:

   .. code-block::

      plugins=(git docker zsh-autosuggestions zsh-syntax-highlighting)
   
3. Speichere die Datei und lade die Konfiguration neu:

   .. code-block::

      source ~/.zshrc

**Manuelle Installation**
Plugins können auch manuell aus dem Repository von `zsh-users` installiert werden:

1. Klone das Plugin-Repository in das Zsh-Plugins-Verzeichnis:

   .. code-block::

      git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/$ZSH_CUSTOM/plugins/zsh-syntax-highlighting

2. Füge das Plugin zur `.zshrc`-Datei hinzu:

   .. code-block:: 

     plugins="(zsh-syntax-highlighting)"

3. Lade die Konfiguration neu:

   .. code-block::
      
      source ~/.zshrc


.. toctree:: 
    :maxdepth: 1
    :caption: Plugins

    zsh-users.rst
    history.rst

