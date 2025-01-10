.. _postgresql_crud:

PostgreSQL CRUD Anleitung 📫
=============================

Diese Anleitung beschreibt Schritt für Schritt, wie man eine PostgreSQL-Anwendung in Python entwickelt und verwendet. Der Fokus liegt dabei auf der Erstellung und Nutzung einer PostgreSQL-Datenbank, inklusive der grundlegenden CRUD (Create, Read, Update, Delete)-Operationen.

Einleitung Postgres 📨
-----------------------------------------------
PostgreSQL ist ein leistungsstarkes, objektrelationales Datenbanksystem. Mit Python und der Bibliothek `psycopg2` können Entwickler auf einfache Weise mit PostgreSQL-Datenbanken interagieren. Diese Anleitung zeigt, wie man eine PostgreSQL-Datenbank einrichtet und verwendet.

Voraussetzungen Postgres 📦
--------------------------------------
- **Python installiert:** Python 3.x sollte auf Ihrem System installiert sein.
- **PostgreSQL installiert:** Ein laufender PostgreSQL-Server muss verfügbar sein.
- **Python-Bibliothek psycopg2:** Diese kann mit `pip install psycopg2` installiert werden.
- **Grundkenntnisse in SQL und Python:** Diese Anleitung setzt grundlegendes Verständnis voraus.

Schritt 1: Verbindung zum PostgreSQL-Server herstellen 🔗
----------------------------------------------------------
Die Funktion `connect_to_server` stellt eine Verbindung zum PostgreSQL-Server her. Diese Verbindung wird verwendet, um administrative Aufgaben wie das Erstellen von Datenbanken durchzuführen.

.. code-block:: python

    import psycopg2
    from psycopg2 import sql

    # Verbindungsdetails
    DB_HOST = "localhost"
    DB_PORT = "6666"
    DB_USER = "myuser"
    DB_PASSWORD = "mypassword"

    def connect_to_server():
        try:
            conn = psycopg2.connect(
                dbname="postgres",  # Standarddatenbank
                user=DB_USER,
                password=DB_PASSWORD,
                host=DB_HOST,
                port=DB_PORT
            )
            conn.autocommit = True  # Notwendig für Datenbankerstellung
            print("Verbindung zum Server erfolgreich.")
            return conn
        except Exception as e:
            print(f"Fehler bei der Verbindung zum Server: {e}")
            return None

    # Beispiel
    server_conn = connect_to_server()

**Erläuterung:**
- `conn.autocommit = True`: Ermöglicht es, SQL-Befehle ohne expliziten Commit auszuführen (wichtig für das Erstellen von Datenbanken).

Schritt 2: Datenbank erstellen 🔨
------------------------------------
Die Funktion `create_database` erstellt eine neue PostgreSQL-Datenbank.

.. code-block:: python

    def create_database(conn, db_name):
        try:
            with conn.cursor() as cursor:
                cursor.execute(sql.SQL("CREATE DATABASE {}")
                            .format(sql.Identifier(db_name)))
                print(f"Datenbank '{db_name}' erstellt.")
        except Exception as e:
            print(f"Fehler beim Erstellen der Datenbank: {e}")

    # Beispiel
    db_name = "testdb"
    create_database(server_conn, db_name)

**Warum wird `sql.Identifier` verwendet?**
- **SQL-Injection verhindern:** `sql.Identifier` sorgt dafür, dass der Datenbankname korrekt escaped wird, um Angriffe zu verhindern.
- **Dynamische SQL-Befehle:** Es erlaubt das sichere Erstellen von dynamischen SQL-Befehlen.

Schritt 3: Verbindung zur spezifischen Datenbank herstellen 🔗
-----------------------------------------------------------------------
Nach dem Erstellen der Datenbank kann man sich direkt mit ihr verbinden.

.. code-block:: python
    
    def connect_to_database(db_name):
        try:
            conn = psycopg2.connect(
                dbname=db_name,
                user=DB_USER,
                password=DB_PASSWORD,
                host=DB_HOST,
                port=DB_PORT
            )
            print(f"Mit der Datenbank '{db_name}' verbunden.")
            return conn
        except Exception as e:
            print(f"Fehler bei der Verbindung zur Datenbank '{db_name}': {e}")
            return None

    # Beispiel
    db_conn = connect_to_database(db_name)

Schritt 4: Tabelle erstellen 📄
---------------------------------
Mit der Funktion `create_table` wird eine Tabelle namens `users` erstellt.

.. code-block:: python

    def create_table(conn):
        try:
            with conn.cursor() as cursor:
                cursor.execute("""
                    CREATE TABLE IF NOT EXISTS users (
                        id SERIAL PRIMARY KEY,
                        name VARCHAR(100),
                        age INT,
                        email VARCHAR(100)
                    )
                """)
                conn.commit()
                print("Tabelle 'users' erstellt.")
        except Exception as e:
            print(f"Fehler beim Erstellen der Tabelle: {e}")

    # Beispiel
    create_table(db_conn)

Schritt 5: Daten einfügen 📝
-------------------------------
Die Funktion `insert_data` fügt Einträge in die Tabelle ein.

.. code-block:: python

    def insert_data(conn, name, age, email):
        try:
            with conn.cursor() as cursor:
                cursor.execute("""
                    INSERT INTO users (name, age, email) VALUES (%s, %s, %s)
                """, (name, age, email))
                conn.commit()
                print("Daten eingefügt.")
        except Exception as e:
            print(f"Fehler beim Einfügen der Daten: {e}")

    # Beispiel
    insert_data(db_conn, "Alice", 30, "alice@example.com")
    insert_data(db_conn, "Bob", 25, "bob@example.com")

Schritt 6: Daten lesen 📖
---------------------------

Die Funktion `read_data` liest alle Einträge aus der Tabelle.

.. code-block:: python

    def read_data(conn):
        try:
            with conn.cursor() as cursor:
                cursor.execute("SELECT * FROM users")
                rows = cursor.fetchall()
                for row in rows:
                    print(row)
        except Exception as e:
            print(f"Fehler beim Lesen der Daten: {e}")

    # Beispiel
    read_data(db_conn)

Schritt 7: Daten aktualisieren 🔄
-----------------------------------
Die Funktion `update_data` aktualisiert Einträge in der Tabelle.

.. code-block:: python

    def update_data(conn, user_id, new_name):
        try:
            with conn.cursor() as cursor:
                cursor.execute("""
                    UPDATE users SET name = %s WHERE id = %s
                """, (new_name, user_id))
                conn.commit()
                print("Daten aktualisiert.")
        except Exception as e:
            print(f"Fehler beim Aktualisieren der Daten: {e}")

    # Beispiel
    update_data(db_conn, 1, "Alice Updated")

Schritt 8: Daten löschen 🗑️
----------------------------
Die Funktion `delete_data` löscht Einträge aus der Tabelle.

.. code-block:: python
    
    def delete_data(conn, user_id):
        try:
            with conn.cursor() as cursor:
                cursor.execute("""
                    DELETE FROM users WHERE id = %s
                """, (user_id,))
                conn.commit()
                print("Daten gelöscht.")
        except Exception as e:
            print(f"Fehler beim Löschen der Daten: {e}")

    # Beispiel
    delete_data(db_conn, 2)

Zusammenfassung 📝
--------------------
Diese Anleitung zeigt, wie man mit PostgreSQL und Python grundlegende Datenbankoperationen implementiert. Sie bietet eine solide Grundlage für die Entwicklung datenbankbasierter Anwendungen.

