import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as Sentry from "@sentry/react";
import {
  LOCALHOST_DOMAIN,
  REPLAYS_ON_ERROR_SAMPLE_RATE,
  REPLAYS_SESSION_SAMPLE_RATE,
  SENTRY_INTEGRATIONS,
  TRACES_SAMPLE_RATE,
} from "./sentry/constants";
import { PostHogProvider } from "posthog-js/react";
import posthog from "posthog-js";

const root = ReactDOM.createRoot(document.getElementById("root"));

posthog.init(process.env.REACT_APP_PUBLIC_POSTHOG_KEY, {
  api_host: process.env.REACT_APP_PUBLIC_POSTHOG_HOST,
});

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: SENTRY_INTEGRATIONS,
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: [
    LOCALHOST_DOMAIN,
    process.env.REACT_APP_BACKEND_APPLICATION_URL,
  ],
  // Performance Monitoring
  tracesSampleRate: TRACES_SAMPLE_RATE,
  // Session Replay
  replaysSessionSampleRate: REPLAYS_SESSION_SAMPLE_RATE,
  replaysOnErrorSampleRate: REPLAYS_ON_ERROR_SAMPLE_RATE,
});

// * Backend must allow sentry headers on their side to avoid CORS issues
// * "Access-Control-Allow-Headers: sentry-trace"
// * "Access-Control-Allow-Headers: baggage"

root.render(
  <React.StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </React.StrictMode>
);
