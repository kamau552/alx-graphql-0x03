import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://your-public-dsn@sentry.io/project-id', // Same DSN
  tracesSampleRate: 1.0,
});