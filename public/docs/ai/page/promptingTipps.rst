Prompting Tips 🧬
========================


Einleitung 📚
----------------
Diese Dokumentation bietet eine klare Anleitung zur optimalen Nutzung von KI-basierten Systemen.
Ziel ist es, die Effizienz im Umgang mit Prompts zu steigern, typische Fehler zu vermeiden und die besten Ergebnisse zu erzielen.
Geeignet für Entwickler, KI-Enthusiasten und Anwender, die ihre Fähigkeiten im Prompting verbessern möchten.


Unnötige Informationen vermeiden 🚫
-------------------------------------

.. tip::
    Halte Prompts kurz und präzise. Verzichte auf Höflichkeitsfloskeln, die keine Funktion erfüllen.

Beispiel: 

- Könntest du Bitte das für mich machen
- Bitte erledige das für Mich
- Danke das ist echt nett von dir 
- Ich bin dir sehr dankbar
- "...."

Schlecht formuliertes Prompt:
    
    "Könntest du bitte so freundlich sein und mir bei der Lösung dieses Problems helfen? Ich wäre dir sehr dankbar."

Gut formuliertes Prompt:
    
    "Erledige folgende Aufgabe: Berechne die Quadratwurzel von 25."

Temperatur 🌡️
---------------

Die Temperatur beeinflusst die Kreativität und Präzision der Antworten der KI:

Niedrig (0.2): Präzise und deterministisch – für Fakten geeignet.
Hoch (0.8): Kreativ und abwechslungsreich – für Ideenfindung ideal.
Mittel (0.5): Balance zwischen Präzision und Kreativität.
 
Spezifisch bleiben & Kontext nutzen 📚
----------------------------------------

Spezifische Informationen sind präzise Daten oder Details, die Sie dem Chatbot zur Verfügung stellen, um die Antwort klar und relevant zu gestalten. 
Der Kontext hingegen beschreibt die Art und Weise, wie der Chatbot formuliert, interpretiert und auf die Eingaben reagiert.

Beispiel:
Spezifische Information:

Prompt: 
    Was ist die Hauptstadt von Frankreich? Antworte wie ein Historiker.

Erwartete Antwort: 
    Paris ist die Hauptstadt von Frankreich. Die Stadt ist bekannt für ihre historische Bedeutung, einschließlich der Französischen Revolution.


Limits setzen 📏
----------------

Limits sind eine Möglichkeit, die Ki zu steuern und zu verhindern, dass sie zu weit vom Thema abweicht. Limits können in der Konfiguration der Ki festgelegt werden oder im Chat mitgegeben werden.

Beispiel:
**Limit**:

    Antworte nur auf Fragen, die mit 'Was ist' beginnen.
**Prompt**: 

    Was ist die Hauptstadt von Frankreich? Und wer ist der Präsident?
**Antwort**: 

    Die Hauptstadt von Frankreich ist Paris.

Oder sage der Ki direkt, dass sie nur auf die erste Frage antworten soll. Die maximale Anzahl der Wörter soll auf 50 begrenzt sein.

Baustein-Struktur 🧱
---------------------

Die Baustein-Struktur ist eine Methode, um die Ki zu trainieren und zu steuern. Die Baustein-Struktur besteht aus mehreren Bausteinen, die miteinander verbunden sind. Jeder Baustein hat eine spezifische Funktion und kann unabhängig voneinander trainiert werden.
Hier ist das Ziel das die Ki nicht den besten Prompt bekommt sondern erst Basic anfängt und man den Prompt immer weiter verbessert.

Beispiel:

Baustein 1: 

    Was ist die Hauptstadt von Frankreich?
Baustein 2: 

    Was ist die Hauptstadt von Frankreich und wer ist der Präsident?
Baustein 3: 

    Was ist die Hauptstadt von Frankreich und wer ist der Präsident ? Antworte als Professioneller Politiker ?

Formatierung 📝
----------------

Bei den Chatbots kann auch eine Formatierung erfolgen um die darstellung der Antworten zu verbessern und darzustellen. 

Beispiele: Stelle die Antwort in einer xx dar.

- Liste 
- Tabelle 
- Diagramm
- Bild
- Video
-  Audio
-  Text
-  Code
-  Link
-  Button
-  Emoji
-  GIF
-  Zitat
-  Absatz
- ... 

