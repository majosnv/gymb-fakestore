# GymBeam Case Study - Web Application

A simple web application created for GymBeam.

Live demo: https://gymb-fakestore.netlify.app/

## Goal

Create a web application using React, Next.js and Tailwind CSS that displays a list of products and their details for logged-in users using the Fake Store API.

## Technologies Used

- [Next.js]
- [React]
- [Tailwind CSS]
- [TypeScript]
- [Fake Store API]

## Installation and Running

1.  **Clone the repository from GitHub:**
    ```bash
    git clone https://github.com/majosnv/gymb-fakestore.git
    ```

2.  **Navigate to the project root directory:**
    ```bash
    cd gymb-fakestore
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5.  **Open your browser** and go to [http://localhost:3000](http://localhost:3000).

## Login Credentials (Testing)

For login, you can use the following test credentials provided by Fake Store API:

-   **Username:** `morb_2314`
-   **Password:** `83r5^_`

## Project Structure

-   `/app`: Main application pages (routing using App Router)
    -   `/login`: Login page
    -   `/products`: Products list page
    -   `/products/[id]`: Dynamic page for product detail
    -   `page.tsx`: Application entry point (redirection)
    -   `layout.tsx`: Main layout
    -   `globals.css`: Global styles
-   `/components`: Reusable React components
    -   `Header.tsx`: Navigation bar with logo and navigation
    -   `Footer.tsx`: Page footer with information
    -   `Layout.tsx`: Main layout with header and footer
-   `/contexts`: React contexts
    -   `AuthContext.tsx`: Context for user authentication management
-   `/public`: Static files (logo, favicon, icons)
    -   `gymbeam-logo.png`: GymBeam logo
    -   `favicon.png`: Page icon
    -   other SVG icons for UI components
-   `/types`: TypeScript type definitions
    -   `index.ts`: Type definitions for products and users
-   Configuration files:
    -   `package.json`: Project dependencies and scripts
    -   `tsconfig.json`: TypeScript settings
    -   `next.config.ts`: Next.js configuration
    -   `postcss.config.mjs`: PostCSS configuration for Tailwind

## Design Details

- **Colors**: 
  - Primary color: #fb5402 (GymBeam orange)
  - Background: white
  - Secondary elements: black (benefits banner)
- **Responsive design** with adaptation for mobile devices
- **Product cards** with 3D effect

## Development and Extension

For project extension:
1. Add shopping cart and order functionality
2. Implement registration for new users
3. Expand product details with reviews and ratings