const requiredEnv = ["MONGO_URI", "JWT_SECRET"];

function validateEnv() {
  const missing = requiredEnv.filter((key) => !process.env[key]);
  const placeholders = requiredEnv.filter((key) => {
    const value = process.env[key] || "";
    return value.includes("<") || value.includes("replace-with");
  });

  if (missing.length || placeholders.length) {
    const problems = [...new Set([...missing, ...placeholders])].join(", ");
    console.error(`Missing or placeholder environment variables: ${problems}`);
    console.error("Create backend/.env from backend/.env.example and add your MongoDB Atlas URI and JWT secret.");
    process.exit(1);
  }
}

module.exports = validateEnv;
