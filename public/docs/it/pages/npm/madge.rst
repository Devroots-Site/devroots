 Madge
 ==============

 Mage ist eine npm Tool das zur Visualisierung von Abhängigkeiten zwischen Modulen in einem Projekt verwendet wird.
 Es kann auch verwendet werden, um zirkuläre Abhängigkeiten zu finden.

Installation
--------------------

.. code-block:: bash

    npm install -g madge

Indalerweise sollte Madge global installiert werden, um es von überall ausführen zu können.
Außerdem wäre **Graphviz** erforderlich, um die Ausgabe in einem Bildformat zu erhalten.

.. code-block:: bash

    brew install graphviz

    apt-get install graphviz

    yum install graphviz

Verwendung
--------------------

.. code-block:: bash

    madge --image graph.png src/datei

Dieser Befehl erstellt ein Bild namens `graph.png` im aktuellen Verzeichnis, das die Abhängigkeiten zwischen Modulen anzeigt.

.. image:: /_static/graph.png


Layouts 
--------------------

Madge unterstützt verschiedene Layouts, die in der Ausgabe verwendet werden können.

.. code-block:: bash

    madge --layout dot --image graph.png src/datei

Die unterstützten Layouts sind:

- dot
- circo
- fdp
- neato

Weitere Informationen finden sie hier (Hier klicken)[https://github.com/pahen/madge]


