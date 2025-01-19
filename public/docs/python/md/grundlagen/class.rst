Python Klassen 🔲
==================

Einleitung
----------

Klassen sind ein fundamentales Konzept in Python, das verwendet wird, um benutzerdefinierte Objekte zu erstellen. Eine Klasse dient als Bauplan für Objekte und kann sowohl Attribute (Daten) als auch Methoden (Funktionen) enthalten, die das Verhalten der Objekte definieren.

Definition einer Klasse
-----------------------

Eine Klasse wird in Python mit dem Schlüsselwort ``class`` definiert. Der Name der Klasse sollte idealerweise in CamelCase geschrieben werden. Hier ein Beispiel:

.. code-block:: python

    class Auto:
        def __init__(self, marke, farbe):
            self.marke = marke
            self.farbe = farbe

        def fahren(self):
            print(f"{self.marke} fährt los.")

In diesem Beispiel:
- ``__init__`` ist ein Konstruktor, der beim Erstellen eines Objekts aufgerufen wird. Hier werden die Attribute ``marke`` und ``farbe`` initialisiert.
- ``self`` ist ein Verweis auf die aktuelle Instanz der Klasse.
- Die Methode ``fahren`` ist eine Funktion, die das Verhalten des Objekts beschreibt.

Verwendung einer Klasse
-----------------------

Ein Objekt kann aus einer Klasse erstellt werden, indem der Klassenname wie eine Funktion aufgerufen wird:

.. code-block:: python

    bmw = Auto("BMW", "blau")
    bmw.fahren()

Ausgabe:

.. code-block:: text

    BMW fährt los.

Vor- und Nachteile von Klassen
------------------------------

**Vorteile:**
- **Strukturierte Datenorganisation**: Klassen bieten eine klare Struktur, um zusammengehörige Daten und Funktionen zu organisieren.
- **Wiederverwendbarkeit**: Durch Vererbung und Modularität können Klassen effizient wiederverwendet werden.
- **Klarheit**: Klassen machen den Code lesbarer und wartbarer.

**Nachteile:**
- **Komplexität**: Für einfache Anwendungen können Klassen unnötig komplex sein.
- **Speicherverbrauch**: Objekte von Klassen können mehr Speicher beanspruchen als einfache Datenstrukturen wie Dictionaries oder Listen.

Alternativen: Pydantic
----------------------

Eine Alternative zu herkömmlichen Python-Klassen ist **Pydantic**. Es handelt sich um eine Bibliothek, die für die Datenvalidierung und das Datenhandling in Python entwickelt wurde. Pydantic verwendet **Datenklassen** (Data Classes) mit strikter Typisierung und Validierung.

Beispiel mit Pydantic:

.. code-block:: python

    from pydantic import BaseModel

    class Auto(BaseModel):
        marke: str
        farbe: str

    bmw = Auto(marke="BMW", farbe="blau")
    print(bmw)

**Vorteile von Pydantic:**
- Automatische Validierung von Eingabedaten.
- Klare Fehlerausgaben bei ungültigen Daten.
- Typisierung und serialisierbare Modelle (z. B. zu JSON).

Weitere Informationen zu Pydantic finden Sie in der separaten Dokumentation.

Fazit
-----

Klassen sind ein zentrales Konzept in Python, das für die meisten objektorientierten Anwendungen unverzichtbar ist. Für spezielle Anwendungsfälle, wie die Validierung von Daten, bietet Pydantic eine moderne und effiziente Alternative.

