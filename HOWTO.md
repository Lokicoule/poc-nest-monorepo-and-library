# HOW TO

- Create project

  > nest new my-project

- Convert to monorepo
  > cd my-project
  > nest generate app my-app

- Create lib

  > nest generate library my-lib

- Update tsconfig
  > "paths": {
      "@my-lib": ["libs/core/src"],
      "@my-lib/*": ["libs/core/src/*"]
  }
