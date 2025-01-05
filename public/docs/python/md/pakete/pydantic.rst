Pydantic in Python
==================

Einleitung
----------

**Pydantic** ist eine leistungsstarke Python-Bibliothek, die zur Validierung und Typisierung von Daten verwendet wird. Sie basiert auf Python-Typannotationen und bietet einfache, aber robuste Mechanismen, um Daten zu verarbeiten und sicherzustellen, dass sie den erwarteten Formaten entsprechen. Pydantic wird oft in Webanwendungen, APIs und Datenverarbeitungsprojekten eingesetzt, um konsistente und valide Daten zu garantieren.

Grundkonzept
------------

Pydantic verwendet **Modelle**, die von der Basisklasse `BaseModel` erben. Diese Modelle definieren die Struktur und die Typen der erwarteten Daten. Pydantic übernimmt automatisch die Validierung und Konvertierung der Eingabedaten.

Installation
------------

Sie können Pydantic einfach über pip installieren:

.. code-block:: shell

    pip install pydantic

Beispiel: Grundlegendes Pydantic-Modell
---------------------------------------

.. code-block:: python

    from pydantic import BaseModel

    class Benutzer(BaseModel):
        name: str
        alter: int
        email: str

    daten = {"name": "Alice", "alter": "25", "email": "alice@example.com"}
    benutzer = Benutzer(**daten)

    print(benutzer)
    # Ausgabe: name='Alice' alter=25 email='alice@example.com'

In diesem Beispiel:
- Das Modell `Benutzer` definiert die erwarteten Felder und deren Typen.
- Pydantic validiert die Eingabedaten und konvertiert z. B. die Zeichenkette `"25"` automatisch in eine Ganzzahl (`int`).

Validierung und Fehlerbehandlung
--------------------------------

Wenn die Eingabedaten ungültig sind, wirft Pydantic eine Fehlermeldung:

.. code-block:: python

    daten = {"name": "Alice", "alter": "nicht_eine_zahl", "email": "alice@example.com"}
    try:
        benutzer = Benutzer(**daten)
    except ValueError as e:
        print(e)

    # Ausgabe: 1 validation error for Benutzer
    # alter
    #   value is not a valid integer (type=type_error.integer)

Zusätzliche Funktionalitäten von Pydantic
------------------------------------------

### Standardwerte

Felder in Pydantic-Modellen können Standardwerte haben:

.. code-block:: python

    class Benutzer(BaseModel):
        name: str
        is_admin: bool = False

    benutzer = Benutzer(name="Alice")
    print(benutzer.is_admin)  # Ausgabe: False

### Verschachtelte Modelle

Pydantic unterstützt verschachtelte Modelle:

.. code-block:: python

    class Adresse(BaseModel):
        stadt: str
        land: str

    class Benutzer(BaseModel):
        name: str
        adresse: Adresse

    daten = {
        "name": "Alice",
        "adresse": {"stadt": "Berlin", "land": "Deutschland"}
    }
    benutzer = Benutzer(**daten)
    print(benutzer.adresse.stadt)  # Ausgabe: Berlin

### Validierungsregeln

Sie können benutzerdefinierte Validierungslogik mit dem Decorator `@validator` hinzufügen:

.. code-block:: python

    from pydantic import validator

    class Benutzer(BaseModel):
        name: str
        alter: int

        @field_validator("alter")
        def alter_muss_positiv_sein(cls, v):
            if v <= 0:
                raise ValueError("Das Alter muss positiv sein.")
            return v

    daten = {"name": "Alice", "alter": -1}
    try:
        benutzer = Benutzer(**daten)
    except ValueError as e:
        print(e)

    # Ausgabe: 1 validation error for Benutzer
    # alter
    #   Das Alter muss positiv sein. (type=value_error)

Vorteile von Pydantic
---------------------

1. **Einfachheit**: Intuitive Syntax und leichte Integration.
2. **Automatische Typkonvertierung**: Konvertiert Eingabedaten in die erwarteten Python-Typen.
3. **Robuste Validierung**: Sorgt für Datenkonsistenz und Sicherheit.
4. **Unterstützung von JSON und andere Formate**: Modelle können leicht serialisiert und deserialisiert werden.

Nachteile von Pydantic
----------------------

1. **Performance**: Die Validierung kann bei sehr großen Datenmengen langsamer sein als manuelle Lösungen.
2. **Eingeschränkte Dynamik**: Bei stark dynamischen oder unvorhersehbaren Datenstrukturen kann die Modellierung komplex werden.

Wann sollte man Pydantic verwenden?
-----------------------------------

- **API-Datenvalidierung**: Sicherstellen, dass Eingaben von Nutzern oder Clients korrekt sind.
- **Datenverarbeitung**: Garantieren, dass Daten von externen Quellen (z. B. Dateien, Datenbanken) valide und konsistent sind.
- **Typisierte Anwendungen**: Erstellen von Anwendungen, die von Typannotationen profitieren.

Fazit
-----

Pydantic ist ein leistungsfähiges Werkzeug, um Daten in Python-Anwendungen sicher und effizient zu handhaben. Es ermöglicht einfache Datenvalidierung, Typkonvertierung und Fehlerbehandlung, was es zu einer hervorragenden Wahl für moderne Python-Projekte macht.

