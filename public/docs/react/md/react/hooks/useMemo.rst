UseMemo
===================

useMemo wird in React verwendet, um Daten zu speichern, die nicht bei jedem Laden erneut berechnet werden müssen. Dies hilft, intensive Rechenoperationen zu vermeiden und die Leistung der Anwendung zu optimieren.

Achtung: Ein übermäßiger Einsatz von useMemo kann jedoch die Performance negativ beeinflussen. Es sollte nur verwendet werden, wenn es tatsächlich notwendig ist.

Zum Beispiel, wenn umfangreiche Berechnungen wie bei 1.000 Datensätzen durchgeführt werden müssen.

Hauptvorteile:

- Vermeidung unnötiger Rechenleistung.
- Optimierung der Performance.
- Speicher sparender Umgang mit komplexen Daten.

Beispielverwendung
--------------------------

.. code-block:: javascript

    import React, { useMemo, useState } from 'react';

    function ExpensiveCalculationComponent() {
        const [count, setCount] = useState(0);
        const [otherState, setOtherState] = useState(false);

        // Teure Berechnung nur bei Änderung von 'count'
        const expensiveResult = useMemo(() => {
            console.log('Teure Berechnung wird ausgeführt...');
            return count ** 2; // Beispiel: Quadrat der Zahl
        }, [count]);

        return (
            <div>
                <p>Ergebnis der teuren Berechnung: {expensiveResult}</p>
                <button onClick={() => setCount(count + 1)}>Count erhöhen</button>
                <button onClick={() => setOtherState(!otherState)}>Anderen State ändern</button>
            </div>
        );
    }


Wichtige Hinweise
-------------------------

- Verwendung nur bei Bedarf:
  Verwende useMemo nur, wenn du sicher bist, dass eine Berechnung teuer genug ist, um den Aufwand zu rechtfertigen.

- Abhängigkeiten:
  Die Abhängigkeiten im zweiten Argument von useMemo bestimmen, wann die gespeicherten Werte neu berechnet werden. Bei falscher Definition kann es zu unerwartetem Verhalten kommen.

- Performance-Overhead:
Der Einsatz von useMemo selbst bringt einen gewissen Speicher- und Verwaltungsaufwand mit sich. Verwende es daher sparsam und nur in performancekritischen Situationen.