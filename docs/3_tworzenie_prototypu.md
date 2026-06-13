# Tworzenie szkiców interfejsu i mapy aplikacji
## Architektura informacji i User Flow
Zanim przystąpiono do szkicowania, opracowano ścieżkę użytkownika (User Flow), aby zapewnić logiczne przejścia między widokami. Główny proces obejmuje:

1. **Ekran główny**: Przegląd listy zadań z możliwością filtrowania.
2. **Akcja dodawania**: Przejście do formularza, wprowadzenie danych i powrót z informacją zwrotną.
3. **Zakończenie zadania**: Wybór zadań z listy do ukończenia.
3. **Zarządzanie zadaniem**: Możliwość edycji tytułu zadania, opisu, daty końcowej.
4. **Usunięcie wykonanych zadań**: Pogląd wykonanych zadań z możliwością usunięcia.

## Uzasadnienie rozwiązań na etapie szkicowania
* **Prostota**: Zrezygnowano ze skomplikowanych menu na rzecz czystego widoku listy, co realizuje zasadę prostoty UI.
* **Elastyczność**: Wprowadzono modularny układ, co ułatwia późniejszą implementację funkcji dodawania, edycji i usuwania zadań.
