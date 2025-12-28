Web Automation Project: Gmail Login Flow
Overview
This project is a comprehensive automated test suite for the Gmail login process, built from scratch using Playwright and TypeScript.

The main goal of this project was to design a scalable Page Object Model (POM) infrastructure capable of handling complex web interactions, dynamic elements, and multi-step flows.

Architecture & Tech Stack
Framework: Playwright

Language: TypeScript

Design Pattern: Page Object Model (POM)

Concepts: Custom Locators, Async/Await patterns, Configuration Management.

What’s Inside
E2E Scenarios: Covering various login flows, including edge cases and validation messages.

Modular Design: Clear separation between test logic and page elements for high maintainability.

Technical Note (Maintenance & Locators)
Dynamic Environment: Since Google frequently updates its UI and security measures, this project serves as a Template and Architectural Example.

Focus on Strategy: The emphasis was placed on building a clean, reusable code structure rather than continuous maintenance against a live third-party production environment.

Ongoing Refinement: One specific complex flow is currently under investigation to optimize its stability.

Setup
npm install
npx playwright test
