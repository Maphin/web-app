export const dbQueries = {
    delete() {
        return "DELETE FROM ?? WHERE id = ?;";
    },
    count() {
        return "SELECT COUNT(*) AS ?? FROM ??;";
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
    // updateCustomerDescription() {
    //     return "UPDATE customers SET `description` = ? WHERE id = ?;";
    // },
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
    
}