export function getApiErrorMessage(error, fallback = "Something went wrong") {
  if (error.response?.data?.message) return error.response.data.message;

  if (error.code === "ERR_NETWORK" || !error.response) {
    return "Backend is not running. Start the API on http://localhost:5000 and try again.";
  }

  return fallback;
}
