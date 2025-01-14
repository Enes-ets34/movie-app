# Movie App 🍿

Welcome to the **Movie App**, a dynamic and interactive application built with React.js! This app allows users to search movies, and view detailed results.

### Code Quality and Reliability

For ensuring code quality and reliability, the project utilizes _ESLint_, _TypeScript_, _Husky_, and _Prettier_.

---

## **Table of Contents**

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Installation and Setup](#installation-and-setup)

---

## **Features**

- [x] **User Login:** The user is redirected to the login screen when the site first opens. They must log in using email and password.
- [x] **Form Structure:** The login form is built with `react-hook-form`, and validation is handled using `yup`.
  - [x] **Email Validation:** Only email format is validated.
  - [x] **Password Validation:** Password must contain at least 8 characters, one uppercase letter, and one number.
- [x] **Movie List:** After login, the user is redirected to the movie listing page.
  - [x] **Search, Filter, and Sort:** Users can search movies, filter by favorites, and sort by name, release year, or IMDb rating.
  - [x] **Movie Details and Favorites:** Users can view movie details and add/remove movies to/from their favorites.
  - [x] **TV Series Badge:** A badge is shown for TV series movies.
  - [x] **Favorite Count:** The favorite count in the header updates whenever a movie is added or removed.
- [x] **404 Page:** A 404 error page is displayed when an invalid page is accessed.

---

## **Technologies Used**

- **React.js**: Framework for building the user interface.
- **Zustand**: A small, fast state management tool for React, used to manage application-wide state.
- **Context**: A React feature for sharing global state across components without prop drilling.
- **SCSS**: CSS preprocessor that extends CSS with features like variables, nesting, and mixins for easier styling.
- **Typescript**: Superset of JavaScript that adds static typing, providing better tooling and reducing runtime errors.
- **Vite**: Fast build tool and development server for modern web applications, known for its speed and support for hot module replacement.

---

## **Project Structure**

In general, if a component contains other components, I organize those components in a folder named after the Parent Component. This helps me better understand the relationships between components.

Here is the organized folder structure of the project:

```
src/
├── api/                         # API-related files
│   ├── httpRequest.interceptor.ts  # Intercepts HTTP requests for adding tokens or handling errors
│   └── httpRequest.ts            # Makes API requests
├── assets/                       # Static assets like icons, images
│   └── icons/                    # Folder for icon assets
├── components/                   # Reusable components
│   ├── button/                   # Button component folder
│   │   ├── Button.tsx            # Button component
│   │   ├── button.types.ts       # Button component types
│   │   └── button.scss           # Button component styles
│   └── input/                    # Input component folder
│       ├── Input.tsx             # Input component
│       ├── input.types.ts        # Input component types
│       └── input.scss            # Input component styles
├── context/                      # Context for global state management
│   └── auth/                     # Authentication context
│       ├── auth.context.tsx      # Authentication context provider
│       ├── auth.reducer.ts       # Reducer for authentication state management
│       └── auth.types.ts         # Types related to authentication
├── hooks/                        # Custom React hooks
│   ├── useDebounce.ts            # Hook for debouncing values
│   └── useIsMobile.ts            # Hook to check if device is mobile
├── screens/                      # Screen components (views)
│   └── home/                     # Home screen-related files
│       ├── home.types.ts         # Types for the home screen
│       ├── HomeScreen.tsx        # Home component (logic is here)
│       ├── HomeView.tsx          # Home view component (ui elements are here)
│       └── homeView.scss         # Home screen styles
├── services/                     # External services, e.g., movie data
│   └── movieService.ts           # Service for fetching movie data
├── store/                        # State management for features
│   └── movie/                    # Movie store
│       └── useMovieStore.ts      # Hook for managing movie state
├── styles/                       # Global styles
│   ├── _mixins.scss              # SCSS mixins
│   ├── _variables.scss          # SCSS variables (colors, fonts, etc.)
│   └── index.scss               # Global SCSS entry file
├── theme/                        # Theme-related configurations
│   ├── colors.ts                # Color theme configuration
│   └── icons.ts                 # Icon theme configuration
├── types/                         # TypeScript types
│   ├── svg.d.ts                 # Types for SVG imports
│   ├── svg.d.ts                 # Duplicate file (should be removed or renamed)
│   └── vite-env.d.ts            # Vite environment variables types
├── utils/                        # Utility functions
│   ├── classNames.ts            # Utility for managing class names
│   └── handleNavigate.ts        # Utility for navigation handling
├── App.tsx                       # Main React component
├── main.tsx                      # Entry point for the app
└── index.css                     # Global styles for the app

```

---

## **Installation and Setup**

**1. Clone the repository:**
**2. Setup environment variables:**

- Create a .env file in the root directory of your project.
- Inside the .env file, define the necessary environment variables. For example:

```bash
 /.env
 VITE_PUBLIC_BASE_URL=http://localhost:3000
```

```bash
 git clone https://github.com/Enes-ets34/octet-case
 cd octet-case
 yarn install
 yarn run dev
 http://localhost:5173
```

```bash
 cd octet-case
 json-server --watch db.json
 http://localhost:3000
```

## **Or you can run by Docker 🐳**

```bash
 cd octet-case
 yarn docker:build
 # and then
 yarn docker:run
 http://localhost:5173
```
