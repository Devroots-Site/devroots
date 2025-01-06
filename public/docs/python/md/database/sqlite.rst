.. _sqlite_crud:

SQLite CRUD Anleitung 🪶
===========================

Diese Anleitung beschreibt Schritt für Schritt, wie man eine SQLite-Anwendung in Python entwickelt und verwendet. Sie richtet sich an Anfänger und Entwickler, die die grundlegenden CRUD (Create, Read, Update, Delete)-Operationen in einer SQLite-Datenbank implementieren möchten.

Einleitung Lite 📜
---------------------------
SQLite ist eine einfache, leichtgewichtige Datenbank, die keine separate Serverinstallation benötigt. Diese Anleitung führt Sie durch den Prozess der Erstellung einer SQLite-Datenbank, der Implementierung von CRUD-Operationen und der Nutzung der Anwendung in Python.

Voraussetzungen Lite 📦
------------------------------------
- **Python installiert:** Python 3.x sollte auf Ihrem System installiert sein.
- **SQLite integriert:** SQLite ist in Python standardmäßig integriert.
- **Grundkenntnisse in Python:** Sie sollten mit Python-Grundlagen vertraut sein.

Schritt 1: Verbindung zur Datenbank herstellen 🔗
-----------------------------------------------------
Der erste Schritt besteht darin, eine Verbindung zur SQLite-Datenbank herzustellen. Verwenden Sie die Funktion `connect_to_database`, um eine Datenbank zu erstellen oder eine vorhandene zu öffnen.


.. code-block:: python

    import sqlite3

    def connect_to_database(db_name):
        try:
            conn = sqlite3.connect(db_name)
            print(f"Erfolgreich mit der Datenbank '{db_name}' verbunden.")
            return conn
        except sqlite3.Error as e:
            print(f"Fehler bei der Verbindung zur Datenbank: {e}")
            return None

    # Beispiel
    conn = connect_to_database("test_database.sqlite")


**Erläuterung:**
- `db_name`: Der Name der SQLite-Datenbankdatei.
- Rückgabe: Eine Verbindung zur Datenbank.

Schritt 2: Tabelle erstellen 📦
----------------------------------
Mit der Funktion `create_table` können Sie eine Tabelle in der Datenbank erstellen. In diesem Beispiel wird die Tabelle `users` mit den Spalten `id`, `name`, `age` und `email` erstellt.

.. code-block:: python

    def create_table(conn):
        try:
            with conn:
                conn.execute("""
                    CREATE TABLE IF NOT EXISTS users (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name TEXT NOT NULL,
                        age INTEGER,
                        email TEXT
                    )
                """)
                print("Tabelle 'users' erfolgreich erstellt.")
        except sqlite3.Error as e:
            print(f"Fehler beim Erstellen der Tabelle: {e}")

    # Beispiel
    create_table(conn)

**Erläuterung:**
- Diese Funktion erstellt die Tabelle nur, wenn sie nicht bereits existiert.
- `conn` ist die Verbindung zur Datenbank.

Schritt 3: Daten einfügen 📝
----------------------------------
Mit der Funktion `insert_data` können Sie neue Einträge in die Tabelle einfügen.

.. code-block:: python

    def insert_data(conn, name, age, email):
        try:
            with conn:
                conn.execute("""
                    INSERT INTO users (name, age, email) VALUES (?, ?, ?)
                """, (name, age, email))
                print(f"Daten für {name} erfolgreich eingefügt.")
        except sqlite3.Error as e:
            print(f"Fehler beim Einfügen der Daten: {e}")

    # Beispiel
    insert_data(conn, "Alice", 30, "alice@example.com")
    insert_data(conn, "Bob", 25, "bob@example.com")

**Erläuterung:**
- Platzhalter `?` werden verwendet, um SQL-Injection zu vermeiden.
- Die Daten werden als Tupel `(name, age, email)` übergeben.

Schritt 4: Daten lesen 📖
---------------------------
Die Funktion `read_data` liest alle Einträge aus der Tabelle und gibt sie aus.


.. code-block:: python

    def read_data(conn):
        try:
            with conn:
                cursor = conn.execute("SELECT * FROM users")
                rows = cursor.fetchall()
                print("Daten aus der Tabelle:")
                for row in rows:
                    print(row)
        except sqlite3.Error as e:
            print(f"Fehler beim Lesen der Daten: {e}")

    # Beispiel
    read_data(conn)

**Erläuterung:**
- Alle Datensätze werden mit einer SQL-SELECT-Abfrage abgerufen.
- Die Ausgabe erfolgt als Liste von Tupeln.

Schritt 5: Daten aktualisieren 🔄
-------------------------------------
Mit der Funktion `update_data` können Sie vorhandene Einträge aktualisieren.

.. code-block:: python

    def update_data(conn, user_id, new_name):
        try:
            with conn:
                conn.execute("""
                    UPDATE users SET name = ? WHERE id = ?
                """, (new_name, user_id))
                print(f"Daten für Benutzer-ID {user_id} erfolgreich aktualisiert.")
        except sqlite3.Error as e:
            print(f"Fehler beim Aktualisieren der Daten: {e}")

    # Beispiel
    update_data(conn, 1, "Alice Updated")

**Erläuterung:**
- `user_id`: Die ID des zu aktualisierenden Benutzers.
- `new_name`: Der neue Name für den Benutzer.

Schritt 6: Daten löschen 🗑️
------------------------------
Die Funktion `delete_data` löscht einen Eintrag anhand der Benutzer-ID.

.. code-block:: python

    def delete_data(conn, user_id):
        try:
            with conn:
                conn.execute("""
                    DELETE FROM users WHERE id = ?
                """, (user_id,))
                print(f"Daten für Benutzer-ID {user_id} erfolgreich gelöscht.")
        except sqlite3.Error as e:
            print(f"Fehler beim Löschen der Daten: {e}")

    # Beispiel
    delete_data(conn, 2)

**Erläuterung:**
- `user_id`: Die ID des zu löschenden Benutzers.

Zusammenfassung Lite 📝
-------------------------------
Nach der Implementierung und Ausführung des Hauptprogramms können Sie eine SQLite-Datenbank verwenden, um CRUD-Operationen effizient durchzuführen. Der vollständige Code bietet eine solide Grundlage für den Einstieg in die Datenbankentwicklung mit Python.

**Hauptprogramm:**
.. code-block:: python

    if __name__ == "__main__":
        db_name = "test_database.sqlite"
        conn = connect_to_database(db_name)

        if conn:
            create_table(conn)
            insert_data(conn, "Alice", 30, "alice@example.com")
            insert_data(conn, "Bob", 25, "bob@example.com")

            print("\nVorhandene Daten:")
            read_data(conn)

            update_data(conn, 1, "Alice Updated")
            delete_data(conn, 2)

            print("\nAktualisierte Daten:")
            read_data(conn)

            conn.close()
            print("Datenbankverbindung geschlossen.")

