# Contributing to Ketaki Bharati's Portfolio

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Help others learn and grow

## How to Contribute

### Reporting Bugs

Before creating a bug report:
- Check existing issues to avoid duplicates
- Provide a clear, descriptive title
- Include steps to reproduce the issue
- Describe the observed behavior and expected behavior
- Include screenshots if relevant

### Suggesting Enhancements

When suggesting features:
- Use a clear, descriptive title
- Provide a step-by-step description
- Explain why this enhancement would be useful
- List related projects that may have similar features

### Submitting Changes

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Maintain TypeScript strict mode
   - Add comments for complex logic
   - Update relevant documentation

4. **Test your changes**
   ```bash
   npm run lint
   npm run test
   npm run build
   ```

5. **Commit your changes**
   ```bash
   git commit -m "Add your clear commit message"
   ```

6. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**
   - Provide a clear description of changes
   - Link any related issues
   - Include screenshots if applicable

## Style Guide

### Code Style

- Use TypeScript for type safety
- Follow the existing code format
- Use meaningful variable names
- Keep components small and focused

### Commit Messages

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters
- Reference issues and pull requests

Example:
```
Add dark mode toggle to Navbar

- Implement useDarkMode hook
- Add toggle button with smooth transition
- Persist preference to localStorage

Closes #123
```

### Component Structure

```typescript
// Imports
import { useState } from 'react';
import { motion } from 'framer-motion';

// Types (if needed)
interface ComponentProps {
  title: string;
}

// Component
export const Component: React.FC<ComponentProps> = ({ title }) => {
  const [state, setState] = useState(false);

  return (
    <motion.div>
      {title}
    </motion.div>
  );
};

export default Component;
```

## Project Structure

```
src/
├── components/    # Reusable UI components
├── pages/         # Page-level components
├── data/          # Content and configuration
├── hooks/         # Custom React hooks
└── utils/         # Helper functions
```

## Testing

- Write tests for new features
- Maintain test coverage
- Run tests before submitting PR

```bash
npm run test
npm run test:coverage
```

## Documentation

- Update README.md if adding features
- Document new components with JSDoc comments
- Keep inline comments clear and concise

## Development Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Run linter
npm run lint

# Run tests
npm run test

# Build for production
npm run build
```

## Performance Guidelines

- Keep bundle size in mind
- Use code splitting for large components
- Optimize images and assets
- Lazy load components when appropriate

## Accessibility

- Follow WCAG AA guidelines
- Add semantic HTML
- Include ARIA labels for icon buttons
- Ensure keyboard navigation works
- Test with screen readers

## Security

- Don't commit sensitive data (API keys, tokens)
- Validate form input
- Use environment variables for configuration
- Keep dependencies updated

## Need Help?

- Check existing issues and discussions
- Review the README for setup instructions
- Look at similar components for patterns
- Ask questions in pull request comments

## Recognition

Contributors will be recognized in:
- GitHub contributors section
- Project acknowledgments (if significant)

Thank you for contributing to make this portfolio better! 🙏
