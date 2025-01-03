Add ➕
======================

Das Kommando ``git add`` dient dazu, Änderungen von Dateien für den nächsten Commit in die sogenannte Staging-Area hinzuzufügen. Es gibt verschiedene Optionen, um spezifische Dateien oder Verzeichnisse hinzuzufügen.

**Grundsyntax:**

.. code-block:: bash

    git add <Datei-oder-Verzeichnis>

Wichtige Schalter
-----------------

- ``git add .``  
  Fügt **alle Änderungen** im aktuellen Verzeichnis (inkl. Unterverzeichnissen) zur Staging-Area hinzu.

- ``git add -A``  
  Fügt **alle Änderungen im gesamten Repository** hinzu, inklusive neu erstellter, geänderter oder gelöschter Dateien.

- ``git add -p``  
  Interaktiver Modus: Zeigt Änderungen in **Teilen** an, die selektiv hinzugefügt werden können.

- ``git add -n``  
  Führt einen **Trockenlauf** durch, bei dem angezeigt wird, was hinzugefügt würde, ohne die Dateien tatsächlich hinzuzufügen.

- ``git add -u``  
  Fügt nur geänderte und gelöschte Dateien hinzu, **ohne neue Dateien**.

**Hinweis:**  
Die Dateien werden erst nach dem Commit dauerhaft in die Historie übernommen. Verwende hierfür den Befehl ``git commit``.
