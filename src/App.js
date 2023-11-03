import { usePostHog } from "posthog-js/react";

export const TITLE = "Sentry 101";

function App() {
  const posthog = usePostHog();
  const handleThrowError = () => {
    throw new Error("Hello from Sentry");
  };

  const handlePosthogCaptureEvent = () => {
    posthog?.capture("Capturing Event", { library: "posthog" });
  };

  return (
    <div className="App">
      {TITLE}

      <button onClick={handleThrowError}>Break the world</button>
      <button>Click me</button>
      <button onClick={handlePosthogCaptureEvent}>For Posthog event</button>
    </div>
  );
}

export default App;
