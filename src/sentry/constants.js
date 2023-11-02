import * as Sentry from "@sentry/react";

export const SENTRY_INTEGRATIONS = [
  new Sentry.BrowserTracing(),
  new Sentry.Replay(),
];

export const LOCALHOST_DOMAIN = "localhost";

export const TRACES_SAMPLE_RATE = 1.0; // Capture 100% of the transactions

export const REPLAYS_SESSION_SAMPLE_RATE = 0.1; // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.

export const REPLAYS_ON_ERROR_SAMPLE_RATE = 1.0; // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
