Kontrollstrukturen
==================

Kontrollstrukturen sind in der Programmierung dazu da, um den Programmfluss zu steuern.

if-else
-------

**If / else** Abfragen werden verwendet, um eine Aktion auszuführen, wenn eine Bedingung wahr ist. Wenn die Bedingung falsch ist, wird eine andere Aktion ausgeführt.

.. list-table:: 
   :header-rows: 1

   * - Methode
     - Beschreibung
   * - ``>``
     - Größer als
   * - ``<``
     - Kleiner als
   * - ``>=``
     - Größer gleich
   * - ``<=``
     - Kleiner gleich
   * - ``==``
     - Gleich
   * - ``!=``
     - Ungleich
   * - ``===``
     - Gleich und gleicher Typ
   * - ``!==``
     - Ungleich und ungleicher Typ

Es können auch mehrere Bedingungen verknüpft werden mit ``&&`` (und) und ``||`` (oder).

.. code-block:: javascript

    let a = 5;

    if (a > 5) {
        console.log('a ist größer als 5');
    } else if (a < 5) {
        console.log('a ist kleiner als 5');
    } else {
        console.log('a ist gleich 5');
    }

Switch
------

**Switch** wird verwendet, um eine Aktion auszuführen, wenn eine Bedingung wahr ist.

.. code-block:: javascript

    let a = 5;

    switch (a) {
        case 1:
            console.log('a ist 1');
            break;
        case 2:
            console.log('a ist 2');
            break;
        case 3:
            console.log('a ist 3');
            break;
        default:
            console.log('a ist nicht 1, 2 oder 3');
    }

Ternary Operator
----------------

Der **Ternary Operator** wird verwendet, um eine Aktion auszuführen, wenn eine Bedingung wahr ist.

.. code-block:: javascript

    let a = 5;

    let result = a > 5 ? 'a ist größer als 5' : 'a ist kleiner oder gleich 5';

    console.log(result);