Die Formatierung kann in der Konfiguration der Ki festgelegt werden oder im Chat mitgegeben werden.

Tempalte Prompting 📄
----------------------------

emplate Prompting ist eine Methode, bei der ein standardisiertes Textformat oder eine Vorlage verwendet wird, um den Chatbot konsistente und präzise Antworten zu generieren.
Diese Technik ist besonders nützlich, um strukturierte Ergebnisse oder wiederholbare Antwortmuster zu erhalten.

Aufbaue eines Templates 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1 Einleitung/Anweisung: Erklärt, was der Chatbot tun soll. 
2 Platzhalter/Variablen: Definiert dynmaische Elmente, die je nach Eingabe ersetzt werden.
3 Erwartes Format: Gibt das Layout oder die Struktur der Antwort vor. 

Beispiel:
Erstelle einen professionellen Lebenslauf. Verwende folgende Struktur: 

- Name: [Name]
- Beruf: [Beruf]
- Erfahrung: [Erfahrung]
- Fähigkeiten: [Fähigkeiten]
- Zertifikate: [Zertifikate]
- Referenzen: [Referenzen]
- ....

Eingabe:
"Name: Max Müller, Beruf: Softwareentwickler, Fähigkeiten: Python, JavaScript, Projektmanagement, Erfahrungen: 3 Jahre bei Firma X als Entwickler, 2 Jahre bei Firma Y als Teamleiter, Kontakt: max.mueller@example.com."

Gedankenkette 🧠
-------------------

Bei der Gedankenkette handelt es sich um eine Methode, bei der die Ki in eine bestimmte Richtung gelenkt wird, um ein bestimmtes Ergebnis zu erzielen.
Die Gedankenkette besteht aus mehreren Schritten, die aufeinander aufbauen und die Ki dazu bringen, eine spezifische Antwort zu generieren.
Erklärung: 

1. Zerlegung der Aufgabe: Der Prompt fordert den Chatbot dsazu auf, die Aufgabe in kleinere verständliche Teile aufzuteilen. 
2. Schritweise Argumentation: Der Chatbot erklärt seinen Denkprozess in klaren, logischen Schritten, bevor er eine Endgültibge Antwort gibt.
3. Finale Antwort: Der Chatbot gibt eine klare und präzise Antwort auf die Frage oder das Problem.

Beispiel:
"Ein Zug fährt mit 80 km/h. Wie weit kommt er in 4 Stunden? Erkläre deine Überlegungen Schritt für Schritt."


LLM Prompting 🧠
-------------------

Das LLM-Prompting ist eine Methode, bei der ein Language-Model-Learning-Modell (LLM) verwendet wird, um die Ki zu trainieren und zu steuern.
Beispiel hierfür ist das man einen Prompt über die OpenAi API gratis generieren kann und diesen somit in die Ki einbauen kann.


Mein Prompt: "Erstelle mir einen Prompt für einen Programmierer der mir beim coden hilft. Er soll bei allen änderungen Kommentare dazu machen und unter den Text kurz antworten warum er das macht "

Generierte Prompt: 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
.. code-block:: text

    Create a prompt for a programmer to help with coding. The programmer should add comments to all changes and provide a brief explanation beneath the code about why the changes were made.

    # Steps

    - Introduce the coding issue or task that needs assistance.
    - Ask the programmer to review the code and identify areas for improvement or modification.
    - Request that for every change made, a comment is added explaining the modification.
    - Following each section of code changes, request a brief explanation of the reasoning behind the changes.

    # Output Format

    - Annotated code with comments for each change.
    - A short explanation paragraph following each code change section, detailing the reasoning behind those changes.

    # Example

    **Input:**


        def calculate_sum(a, b):
            result = a - b
            return result


    **Output:**


        def calculate_sum(a, b):
            # Change subtraction to addition
            result = a + b
            return result
        
    # Explanation: The function was incorrectly performing subtraction instead of addition. The task requires summing the input values, so the operator was changed from '-' to '+'.


    # Notes

    - Make sure comments are clear and directly relevant to the code change.
    - Ensure that the reasoning is concise yet thorough enough to justify the change.
    "
