# GymBeam Case Study - Web Aplikácia

Jednoduchá webová aplikácia vytvorená ako súčasť výberového konania pre GymBeam.

## Cieľ

Vytvoriť webovú aplikáciu pomocou React, Next.js a Tailwind CSS, ktorá zobrazuje zoznam produktov a ich detail pre prihlásených používateľov pomocou Fake Store API.

## Funkčné požiadavky

- Prihlásenie používateľa (registrácia je voliteľná a nie je implementovaná).
- Zobrazenie zoznamu produktov a detailu produktu pre prihlásených používateľov.
- Odhlásenie používateľa.
- Operácie s košíkom nie sú súčasťou.

## Ne-funkčné požiadavky

- Aplikácia beží plynule v populárnych prehliadačoch.
- Konzistentné UI pre dobrý užívateľský zážitok.
- Zachovanie identity značky GymBeam (použitá oranžová farba #fb5402 a logo).
- Použitie Fake Store API ako zdroja dát.
- Projekt je spustiteľný lokálne.
- Responzívny dizajn s hamburger menu pre mobilné zariadenia.

## Použité technológie

- [Next.js](https://nextjs.org/) (React framework)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fake Store API](https://fakestoreapi.com/)

## Inštalácia a spustenie

1.  **Naklonujte repozitár (ak je k dispozícii) alebo rozbaľte súbory projektu.**
2.  **Prejdite do koreňového adresára projektu `gymb`:**
    ```bash
    cd gymb
    ```
3.  **Nainštalujte závislosti:**
    ```bash
    npm install
    # alebo
    yarn install
    ```
4.  **Spustite vývojový server:**
    ```bash
    npm run dev
    # alebo
    yarn dev
    ```
5.  **Otvorte prehliadač** a prejdite na adresu [http://localhost:3000](http://localhost:3000).

## Prihlasovacie údaje (Testovacie)

Pre prihlásenie môžete použiť nasledujúce testovacie údaje poskytnuté Fake Store API:

-   **Používateľské meno:** `morb_2314`
-   **Heslo:** `83r5^_`

## Štruktúra projektu

-   `/app`: Hlavné stránky aplikácie (routing pomocou App Router)
    -   `/login`: Prihlasovacia stránka
    -   `/products`: Stránka so zoznamom produktov
    -   `/products/[id]`: Dynamická stránka pre detail produktu
    -   `page.tsx`: Vstupný bod aplikácie (presmerovanie)
    -   `layout.tsx`: Hlavný layout
    -   `globals.css`: Globálne štýly
-   `/components`: Znovu použiteľné React komponenty
    -   `Header.tsx`: Navigačná lišta s logom a navigáciou
    -   `Footer.tsx`: Pätička stránky s informáciami
    -   `Layout.tsx`: Hlavný layout s header a footer
-   `/contexts`: React kontexty (AuthContext)
-   `/public`: Statické súbory (logo, favicon, ikony)
-   `/types`: TypeScript typové definície

## Dizajnové detaily

- **Farby**: 
  - Primárna farba: #fb5402 (oranžová GymBeam)
  - Pozadie: biela
  - Sekundárne prvky: čierna (banner s benefitmi)
- **Responzívny dizajn** s prispôsobením pre mobilné zariadenia
- **Produktové karty** s 3D efektom
- **Benefity zobrazené** v čiernom banneri:
  - 6M+ spokojných zákazníkov
  - Rýchle dodanie
  - Doprava zadarmo
  - Široký sortiment
