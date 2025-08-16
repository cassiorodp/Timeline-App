# Timeline React App

## Overview

This project is a **timeline visualization app** built with React and Material UI. It displays event items arranged in compact lanes, with a horizontal scrollable timeline and monthly markers.

---

## How to Run the App

1. Clone the repository:

   ```bash
   git clone git@github.com:cassiorodp/Timeline-App.git
   cd Timeline-App
   ```

2. Install dependencies:

   ```bash
   npm install
    # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
    # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (Vite default).

---

## Technologies and Libraries Used

- React – UI library for building the application.

- Vite – Fast development build tool.

- Material UI – Component library for React with theming and responsive design.

- date-fns – Utility functions for parsing, formatting, and manipulating dates.

- Vitest + React Testing Library – Testing framework and utilities for unit tests.

- Biome.js – Code formatting and linting tool.

---

## What I Like About My Implementation

- **Reusable and composable components**: Timeline, Lane, and MonthAxis are modular and can be used independently.

- **Performance considerations**: Used useMemo to avoid recalculating lanes and timeline boundaries on every render.

- **Responsive timeline**: Scrollable with dynamic lane sizing and month markers.

- **Clear visual hierarchy**: Compact lanes with tooltips for detailed info, making it easy to understand overlapping events.

---

## What I Would Change If I Did It Again

- Add **virtualization** for handling very large timelines with hundreds of events to improve performance.

- Support **dynamic zoom levels** to allow users to zoom in/out of days or months.

- Make the **Lane and MonthAxis components fully customizable** via props for styling and formatting.

## How I Made My Design Decisions

- Looked at other timeline visualizations like **Google Calendar and Microsoft Project** boards for inspiration on lanes and horizontal scrolling.

- Decided to use **Material UI** for theming consistency and ready-made components like Tooltip and Paper.
