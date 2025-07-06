import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://your-public-dsn@sentry.io/project-id', // Replace with your real DSN from Sentry project settings
  tracesSampleRate: 1.0,
});