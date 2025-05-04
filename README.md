# GymBeam Case Study - Web Aplikácia

Jednoduchá webová aplikácia vytvorená pre GymBeam.

## Cieľ

Vytvoriť webovú aplikáciu pomocou React, Next.js a Tailwind CSS, ktorá zobrazuje zoznam produktov a ich detail pre prihlásených používateľov pomocou Fake Store API.

## Použité technológie

- [Next.js]
- [React]
- [Tailwind CSS]
- [TypeScript]
- [Fake Store API]

## Inštalácia a spustenie

1.  **Naklonujte repozitár z GitHubu:**
    ```bash
    git clone https://github.com/majosnv/gymb-fakestore.git
    ```

2.  **Prejdite do koreňového adresára projektu:**
    ```bash
    cd gymb-fakestore
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
-   `/contexts`: React kontexty
    -   `AuthContext.tsx`: Kontext pre správu autentifikácie používateľa
-   `/public`: Statické súbory (logo, favicon, ikony)
    -   `gymbeam-logo.png`: Logo GymBeam
    -   `favicon.png`: Ikona stránky
    -   ďalšie SVG ikony pre UI komponenty
-   `/types`: TypeScript typové definície
    -   `index.ts`: Definície typov pre produkty a používateľa
-   Konfiguračné súbory:
    -   `package.json`: Závislosti projektu a skripty
    -   `tsconfig.json`: Nastavenia TypeScript
    -   `next.config.ts`: Konfigurácia Next.js
    -   `postcss.config.mjs`: Konfigurácia PostCSS pre Tailwind

## Dizajnové detaily

- **Farby**: 
  - Primárna farba: #fb5402 (oranžová GymBeam)
  - Pozadie: biela
  - Sekundárne prvky: čierna (banner s benefitmi)
- **Responzívny dizajn** s prispôsobením pre mobilné zariadenia
- **Produktové karty** s 3D efektom

## Vývoj a rozšírenie

Pre rozšírenie projektu:
1. Pridať funkcionalitu košíka a objednávok
2. Implementovať registráciu nových používateľov
3. Rozšíriť detaily produktu o recenzie a hodnotenia