CREATE TABLE IF NOT EXISTS accounts (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT CHECK (type IN ('asset', 'liability', 'equity', 'income', 'expense')) NOT NULL
);

CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    description TEXT,
    date TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS transaction_entries (
    id SERIAL PRIMARY KEY,
    transaction_id INTEGER REFERENCES transactions(id) ON DELETE CASCADE,
    account_id INTEGER REFERENCES accounts(id),
    amount NUMERIC NOT NULL,
    entry_type TEXT CHECK (entry_type IN ('debit', 'credit')) NOT NULL
);
