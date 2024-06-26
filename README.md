# Test Project (Barman)

## NOTES

**importatnt**

>[!IMPORTANT]
>I tried to use `mockapi.io` as a mock server but I had lots of issues, it sends back wrong response on requests and on posting new data it creates a random resource 

>[!IMPORTANT]
>While I acknowledge the importance of visually appealing design, this project overview primarily focuses on reviewing the architecture of React/Next.js. As such, I won't be dedicating attention to design elements in this context.
>However, it's worth noting that I bring three years of experience working as a graphic designer. I am proficient in creating website designs, familiar with tools such as Figma, Adobe Illustrator, and Photoshop. Despite the emphasis on architecture in this review, my design skills complement my overall capabilities.
>In this preview, my focus lies on assessing the project structure, tooling, and other relevant aspects essential for React/Next.js development.

>[!IMPORTANT]
>I want to address the task concerning the usability of selecting product variants. Frankly, I misunderstood the requirements initially. The task was to "Develop an Options Selector component for choosing product variants. Ensure that the component updates the product details dynamically."
>I didn't implement this feature because I generate product details and pages using ISR (Incremental Static Regeneration), which I believe is the appropriate approach for this scenario.

>[!IMPORTANT]
> In a real-world scenario, I typically generate types related to backend resources using Swagger Typescript API. This approach significantly reduces errors and ensures a more persistent design. However, in the case of the mockapi, no Swagger documentation is provided, limiting the ability to generate types automatically.

## Project Setup

### Husky and lint-staged
Husky and lint-staged have been integrated into this project to ensure consistent styling and linting standards across various development environments and among different developers. Additionally, Prettier and ESLint have been added to meet the requirements of Husky and lint-staged.

### Tailwind
Tailwind CSS is utilized in this project for efficient styling and rapid development of user interfaces.

### Redux and Redux-Query
Redux and Redux-Query are employed for managing global states and handling API calls for data that need to be accessible throughout the application.

### SWR
SWR is utilized for efficient data fetching in components, providing seamless integration with React applications.

### Formik and Formik-mui
Formik and Formik-mui are used for managing form state and handling form submissions, ensuring a smooth user experience in form interactions.

### .env
Environmental variables are managed using .env files, allowing for secure configuration of sensitive data and settings within the project.

### File Structrue

#### Why `@/material`?

The @/material directory serves the purpose of exporting default Material components. Often, there arises a need to modify a component or add features to it over time. By centralizing the import and export of components in one location, it ensures greater consistency and facilitates easier modification in the future.

>[!TIP]
> I believe the rest of the file structure is self-explanatory.

## How to use it

### After Installation

```sh
$npm run post-install
```

```sh
$chmod +x .husky/pre-commit
```

```sh
$npm run build
```

```sh
$npm run serve
```