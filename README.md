# Danijel Dragojevic Portfolio

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Selenium WebDriver (for testing)
- TestNG (test framework)

## Getting Started

### Development with Docker (Recommended)

The project uses Docker Compose to manage both the application and test environment. This ensures consistent behavior across different development environments.

#### Prerequisites

- Docker
- Docker Compose V2

#### Running the Application with Tests

```sh
# Start all services (web app, selenium, and tests)
docker compose up --build

# Run only the tests
docker compose run tests

# Run tests with detailed output
docker compose run --rm tests mvn test -Dsurefire.useFile=false

# Run specific test class
docker compose run --rm tests mvn test -Dtest=HomePageTest

# Clean and run tests
docker compose run --rm tests mvn clean test
```

#### Troubleshooting Docker Setup

If you encounter issues:

1. Check container health:

```sh
docker compose ps
```

2. View container logs:

```sh
# View web application logs
docker compose logs web

# View test container logs
docker compose logs tests

# View Selenium container logs
docker compose logs selenium
```

3. Restart services:

```sh
docker compose down
docker compose up --build
```

### Manual Setup

If you prefer to run without Docker, you'll need:

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- Java 17 or later
- Maven
- Chrome browser

Follow these steps:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies
npm i

# Step 4: Start the development server
npm run dev
```

## Test Structure

The test suite is organized following the Page Object Model pattern:

## Deployment

You can deploy this project using any static hosting service like Netlify, Vercel, or GitHub Pages.

## Project Structure

```
portfolio-tests/
├── src/
│ └── test/
│ └── java/
│ └── com/
│ └── portfolio/
│ └── tests/
│ ├── pages/ # Page Object classes
│ │ └── HomePage.java
│ ├── BaseTest.java
│ └── HomePageTest.java
└── pom.xml
```

### Running Tests Locally

To run tests without Docker:

```sh
cd src/test

# Run all tests
mvn clean test

# Run specific test class
mvn test -Dtest=HomePageTest

# Run with custom application URL
mvn test -Dapp.url=http://localhost:8080
```

## Continuous Integration

The project includes GitHub Actions workflows that automatically:

- Build the application
- Run the test suite
- Upload test results as artifacts

Test results are available in the Actions tab of the GitHub repository after each workflow run.

### Test Reports

Test reports can be found:

- In Docker: `/portfolio-tests/target/surefire-reports/`
- In GitHub Actions: As downloadable artifacts
- Locally: `portfolio-tests/target/surefire-reports/`

## Deployment

You can deploy this project using any static hosting service like Netlify, Vercel, or GitHub Pages.
