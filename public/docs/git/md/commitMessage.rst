Conventional Commits Cheat Sheet
===============================

Eine einfache Anleitung, um das Standardformat für Commit-Nachrichten nach dem "Conventional Commits"-Standard in deinen Projekten anzuwenden und zu verstehen.

Warum Conventional Commits?
----------------------------
Die Einhaltung von "Conventional Commits" verbessert deine Kommunikationsfähigkeiten, indem sie klare und organisierte Commit-Nachrichten fordert. Es hilft dir, den Fokus auf deine Änderungen und deren Auswirkungen zu legen, wodurch Projekte besser verwaltet und die Zusammenarbeit effektiver gestaltet werden kann.

✈ So verwendest du Conventional Commits in deinem Git-Workflow
---------------------------------------------------------------

### 1. Commit-Nachrichten mit `git commit` im Terminal schreiben
Wenn du Änderungen an deinem Code vorgenommen hast und diese committen möchtest, verwende den Befehl `git commit` im Terminal. Der Schlüssel liegt darin, das Format der Conventional Commit-Nachricht einzuhalten.

Beispiel:

```bash
git commit -m "feat(auth): add Google login feature"
```

### Schritte zum Committen im Terminal
1. **Änderungen vornehmen:** Modifiziere deine Dateien nach Bedarf.
2. **Änderungen bereitstellen:** Füge die modifizierten Dateien zur Staging-Area hinzu:
   ```bash
   git add <datei>
   ```
   Oder um alle geänderten Dateien hinzuzufügen:
   ```bash
   git add .
   ```
3. **Commit-Nachricht schreiben:**
   ```bash
   git commit -m "feat(button): add rounded corners"
   ```
4. **Änderungen pushen:**
   ```bash
   git push
   ```
   Oder für einen spezifischen Branch:
   ```bash
   git push origin <branch>
   ```

✈ Grundstruktur einer Commit-Nachricht
----------------------------------------
Jede Commit-Nachricht folgt dieser Struktur:

```text
typ(bereich): kurze Beschreibung
```

- **typ:** Beschreibt die Art der Änderung (z. B. feat, fix, chore).
- **bereich:** (Optional) Bereich des Projekts, der betroffen ist (z. B. api, frontend).
- **kurze Beschreibung:** Eine kurze Beschreibung der Änderung.

✉ Commit-Typen
-----------------
- **feat:** Ein neues Feature für den Benutzer oder das System.
  ```text
  feat(auth): add Google login feature
  ```

- **fix:** Ein Bugfix für den Benutzer oder das System.
  ```text
  fix(button): resolve issue with button hover state
  ```

- **chore:** Routineaufgaben wie Wartung oder Abhängigkeiten-Updates.
  ```text
  chore(deps): update react to version 17.0.2
  ```

- **docs:** Dokumentationsupdates.
  ```text
  docs(readme): update installation instructions
  ```

- **style:** Änderungen am Code-Stil (z. B. Formatierung, fehlende Semikolons).
  ```text
  style(button): fix button alignment in CSS
  ```

- **refactor:** Codeänderung, die weder einen Bugfix noch ein Feature hinzufügt.
  ```text
  refactor(auth): simplify login form validation logic
  ```

- **test:** Hinzufügen oder Aktualisieren von Tests.
  ```text
  test(auth): add unit tests for login function
  ```

- **build:** Änderungen am Build-System oder an externen Abhängigkeiten.
  ```text
  build(webpack): add webpack config for production build
  ```

- **ci:** Änderungen im Zusammenhang mit Continuous Integration.
  ```text
  ci(gitlab): update CI config for deployment pipeline
  ```

🤔 Tipps
---------------
- Halte deine Nachrichten klar und präzise.
- Verwende den Typ, der die Änderung am besten beschreibt.

Weitere Informationen:
-----------------------
Besuche die offizielle Dokumentation für einen tieferen Einblick: [Conventional Commits](https://www.conventionalcommits.org).

