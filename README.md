# Savage Worlds Character Builder

A modular React + TypeScript application for building tabletop RPG characters using Savage Worlds mechanics. Supports Hindrance and Edge selection with built-in rule validation and customization.

---

## 🔧 Features

- Hindrance Selector with filtering by category and tag
- Enforces 4-point Hindrance cap (Major = 2, Minor = 1)
- Toggle add/remove functionality with real-time validation
- Dynamic reward system based on Hindrance points
- Modular component architecture for scalability
- Typed models for characters, hindrances, edges, and skills

---

## 🧩 Tech Stack

- [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- Modular component design
- State management via `useState`
- Utility-driven rule validation

---

## 🚀 Getting Started

```bash
npm install
npm run dev   # or npm start
```

## TODO:

- Integrate useCharacter to use the character object from App.tsx

- Add a skill points. Characters should start with 12 points to spend.
- Add hindrance points and allow the character to spend them on attributes, edges, skills or funds.
- Add attribute points
