# Dokumentation

## Statische Dokumente

Die Dokumente werden statisch im `public`-Ordner abgelegt. Über das Backend werden die zugehörigen Metadaten aus der Datenbank geladen. Diese Metadaten umfassen unter anderem den Dokumentpfad, Bildpfad, Titel, Beschreibung und weitere Details.

## Dokumentenübersicht

Alle Dokumente können über den Endpunkt `docs/all` abgerufen und auf der entsprechenden Seite angezeigt werden. Eine Besonderheit hierbei ist die integrierte Suchfunktion, die es ermöglicht, gezielt nach bestimmten Dokumenten zu suchen.

## Kategorien

Über den Endpunkt `/docs/categories/all` werden alle verfügbaren Kategorien geladen und auf der Seite dargestellt. Auch hier steht eine Suchfunktion zur Verfügung, um die Navigation zu erleichtern.

Jede Dokumentenkarte enthält kleine Chips, die die zugehörigen Kategorien anzeigen.

## Kategorisierung der Dokumente

Die Dokumente sind in verschiedene Kategorien unterteilt, die in der Datenbank hinterlegt sind. Diese Kategorien können über das Backend verwaltet und bearbeitet werden.

Die Dokumente decken ein breites Spektrum ab, von Programmiersprachen über Frameworks und Bibliotheken bis hin zu praktischen Tipps und Anleitungen.