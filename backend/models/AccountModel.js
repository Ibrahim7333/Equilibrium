module.exports = (pool) => ({
    createAccount: async (name, type) => {
      const result = await pool.query(
        "INSERT INTO accounts (name, type) VALUES ($1, $2) RETURNING *",
        [name, type]
      );
      return result.rows[0];
    },

  });