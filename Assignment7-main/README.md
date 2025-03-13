# TechHaven - E-commerce Website

## Project Description

TechHaven is a two-page e-commerce website focusing on tech gadgets. The website includes a homepage showcasing featured products and categories, and a products page with detailed product listings and student discounts. The design emphasizes a clean, modern user interface with responsive elements.

## Domain

The domain chosen for this website is an online tech store.

## CSS Layout

###   CSS Grid Layout

* **Categories Section:** The categories section on the homepage (`#Categories`) uses CSS Grid to display product categories in a responsive grid layout. [cite: 19, 20, 21, 22, 23, 24, 25, 26] The grid adapts to different screen sizes using `grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));` [cite: 20]
* **Featured Products and Product List:** The featured products section on the homepage and the product listing on the products page use CSS Grid to display products in a structured and responsive manner. [cite: 84, 85] The grid layout is defined in `.grid-layout` and extended in `.featured-products .product-grid` and `.product-list .grid-layout`. [cite: 93, 94]

###   Flexbox Layout

* **Navigation Bar:** The navigation bar (`.navbar`) uses Flexbox to align the logo and navigation links horizontally, providing flexible spacing and alignment. [cite: 5, 6, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62]
* **Footer Social Icons:** The social icons in the footer (`footer .social-icons`) are displayed using Flexbox to ensure proper spacing and alignment of the icons. [cite: 46, 47, 48, 49, 50, 51, 52]
* **Hero Section:** The hero section (`.hero-section`) uses Flexbox to center its content vertically and horizontally. [cite: 87, 88, 89, 90, 91]
* **Flex Container:** The `.flex-container` class uses Flexbox to align its children. [cite: 82, 83, 84]

##   SASS/SCSS Features

###   Variables

* Variables are used to store and reuse values throughout the stylesheet, promoting consistency and simplifying updates. [cite: 9, 10, 11]
    * `$primary-color: #0047ab;`
    * `$secondary-color: #ffffff;`
    * `$accent-color: #ff6f61;`
    * `$font-family-base: 'Montserrat', sans-serif;`
    * `$font-size-base: 16px;`
    * `$box-shadow-base: 0 2px 10px rgba(0, 0, 0, 0.1);`
    * `$breakpoint-mobile: 800px;`
    * `$padding-base: 10px;`
    * `$margin-base: 20px;`
    * `$grid-columns: 12;`
    * `$gutter-width: 20px;`
    * `$border-radius-base: 8px;`

###   Custom Properties

* CSS custom properties (CSS variables) are integrated alongside SASS variables for managing styles.
    * `--margin-mobile: 222px;` is defined in the `:root` selector and used within media queries. [cite: 80, 81, 82, 99, 220]

###   Nesting

* Nesting is used to organize styles hierarchically, reflecting the HTML structure and improving readability. [cite: 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 43, 44, 45, 46, 49, 50, 51, 52, 55, 56, 60, 61, 62, 74, 75, 76, 84, 86, 87, 111, 112, 113, 114, 115, 116, 117, 122, 123, 124, 125, 126, 127, 128, 129, 13, 131, 132, 133, 145, 146, 147, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184]
    * Example:

        ```scss
        #Categories {
          h2 {
            font-size: 3rem;
            text-align: center;
            color: $primary-color;
          }
          .categories-grid {
            display: grid;
            // ... more styles
            .category-#{$category} { // Styles for each category item
              // ... styles
              &:hover {
                transform: scale(1.05);
              }
              i { // Icon styles
                // ... styles
              }
              span { // Text styles
                // ... styles
              }
            }
          }
        }
        ```
        

###   Interpolation

* Interpolation is used for dynamic generation of selectors or values. [cite: 21]
    * ` .category-#{$category} { ... }` - This is used within the `@each` loop to create unique class names for each category item (e.g., `.category-laptop`, `.category-smartphone`).

###   Placeholder Selectors

* Placeholder selectors define reusable styles that can be extended by other selectors. [cite: 11, 12, 13, 14]
    * `%button-base { ... }` - Defines common button styles, extended by `.button-primary` and `.button-accent`.

###   Mixins

* Mixins are used to define reusable blocks of CSS properties. [cite: 3, 4, 5, 6, 7, 8, 82, 83, 84, 85, 86, 87]
    * `@mixin box-shadow($size: 10px) { ... }` - Creates a box-shadow with a specified size.
    * `@mixin hover-transition { ... }` - Adds a smooth transition effect for hover states.
    * `@mixin flex-center { ... }` - Centers elements using Flexbox.
    * `@mixin responsive-font-size($size) { ... }` - Adjusts font sizes based on screen width.
    * `@mixin respond-to($breakpoint) { ... }` - Generates media queries.
    * `@mixin flex-center { ... }` - Centers elements using Flexbox.

###   Functions

* Functions are used to perform operations and return values within SCSS. [cite: 1, 2]
    * `@function lighten-color($color, $percentage) { ... }` - Lightens a color by a specified percentage.
    * `@function grid-width($columns) { ... }` - Calculates grid column widths.

###   Additional SASS/SCSS Features

* **@extend with multiple selectors:** The `@extend` directive is used to extend styles from multiple selectors, applying common styles. [cite: 73, 74, 93, 140, 141, 142, 143, 144]
    * `@extend .grid-layout;`
    * `@extend %button-base;`
* **Color functions:** Built-in color functions like `lighten()` are used to manipulate colors dynamically. [cite: 13, 14, 21, 51, 61, 87]
    * `background-color: lighten($primary-color, 10%);`
* **Media Queries in Mixins:** Media queries are included within mixins to create responsive styles. [cite: 6, 7, 8]
    * `@mixin responsive-font-size($size) { ... @media (max-width: 768px) { ... } }`
* **Modularization with Imports:** SCSS files are organized into multiple directories and imported into the main SCSS file, promoting modularity and maintainability. [cite: 218, 219]
    * `@import 'base/variables';`
    * `@import 'components/buttons';`
    * `@import 'layout/grid';`


###   Instructions for Setting Up and Running the Project

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    ```
2.  **Install dependencies (if applicable):**
    * If the project uses a package manager like npm or yarn, install the dependencies:
        ```bash
        npm install
        # or
        yarn install
        ```
3.  **Compile SCSS to CSS:**
    * Ensure you have a SCSS compiler installed (e.g., Dart Sass).
    * If using npm scripts, there might be a command defined in `package.json` (e.g., `npm run build-css` or `yarn run build-css`).
    * You can also use a command-line tool:
        ```bash
        sass scss/main.scss css/main.css --watch --style=expanded
        ```
        * `scss/main.scss`: Your main SCSS file.
        * `css/main.css`: The output CSS file.
        * `--watch`: Automatically re-compiles when SCSS files change.
        * `--style=expanded`: Formats the CSS for readability.
4.  **Open the HTML:**
    * Open `index.html` or `products.html` in your web browser.

##   Submission

* The project is uploaded to a private GitHub repository using a Northeastern email account.
* A ZIP file of the project is submitted on Canvas.
* The GitHub URL of the repository is included in the Canvas remarks.
* Submission timestamps on Canvas and GitHub will both be considered.

