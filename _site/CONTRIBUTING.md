# Contributing to Eklavya

First off, thanks for taking the time to contribute! 🎉

## Getting Started

### Prerequisites

*   **Ruby:** Ensure you have Ruby installed. You can check by running `ruby -v`. If not installed, follow the instructions on the [official Ruby website](https://www.ruby-lang.org/en/documentation/installation/).
*   **Bundler:** Install Bundler: `gem install bundler`.
*   **Jekyll:** Install Jekyll: `gem install jekyll`.
*   **Docker (Optional):** If you prefer using Docker, make sure you have Docker installed and running. You can download it from the [official Docker website](https://www.docker.com/products/docker-desktop).

### Local Setup

1.  **Fork & Clone:**
    *   Fork the repository on GitHub.
    *   Clone your forked repository to your local machine:
        ```bash
        git clone https://github.com/YOUR_USERNAME/eklavya.github.io.git
        cd eklavya.github.io
        ```

2.  **Install Dependencies:**
    *   Navigate to the project directory and install the required gems:
        ```bash
        bundle install
        ```

3.  **Serve the Site (Jekyll):**
    *   To build and serve the site locally using Jekyll:
        ```bash
        bundle exec jekyll serve --livereload
        ```
    *   Open your browser and go to `http://localhost:4000` to see the site. The `--livereload` flag will automatically refresh the page when you make changes.

4.  **Serve the Site (Docker - Optional):**
    *   If you prefer using Docker, you can use the provided `docker-compose.yml` or `docker-local.yml`.
    *   Using `docker-compose.yml` (for a production-like environment):
        ```bash
        docker-compose up
        ```
    *   Using `docker-local.yml` (for local development with live reload):
        ```bash
        docker-compose -f docker-local.yml up
        ```
    *   The site will typically be available at `http://localhost:4000` or `http://localhost:8080` depending on the Docker configuration. Check the `docker-compose` file for the exact port mapping.

### Making Changes

1.  **Create a Branch:** Create a new branch for your feature or bug fix:
    ```bash
    git checkout -b my-awesome-feature
    ```
2.  **Code:** Make your changes.
3.  **Test:** Ensure your changes work as expected and don't break anything.
4.  **Commit:** Commit your changes with a clear and concise commit message:
    ```bash
    git commit -m "feat: Add awesome feature"
    ```
    (Consider using [Conventional Commits](https://www.conventionalcommits.org/) for your commit messages.)
5.  **Push:** Push your changes to your forked repository:
    ```bash
    git push origin my-awesome-feature
    ```
6.  **Create a Pull Request:** Open a pull request from your forked repository to the main `eklavya.github.io` repository. Provide a clear description of your changes.

## Style Guide

*   Follow the existing code style.
*   For CSS/Sass, try to adhere to the established patterns in `_sass/`.

## Reporting Bugs

If you find a bug, please open an issue on GitHub and provide as much detail as possible, including:
*   Steps to reproduce the bug.
*   Expected behavior.
*   Actual behavior.
*   Screenshots (if applicable).
*   Your environment (OS, browser, versions).

## Suggesting Enhancements

If you have an idea for an enhancement, feel free to open an issue to discuss it.

Thank you for contributing! 