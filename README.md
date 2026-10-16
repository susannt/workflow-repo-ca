# Workflow repo for the CA

## Installation

Install the project dependencies:

    npm install

## Development

Start the local development server:

    npm run start

Start Tailwind CSS in watch mode:

    npm run dev

## Testing

### Vitest

Run the unit tests:

    npm run test

### Playwright

Run the end-to-end tests:

    npx playwright test

Run the tests in a specific browser:

    npx playwright test --project=chromium
    npx playwright test --project=firefox
    npx playwright test --project=webkit

Open the Playwright HTML report:

    npx playwright show-report

## Environment Variables

The Playwright login tests require the following environment variables:

    TEST_USER_EMAIL=
    TEST_USER_PASSWORD=

Create a .env file in the project root and add your own values.

The .env file is included in .gitignore and should not be committed to the repository.

## Development Tools

This project uses:

- ESLint for JavaScript linting
- Prettier for code formatting
- Husky and lint-staged for pre-commit hooks
- Vitest for unit testing
- Playwright for end-to-end testing

