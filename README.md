# boilerplate-nextjs
This repository serves as a standardized starting point for new Next.js projects.
## Getting Started

## Prepare

1. Copy the `default.env` file to `.env` and set the needed variables.

## Start
Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Additional Information

## Initialization
This project was initialized using the [Next.js create-next-app](https://nextjs.org/docs/getting-started/installation).

## Linters and pre-commit
Linters have been added to maintain code quality. The pre-commit hook is managed by Husky and can be initialized with:
```bash
yarn prepare
```

## State Management
[Redux](https://redux.js.org/) is used for state management.
