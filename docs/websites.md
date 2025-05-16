# Dokumentation: WebsiteList-Komponente

## Übersicht

Die `WebsiteList`-Komponente ist eine React-Komponente, die mithilfe der Material-UI-Bibliothek erstellt wurde. Sie bietet eine benutzerfreundliche Oberfläche zum Anzeigen, Filtern und Suchen von Websites basierend auf Kategorien und Stichwörtern. Diese Komponente ist flexibel und kann in Projekten verwendet werden, bei denen eine übersichtliche Darstellung von Webressourcen erforderlich ist.

## Eigenschaften

### Hauptfunktionen:

- **Datenanzeige:** Websites werden als Karten angezeigt, einschließlich Name, Beschreibung, Link und zugehöriger Stichwörter.
- **Filter:** Möglichkeit, Websites nach Kategorien zu filtern.
- **Suche:** Eine Sucheingabe zum Filtern von Websites basierend auf Namen.
- **Dynamische Stichwörter:** Jedes Stichwort wird mit einer dynamisch zugeordneten Farbe dargestellt.

### Verwendete Technologien:

- **Material-UI:** Für das Styling und die UI-Komponenten wie `Box`, `Typography`, `Card`, `Chip` und `Button`.
- **Axios:** Zum Abrufen der Website- und Kategorie-Daten von einer API.
- **React-Hooks:** Verwendet `useState` und `useEffect` zur Verwaltung von Status und Seiteneffekten.

## Aufbau der Komponente

### Props und Zustände:

- **Props:** Diese Komponente hat keine speziellen Props, sondern bezieht Daten direkt aus einer API.
- **State:**
    - `websites`: Liste aller Websites.
    - `categories`: Liste aller Kategorien.
    - `filteredWebsites`: Gefilterte Liste der Websites basierend auf Suche und ausgewählter Kategorie.
    - `selectedCategory`: Aktuell ausgewählte Kategorie.
    - `searchTerm`: Aktueller Suchbegriff.

### API-Aufrufe:

- Ruft Daten von zwei Endpunkten ab:
    1. `import.meta.env.VITE_BE_IP + "/websites/all"` - Für die Liste aller Websites.
    2. `import.meta.env.VITE_BE_IP + '/websites/categories/all'` - Für die Liste aller Kategorien.
- Handhabung von Fehlern erfolgt über einen `try-catch`-Block.

### Rendering:

Die Hauptkomponente besteht aus:

- **Suchfeld:** Ein `TextField` zur Eingabe des Suchbegriffs.
- **Kategoriefilter:** Ein `TextField` mit Auswahlmenü (`select`), um die Kategorie zu wählen.
- **Website-Karten:** Jede Karte enthält:
    - Name und Beschreibung der Website.
    - Dynamisch gefärbte Chips für Stichwörter.
    - Einen Button zum Öffnen der Website.

## Design und Stil

- **Farbschema:**
    - Die Hauptfarbe für die Überschrift ist `#0078ff`.
    - Chips sind in verschiedenen Farben (`primary`, `secondary`, etc.) basierend auf Kategorien.
- **Karten:**
    - Schatteneffekte (`boxShadow`) und abgerundete Ecken (`borderRadius`) sorgen für ein modernes Aussehen.

## Verwendung

1. **Integration:**
   Importieren Sie die Komponente und fügen Sie sie in Ihre React-App ein:

    ```javascript
    import WebsiteList from './WebsiteList';

    function App() {
        return <WebsiteList />;
    }
    ```

2. **API-Konfiguration:**
   Stellen Sie sicher, dass die Umgebungsvariablen (`VITE_BE_IP`) korrekt gesetzt sind, damit die API-Aufrufe funktionieren.

3. **Erweiterung:**
   Die Komponente kann erweitert werden, indem zusätzliche Filteroptionen oder Darstellungsmodi hinzugefügt werden.

## Fehlermeldungen

- **API-Fehler:** Wenn die Daten nicht abgerufen werden können, wird ein Fehler in der Konsole ausgegeben.
- **Keine Ergebnisse:** Wenn keine Websites den Filterkriterien entsprechen, wird die Meldung "No websites found" angezeigt.

## Fazit

Die `WebsiteList`-Komponente ist ein leistungsstarkes Tool zur Darstellung und Verwaltung von Website-Informationen. Sie kombiniert ansprechendes Design mit Funktionalität und ist leicht anpassbar für verschiedene Anwendungsfälle.
