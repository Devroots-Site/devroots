Prisma 🔮
=======================

Prisma ist ein leistungsstarkes ORM (Object-Relational Mapping)-Tool für Node.js und TypeScript. Es erleichtert die Arbeit mit Datenbanken durch eine intuitive API und unterstützt mehrere Datenbankmanagementsysteme wie PostgreSQL, MySQL, SQLite, und andere. Prisma bietet eine moderne und typsichere Methode, um mit Datenbanken zu interagieren.

Was ist Prisma? 🤔
----------------------
Prisma ist eine Open-Source-Bibliothek, die aus drei Hauptkomponenten besteht:

1. **Prisma Client**:
   - Ein automatisiert generierter und typsicherer Client für den Zugriff auf Ihre Datenbank.
   - Unterstützt CRUD-Operationen, komplexe Abfragen und Transaktionen.

2. **Prisma Migrate**:
   - Ein Tool zur Datenbankmigration, mit dem Sie Ihre Datenbankschemata sicher und konsistent ändern können.

3. **Prisma Studio**:
   - Eine benutzerfreundliche Weboberfläche für das Durchsuchen und Bearbeiten von Daten in Ihrer Datenbank.

Warum Prisma verwenden? 🤔
----------------------------
- **Typsicherheit:** Dank TypeScript erhalten Sie IntelliSense und Fehlererkennung während der Entwicklung.
- **Datenbankagnostik:** Prisma funktioniert mit mehreren Datenbanken, sodass Sie flexibel bleiben.
- **Einfachheit:** Reduziert Boilerplate-Code und bietet klare Schnittstellen.
- **Produktivität:** Schneller Entwicklungszyklus durch intuitive Werkzeuge wie Prisma Studio und Migrationsmanagement.

Wann Prisma verwenden? 🤔
--------------------------
Prisma eignet sich hervorragend für:
- Node.js-Projekte, die eine Datenbank verwenden.
- Teams, die TypeScript nutzen und von Typsicherheit profitieren möchten.
- Projekte, die einfache Migrationswerkzeuge und eine klare Schnittstelle benötigen.
- Anwendungen, die komplexe Datenbankabfragen durchführen.

Ein Prisma-Projekt erstellen 🚀
--------------------------------
Folgen Sie diesen Schritten, um ein Prisma-Projekt zu starten:

1. **Node.js-Projekt initialisieren:**
.. code-block:: bash

   mkdir prisma-app

   cd prisma-app

   npm init -y

   npm install prisma --save-dev

   npm install @prisma/client


2. **Prisma initialisieren:**
.. code-block:: bash

   npx prisma init


- Dadurch wird ein Ordner `prisma/` mit einer Standardkonfigurationsdatei `schema.prisma` erstellt.

Datenbankverbindung einrichten 🔗
-----------------------------------

Prisma speichert die Verbindungsinformationen zur Datenbank in der .env-Datei. Diese Datei wird automatisch erstellt, wenn Sie Prisma initialisieren.

Beispiel .env-Datei:
.. code-block:: bash
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

Erläuterung:

- USER: Benutzername der Datenbank.
- PASSWORD: Passwort des Benutzers.
- HOST: Hostname oder IP-Adresse der Datenbank.
- PORT: Port der Datenbank (z. B. 5432 für PostgreSQL).
- DATABASE: Name der Datenbank.

Prisma-Schema aktualisieren
--------------------------------

In der Datei prisma/schema.prisma wird die Datenbankverbindung über die datasource-Definition hergestellt. Beispiel:

.. code-block:: typescript
    datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
    }


Ein Prisma-Schema erstellen 📄
--------------------------------
Das Prisma-Schema definiert Ihre Datenbankstruktur. Es befindet sich in der Datei `prisma/schema.prisma`. Ein Beispiel:

.. code-block:: typescript

    model User {
    id    Int     @id @default(autoincrement())
    name  String  @db.VarChar(100)  // Definiert die maximale Länge
    email String  @unique
    posts Post[]
    }

    model Post {
    id      Int     @id @default(autoincrement())
    title   String
    content String
    userId  Int
    user    User    @relation(fields: [userId], references: [id])
    }


**Erläuterung:**

