export const dbQueries = {
    delete() {
        return "DELETE FROM ?? WHERE id = ?;";
    },
    count() {
        return "SELECT COUNT(*) AS ?? FROM ??;";
    },
    getAll() {
        return "SELECT * FROM ??;";
    },
    getAllWithLimit() {
        return "SELECT * FROM ?? LIMIT ?, ?;";
    },
    registerCustomer() {
        return "INSERT INTO customers (firstName, lastName, email, passwordHash, description, birthDate, phone, isCoach ) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
    },
    getAllCustomers() {
        return "SELECT * FROM `customers`;";
    },
    findCustomerByEmail() {
        return "SELECT * FROM customers WHERE email = ?;";
    },
    findSubscriptionByTitle() {
        return "SELECT * FROM subscriptions WHERE title = ?;";
    },
    findById() {
        return "SELECT * FROM ?? WHERE id = ?;";
    },
    createSubscription() {
        return "INSERT INTO subscriptions (title, description, type, period, price) VALUES (?, ?, ?, ?, ?);";
    },
    updateSubscription() {
        return "UPDATE subscriptions SET title = ?, description = ?, type = ?, period = ?, price = ? WHERE id = ?;"
    },
    createOrder() {
        return "INSERT INTO orders (customer_id, subscription_id, dateEnd, trainingsLeft) VALUES (?, ?, ?, ?);";
    },
    updateOrder() {
        return "UPDATE orders SET trainingsLeft = ? WHERE id = ?;"
    },
}