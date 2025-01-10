JWT (JSON Web Token) 💻
===============================

Ein **JSON Web Token (JWT)** ist ein kompakter, URL-sicherer Standard, der zur Authentifizierung und 
Informationsübertragung zwischen zwei Parteien verwendet wird. JWTs sind besonders nützlich für stateless 
Authentifizierung und werden oft in modernen Web- und API-Anwendungen eingesetzt.

Was ist ein JWT? 🤔
--------------------

Ein JWT besteht aus drei Teilen, die durch Punkte (.) getrennt sind:

1. **Header**: Enthält Metadaten wie den Typ des Tokens und den Signaturalgorithmus.
2. **Payload**: Enthält die zu übertragenden Daten, z. B. Benutzerinformationen oder Berechtigungen.
3. **Signature**: Eine digitale Signatur, die die Integrität des Tokens sicherstellt.

**Beispiel für ein JWT:**

.. code-block:: text

   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjM0NTY3ODkwfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

Wie wird ein JWT erstellt? 🛠️
------------------------------

JWTs werden mit einer Bibliothek wie `PyJWT` in Python erstellt. Die Signatur stellt sicher, dass die 
Payload nicht manipuliert wurde.

**Beispiel:**

.. code-block:: python

   import jwt
   import datetime

   SECRET_KEY = "mein-geheimer-schluessel"

   def create_jwt(user_id: int):
       payload = {
           "user_id": user_id,
           "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)  # Ablaufzeit
       }
       token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
       return token

   token = create_jwt(user_id=12345)
   print(token)

Wie wird ein JWT validiert? 🕵️
-------------------------------

Der Server kann ein JWT überprüfen, indem er die Signatur validiert und sicherstellt, dass das Token nicht abgelaufen ist.

**Beispiel:**

.. code-block:: python

   def validate_jwt(token: str):
       try:
           decoded = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
           return decoded
       except jwt.ExpiredSignatureError:
           return {"error": "Token abgelaufen"}
       except jwt.InvalidTokenError:
           return {"error": "Ungültiges Token"}

Wann sollte man JWT verwenden? 🤝
-----------------------------------

JWTs eignen sich ideal für:

- **APIs**: Für die Authentifizierung von Benutzern in stateless Anwendungen.
- **Single-Page-Applications (SPAs)**: Zum Schutz von geschützten Routen.
- **Microservices**: Um sichere Kommunikation zwischen unabhängigen Diensten zu ermöglichen.

Unterschied zwischen JWT und Cookies 🍪
----------------------------------------

JWT und Cookies sind unterschiedliche Ansätze für Authentifizierung und Datenspeicherung:

.. list-table::
   :header-rows: 1
   :widths: 30 30 40

   * - Merkmal
     - JWT
     - Cookies
   * - Speicherung
     - Wird im Local Storage oder Session Storage gespeichert.
     - Wird automatisch im Browser gespeichert und verwaltet.
   * - Sicherheit
     - Kann bei XSS-Angriffen anfällig sein.
     - Sicherer durch HTTP-only und Secure-Flags.
   * - Verwendung
     - Ideal für APIs und mobile Anwendungen.
     - Ideal für klassische Webanwendungen.
   * - Performance
     - Stateless, weniger serverseitige Last.
     - Benötigt serverseitige Sitzungsverwaltung.

Fazit
-----

- Verwende JWTs für stateless, plattformübergreifende Anwendungen wie APIs und SPAs.
- Cookies sind einfacher für klassische Webanwendungen mit serverseitigen Sitzungen.
- Kombiniere JWTs und Cookies, indem du JWTs als HTTP-only-Cookies speicherst, um Sicherheit und Flexibilität zu maximieren.
