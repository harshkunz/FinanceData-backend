
afterAll(async () => {
  try {
    const { db } = require("./src/config/db");

    if (db?.$disconnect) {
      await db.$disconnect();
    }

    jest.clearAllTimers();

  } catch (error) {
    console.error("Cleanup error:", error);
  }
});