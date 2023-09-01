# Simple Boilerplate FE and BE

## requirements
[ ] unit testing
[ ] code linting
[x] initial project structure
[ ] build scripts
[x] typescript
[ ] husky

## stacks
[x] NX, monorepo tooling, to manage multiple apps and tools with through single tool
[x] pnpm, alternative to npm that enables smart modules installation
[x] fastify  used as the backend framework

## commands
- `pnpm api:serve` to run backend
- `pnpm nx g @nx/node:lib library-name` to create a new backend library
- `pnpm nx affected -t test` to run test on affected module on changes, will be useed on husky