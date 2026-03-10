# Gendiff

[![Actions Status](https://github.com/yonkis1995/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/yonkis1995/frontend-project-46/actions)
[![CI](https://github.com/yonkis1995/frontend-project-46/actions/workflows/ci.yml/badge.svg)](https://github.com/yonkis1995/frontend-project-46/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=yonkis1995_frontend-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=yonkis1995_frontend-project-46)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=yonkis1995_frontend-project-46&metric=coverage)](https://sonarcloud.io/summary/new_code?id=yonkis1995_frontend-project-46)

**Gendiff** is a CLI utility that compares two configuration files and shows the difference between them.
The tool supports **JSON** and **YAML** formats and can output differences in several representations.

# Features

- Compare configuration files
- Supports **JSON** and **YAML** formats
- Correct handling of **nested structures**
- Multiple output formats:
  - `stylish` (default)
  - `plain`
  - `json`
- Simple and convenient CLI interface
- Automated tests with **Jest**
- Static code analysis with **ESLint**
- Continuous Integration via **GitHub Actions**
- Code quality monitoring via **SonarCloud**

# Installation

**Clone the repository and install dependencies:**

```bash
git clone https://github.com/yonkis1995/frontend-project-46.git
cd frontend-project-46
make install
```

# Examples

**Compare JSON files (default stylish format)**

```bash
gendiff file1.json file2.json
```

**Plain format**

```bash
gendiff --format plain file1.json file2.json
```

**JSON format**

```bash
gendiff --format json file1.json file2.json
```

# Demo usage

**Flat JSON comparison (stylish)**
[![asciicast](https://asciinema.org/a/2Cna6d5kO6b5Q1bJ.svg)](https://asciinema.org/a/2Cna6d5kO6b5Q1bJ)
**Flat YAML comparison (stylish)**
[![asciicast](https://asciinema.org/a/5xcU62jZOrFDqSTy.svg)](https://asciinema.org/a/5xcU62jZOrFDqSTy)
**Nested structures comparison (stylish)**
[![asciicast](https://asciinema.org/a/1tzjtrh1uGHMvDSP.svg)](https://asciinema.org/a/1tzjtrh1uGHMvDSP)
**Nested structures comparison (plain)**
[![asciicast](https://asciinema.org/a/gvCRPBflJNLX8NLB.svg)](https://asciinema.org/a/gvCRPBflJNLX8NLB)
**Nested structures comparison (json)**
[![asciicast](https://asciinema.org/a/5gC8XVWPcpsvc8qy.svg)](https://asciinema.org/a/5gC8XVWPcpsvc8qy)

# Development

**Install dependences**

```bash
make install
```

**Run linter**

```bash
make lint
```

**Run tests**

```bash
make test
```

# Technologies

- Node.js
- Commander.js
- js-yaml
- Jest
- ESLint
- GitHub Actions
- SonarCloud
