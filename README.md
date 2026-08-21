# Northstar Tactical Logistics

Strona wizytówka Northstar Tactical Logistics (NTL Group) — logistyka obronna
i mobilność strategiczna, HQ Poznań.

**Podgląd na żywo:** https://damiandomzalski.com/northstar-site/

> Adres `damiandomzalski.github.io/northstar-site/` przekierowuje w to samo
> miejsce — Pages dziedziczy domenę własną skonfigurowaną na koncie.
> Znacznik `<link rel="canonical">` w `index.html` wskazuje na docelową
> domenę klienta (`ntl-g.com`), więc podgląd nie konkuruje z nią w wynikach
> wyszukiwania. Przy wdrożeniu produkcyjnym nic nie trzeba w tym miejscu
> zmieniać.

## Uruchomienie

Nie ma kroku budowania ani zależności. Wystarczy otworzyć plik:

```bash
open index.html
```

Albo, jeśli wolisz serwer lokalny:

```bash
python3 -m http.server 8000   # → http://localhost:8000
```

## Struktura

Całość to jeden plik `index.html` (~137 KB): HTML, CSS i JS w jednym miejscu,
bez frameworka i bez procesu build. Jedyna zewnętrzna zależność sieciowa to
Google Fonts — cała grafika jest wektorowa i osadzona w pliku.

Arkusz stylów dzieli się na ponumerowane sekcje:

| Sekcja | Zawartość |
|---|---|
| 01 | Tokeny designu (kolory, typografia, metryki, animacje) |
| 02 | Reset i style bazowe |
| 03 | Sekwencja startowa |
| 04 | Powłoka aplikacji — nagłówek, nawigacja, pasek statusu |
| 05 | Prymitywy układu |
| 06 | Strona główna i hero |
| 07 | Moduły poszczególnych podstron |
| 08 | Formularze |
| 09 | Animacje i ujawnianie przy scrollu |
| 10 | RWD |
| 11 | Ograniczony ruch i wydruk |

Skrypt jest podzielony na moduły A–G (routing, aktywacja sekcji, menu mobilne,
zegar, formularz, ekran startowy).

## Decyzje techniczne

- **Routing po fragmencie URL.** Każda zakładka to zwykły `<a href="#sekcja">`,
  więc działa wstecz/dalej w przeglądarce, „kopiuj adres linku" i otwieranie
  sekcji w nowej karcie. Tabela `ROUTES` w skrypcie jest jedynym źródłem prawdy
  dla nawigacji desktopowej, mobilnej i tytułu dokumentu.
- **Zero zdjęć stockowych.** Wszystkie ilustracje to autorski SVG: siatka globu
  z trasami, diagram sieci NTL Group, radar zasięgu sojuszniczego, schemat
  terminala paliwowego i rysunek techniczny zestawu niskopodwoziowego. Nic nie
  może zwrócić 404 ani załadować niewłaściwej treści.
- **Stan awaryjny = stan poprawny.** Liczniki mają zabezpieczenie czasowe
  gwarantujące końcową wartość, wskaźniki nie używają `animation-fill-mode`
  (brak animacji daje pełny pasek, nie pusty), ekran startowy ma bezpiecznik
  czysto w CSS, a treść jest ukrywana wyłącznie wtedy, gdy JavaScript faktycznie
  działa (klasa `.js`).
- **Dostępność.** Kontrast każdego tokenu tekstowego wynosi minimum 5,04:1,
  zoom nie jest zablokowany, jest skip link, widoczne obramowania fokusu,
  `aria-current` na aktywnej zakładce, powiązane etykiety pól i obsługa
  `prefers-reduced-motion`.
- **Formularz kontaktowy** waliduje pola po stronie klienta i składa gotową
  wiadomość w kliencie pocztowym użytkownika. Nie ma backendu i nic nie jest
  wysyłane do zewnętrznego serwisu.

## Źródło treści

Treść merytoryczna pochodzi z dokumentu kierowniczego Northstar Tactical
Logistics (propozycja współpracy strategicznej). Stamtąd pochodzą kompetencje,
obszary współpracy, porty, technologie dronowe, skład zespołu oraz dane
kontaktowe. Poświadczenia podane na stronie to **NCAGE 9CZ9H** i
**UEI S9EYKVSLRSQ5** wraz z formułą „Registered for U.S. and E.U. Government
Contracting" — użytą dokładnie w brzmieniu z dokumentu.

NCAGE i UEI to identyfikatory dostawcy odpowiednio w systemie kodyfikacyjnym
NATO i w amerykańskim SAM.gov. Identyfikują zarejestrowany podmiot i nie są
certyfikacją ani potwierdzeniem członkostwa — strona nazywa je wprost
rejestracjami i nie używa godła NATO.

## Do uzupełnienia

Flagi w pierścieniu NTL Group są przygotowane pod linkowanie, ale nie mają
jeszcze adresów. Aby włączyć odnośnik, wystarczy dodać `href` do kotwicy danej
spółki w sekcji ABOUT:

```html
<a class="ring-flag" data-company="OilGaz" href="https://przyklad.pl">
```

Bez atrybutu `href` flaga renderuje się jako zwykły tekst, więc nigdzie nie
powstaje martwy odnośnik. Dotyczy: DelMarSolutions, OilGaz, Trustlayer365,
SecurityLegal, JJB&JPP Marine, BetonNowak.

Dane w sekcji FUEL (parametry dostaw OilGaz, huby) pochodzą z pierwotnej wersji
strony i nie były weryfikowane wobec dokumentu kierowniczego.

## Historia

Pierwszy commit zawiera wersję oryginalną. Drugi to przebudowa — pełny zakres
zmian pokazuje:

```bash
git diff HEAD~1 HEAD -- index.html
```
