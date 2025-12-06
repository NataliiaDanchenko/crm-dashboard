# CRM Dashboard Project

This is a **CRM dashboard** project built with **Next.js 13 (App Router)** and **TailwindCSS**, featuring:

- Custom UI components (`CardTop`, `CardRight`, buttons with icons, etc.)
- Responsive grid layouts
- Recharts line chart with custom tooltips and dots
- Google Fonts (`Fixel Display` for headings, `Open Sans` for body text)
- Sidebar navigation with icons
- Header with search, notifications, theme toggle, and avatar

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [License](#license)

---

## Features

- **CardTopList**: Shows key metrics with a small icon and subtitle.  
- **CardRightList**: Detailed info cards with icons and descriptions.  
- **Header**: Search, notifications, theme toggle, and user avatar.  
- **Sidebar**: Navigation with icons and hover effects.  
- **Buttons**: Active/inactive states with optional icons.  
- **Charts**: Line chart using `Recharts` with custom tooltips and highlighted points.  
- **Responsive layouts**: Grids adapt to smaller screens.  
- **Fonts**: `Fixel Display` for headings, `Open Sans` for body text.  

---

## Getting Started

### Prerequisites

- Node.js v18+  
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/crm-dashboard.git
cd crm-dashboard

Install dependencies:

npm install
# or
yarn install


Run the development server:

npm run dev
# or
yarn dev


Open http://localhost:3000
 to view in the browser.

Available Scripts

dev — Run the development server

build — Create a production build

start — Run the production server

lint — Run TypeScript and ESLint checks

Project Structure
.
├── app
│   ├── layout.tsx         # Root layout with sidebar, header, content
│   ├── page.tsx           # Main page (can be empty)
│   └── globals.css        # Global styles
├── components
│   ├── UI
│   │   ├── CardTop.tsx
│   │   ├── CardRight.tsx
│   │   └── Button.tsx
│   ├── Layout
│   │   ├── NavSidebar.tsx
│   │   ├── Header.tsx
│   │   ├── TitleButtons.tsx
│   │   └── Content.tsx
│   └── Icon
│       └── Icon.tsx
├── lib
│   └── mockData.ts        # Mock data for cards and charts
├── assets                  # Images and SVGs
├── public                  # Public assets
├── next.config.js
└── package.json

Technologies

Next.js 13
 (App Router)

TailwindCSS

React

Recharts

Google Fonts

TypeScript

Fonts

Headings: Fixel Display

Body: Open Sans

Imported via Google Fonts in app/layout.tsx:

<link
  href="https://fonts.googleapis.com/css2?family=Fixel+Display:wght@400;700&family=Open+Sans:wght@400;700&display=swap"
  rel="stylesheet"
/>

License

This project is licensed under the MIT License.

Notes

All UI components use TailwindCSS classes.

Buttons support icons that disappear when active.

Charts use custom tooltips and custom dots for highlighting key points.

All cards and layout components are responsive and styled according to design mockups.
