---
title: "Dokumentacja Projektu"
subtitle: "Aplikacja zarządzania zadaniami MyTask"
author:
    - "Mateusz Waszyński"
    - "Yevhen Sychov"
    - "Damian Włodarczyk"
    - "Kacper Zając"
date: "2026-05-23"
geometry: margin=2cm
mainfont: "DejaVu Sans"
sansfont: "DejaVu Sans"
fontsize: 12pt
---

# Zasady dobrego UI

Dobre UI powinno odznaczać się między innymi:

1. **Prostotą użytkowania** -- interfejs ma być możliwie prosty, pozbawiony niepotrzebnych funkcji. Pozwala to na skupieniu się na zadaniu.
2. **Intuicyjność** -- interfejs ma być możliwie logiczny dla użytkownika, wszytkie elementy znajdować się w odpowiednim porządku, a sama aplikacja zachowywać się w sposób przewidywalny.
3. **Spójność** -- elementy mają się zachowywać tak samo i wykazywać się takimi samymi cechami (np. kolor, napis na elemencie) w całym interfejsie.
4. **Dostępność** -- interfejs powinien odpowiadać również osobom ze szczególnymi potrzebami. Przykładowo zaimplementowanie możliwości zmiany kontrastu, wielkości tekstu i elementów, możliwości nawigacji za pomocą urządzeń zewnętrznych, czy czytania maszynowego przez aplikacje zewnętrzne.

# Analiza Użytkowników i Persony
## Analiza potrzeb i problemów
Projektowana aplikacja ma na celu rozwiązanie kluczowych problemów, z którymi borykają się użytkownicy w zakresie organizacji czasu i zadań:

- **Rozproszenie informacji**: Użytkownicy często przechowują listę zadań w wielu miejscach (notatki, maile, pamięć), co prowadzi do przeoczenia ważnych terminów.
- **Trudność w priorytetyzacji**: Brak jasnego rozróżnienia między zadaniami pilnymi a tymi, które mogą zostać wykonane później.
- **Przeładowanie funkcjonalne**: Wiele istniejących narzędzi jest zbyt skomplikowanych, co zniechęca do ich systematycznego używania. Nasza aplikacja stawia na prostotę i intuicyjność.

## Persony Użytkowników
### Persona 1: Zorganizowany Student
Persona jest studentem informatyki, dorabiająca jako freelancer. Ma napięty grafik, wykonuje zadania w związku ze swoją edukacją. Żongluje terminami uczelnianymi oraz projektami dla klientów. Jest techniczny, tworzy prace indywidualne oraz grupowe. Dysponuje wieczorami kilkoma godzinami wolnego czasu dziennie. Ma dostęp do urządzenia mobilnego, laptopa osobistego oraz komputera stacjonarnego w pracy.

Potrzeby:

- Możliwość szybkiego dodawania zadań w krótkich przerwach między zajęciami.
- Podział zadań na przejrzyste kategorie ("Studia", "Praca", "Prywatne").
- Czytelny widok listy z zaznaczonymi terminami końcowymi (deadlines).

Główny cel: Skuteczne zarządzanie wieloma projektami jednocześnie bez nakładania się terminów.

### Persona 2: Pracownik Biurowy
Persona pracująca na dziale administracji/marketingu. Codziennie otrzymuje dziesiątki drobnych zadań od różnych współpracowników. Pracuje w biurze, często w szumie i pod dużą presją czasu. Ma dostęp do telefonu, komputera na stanowisku roboczym.

Potrzeby:

- Szybka priorytetyzacja (np. oznaczanie zadań jako „Pilne/ASAP” lub kolorystyczne wyróżnienie ważności).
- Wyszukiwarka i filtrowanie, aby łatwo odnaleźć konkretne zadania.
- Wizualne i natychmiastowe potwierdzenie wykonania zadania.

Główny cel: Uporządkowanie chaosu dnia pracy i pewność, że żadne kluczowe zadanie nie zostało pominięte przed wyjściem z biura.

### Persona 3: Osoba przygotowująca uroczystość:
Jest to osoba w wieku 30 – 50 lat, aktywna zawodowo, posiadająca rodzinę, której zadaniem jest przygotowanie ważnej uroczystości. Wydarzenia można podzielić m. in. na uroczystości rodzinne, jak ślub, wydarzenia związane z pracą zawodową, jak konferencje, szkolenia, lub aktywności społeczne.

Potrzeby:

- Nieregularne wykonywanie zadań z różnych kategorii.
- Częste przenoszenie lub zmiana terminów wykonania zadań.
- Koordynacja i zarządzanie zadaniami "w biegu" z urządzenia mobilnego.

Glowny cel: Koordynacja mobilna, łatwe dostosowywanie planu, monitorowanie postępów w różnych kategoriach.
