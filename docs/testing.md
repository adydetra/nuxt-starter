# Development & Quality Assurance

Commands and workflows for linting, code preparation, and build validation.

## Commands

```bash
# Run local development server
bun run dev

# Generate Nuxt type declarations and cache
bun run postinstall # or nuxt prepare

# Run ESLint validation
bun run lint

# Auto-fix ESLint issues
bun run lint:fix

# Build for production deployment
bun run build

# Generate static pre-rendered site
bun run generate

# Preview production build locally
bun run preview
```

## Quality Checklist

Before opening a pull request or pushing commits:
1. Ensure `bun run lint` passes without errors.
2. Verify `bun run build` (or `bun run generate`) completes without errors.
