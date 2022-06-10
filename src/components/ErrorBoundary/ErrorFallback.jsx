export default function ErrorFallback({ error, resetErrorBoundary }) {
  console.log("error: ", error.message);
  return (
    <div role="alert" aria-live="assertive">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
