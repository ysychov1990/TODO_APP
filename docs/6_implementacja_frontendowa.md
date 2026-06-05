# Implementacja Frontendowa

## Struktura

Stworzona implementacja frontendowa aplikacji składa się z kilku sekcji i ekranów (wysuwanych kart), które są niezbędne do realizacji zadań i funkcji aplikacji.

Strukturę aplikacji można przedstawić w sposób zorientowany na element zadania:

- sekcja główna (lista zadań, punkt startowy)
- ekran(wysuwana karta) podglądu informacji zadania (dostępny w każdej z sekcji)
- ekran (wysuwana karta) dodawnia zadania
- sekcja oznaczania zadań jako wykonane
- sekcja usuwania zadań
- sekcja edycji zadania
  - ekran (wysuwana karta) edycji zadania

## Kluczowe decyzje / zabiegi projektowe 

Bardzo istotne znaczenie dla zrozumienia działania interfejsu i uniknięcia niepotrzebnych komplikacji, jest rozmieszczenie poszczególnych sekcji i ekranów oraz zastosowanie elementu "cienia". W danym momencie użytkownik widzi tylko to, co powinno go w danej chwili interesować. Przykładowo wchodząc w sekcję usuwania zadania, nie mamy dostępu do sekcji edycji. W takiej sytuacji użytkownik może jedynie wykonywać akcję związane z procesem usuwania zadania. Jedynym wyjątkiem od tej reguły jest stale dostępna opcja podglądu zadania, wywoływana poprzez kliknięcie w element zadania. Wysuwa się wtedy schowana wcześniej karta z informacjami o zadaniu. Opcja ta jest dostępna niezależnie od sekcji, w której przebywa użytkownik. Wspomniany wcześniej element "cienia" zapewnia zablokowanie możliwości przejścia do innej sekcji, w trakcie gdy któryś z ekranów (wysuwanych kart) jest widoczny na ekranie. Pokrywa się to nadal z myślą wskazującą na to, że użytkownik nie powinien mieć dostępu do czegokolwiek innego niż to, co w danej sytuacji powinien móc zrobić. Pozwala to zachować prostotę, a jednocześnie eliminuje możliwość powstania potencjalnych błędów lub zwyczajnego zagubienia się użytkownika w interfejsie.