- `@id`: Kennzeichnet die Primärschlüssel.
- `@default(autoincrement())`: Automatische ID-Generierung.
- `@unique`: Markiert das Feld als eindeutig.
- `@relation`: Definiert Beziehungen zwischen Tabellen.
- `@db.VarChar`: Spezifische Datenbankdefinition für String-Felder.

Weitere Datentypen im Prisma-Schema 📝
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- `String`: Textfelder.
- `Int`: Ganzzahlen.
- `Float`: Dezimalzahlen.
- `Boolean`: Wahr/Falsch-Werte.
- `DateTime`: Zeit- und Datumsangaben.
- `Json`: JSON-Daten.
- `Optional`: Für optionale Felder (z. B. `name String?`).
- `Required`: Standardmäßig sind alle Felder erforderlich, sofern kein `?` hinzugefügt wird.

**Beispiel mit `@db.VarChar` und `Required`**
.. code-block:: prisma

    model Product {
    id      Int     @id @default(autoincrement())
    name    String  @db.VarChar(255)  // Erfordert maximale Zeichenanzahl
    price   Float   @default(0.0)
    inStock Boolean // Standard ist required
    }

Prisma Generieren 🧬
------------------------

Führen Sie den Befehl `npx prisma generate` aus, um den Prisma-Client zu generieren:

.. code-block:: bash

    npx prisma generate

Das generieren ist notwendig um den Prisma-Client zu erstellen, der für die Interaktion mit der Datenbank verwendet wird.

Migration ausführen 🚀
------------------------

Führen Sie eine Migration durch, um Ihre Datenbank mit dem Prisma-Schema zu synchronisieren:

.. code-block:: bash

    npx prisma migrate dev --name init


Warum ist Prisma Migrate wichtig? 🤔
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- Es sorgt dafür, dass Änderungen am Prisma-Schema automatisch auf die Datenbank angewendet werden.
- Es erleichtert das Verfolgen und Wiederherstellen von Änderungen.

Kann man Prisma ohne Migrate verwenden? 🤔
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Ja, Sie können Prisma verwenden, ohne Migrate auszuführen. In diesem Fall müssen Sie die Datenbankmanipulationen manuell über SQL ausführen. Dies ist jedoch nicht empfohlen, da es die Entwicklungszeit erhöht und zu Inkonsistenzen führen kann.

CRUD-Operationen mit Prisma Client 💻
---------------------------------------

Nach der Migration können Sie den Prisma Client verwenden, um mit der Datenbank zu interagieren.

1. **Prisma Client importieren:**

.. code-block:: javascript

   const { PrismaClient } = require('@prisma/client');
   // oder import { PrismaClient } from '@prisma/client';
   const prisma = new PrismaClient();
   

2. **Daten erstellen:**

.. code-block:: javascript

   async function createUser() {
     const user = await prisma.user.create({
       data: {
         name: 'Alice',
         email: 'alice@example.com',
       },
     });
     console.log(user);
   }
   createUser();
   

3. **Daten lesen:**

.. code-block:: javascript

   async function getUsers() {
     const users = await prisma.user.findMany();
     console.log(users);
   }
   getUsers();


4. **Daten aktualisieren:**

.. code-block:: javascript

   async function updateUser() {
     const updatedUser = await prisma.user.update({
       where: { email: 'alice@example.com' },
       data: { name: 'Alice Updated' },
     });
     console.log(updatedUser);
   }
   updateUser();
   

5. **Daten löschen:**

.. code-block:: javascript

   async function deleteUser() {
     await prisma.user.delete({
       where: { email: 'alice@example.com' },
     });
     console.log('User deleted');
   }
   deleteUser();


Zugriff auf bestimmte Tabellen 📊
------------------------------------------

Prisma erlaubt direkten Zugriff auf Tabellen über den Prisma Client. Jede Tabelle ist als Eigenschaft des Prisma Clients verfügbar.

**Beispiel:** Zugriff auf die Tabelle `Post`:
.. code-block::javascript

    async function getPosts() {
    const posts = await prisma.post.findMany();
    console.log(posts);
    }
    getPosts();


Fazit 🎉
---------------

Prisma ist ein modernes ORM-Tool, das die Entwicklung datenbankbasierter Anwendungen vereinfacht und beschleunigt. Es ist ideal für Entwickler, die in Node.js und TypeScript arbeiten und eine elegante Lösung für die Verwaltung von Datenbanken suchen.

