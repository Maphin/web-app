export const dbQueries = {
    delete() {
        return "DELETE FROM ?? WHERE id = ?;";
    },
    count() {
        return "SELECT COUNT(*) AS ?? FROM ??;";
    },
    getAll(sortRule) {
        return `SELECT * FROM ?? ORDER BY ${sortRule};`;
    },
    getAllWithLimit(sortRule) {
        return `SELECT * FROM ?? ORDER BY ${sortRule} LIMIT ?, ?;`;
    },
    getAllOrdersWithLimit(sortRule) {
        return `SELECT o.*, CONCAT(c.firstName, ' ', c.lastName) AS user_name, s.title AS subscription_title 
                FROM orders o 
                LEFT JOIN customers c ON (c.id = o.customer_id) 
                LEFT JOIN subscriptions s ON (s.id = o.subscription_id) 
                ORDER BY ${sortRule} 
                LIMIT ?, ?`;
    },
    getCountVisits(cond) {
        if (cond) {
            cond = ' WHERE ' + cond;
        }

        return "SELECT COUNT(*) AS ?? FROM ?? v" + cond;
    },
    getAllVisitsWithLimit(cond, sortRule) {
        if (cond) {
            cond = 'WHERE ' + cond;
        }
        
        return `SELECT v.*, CONCAT(c.firstName, ' ', c.lastName) AS user_name, s.title AS subscription_title
                FROM visits v 
                LEFT JOIN customers c ON (c.id = v.customer_id) 
                LEFT JOIN orders o ON (o.id = v.order_id) 
                LEFT JOIN subscriptions s ON (o.subscription_id = s.id)
                ${cond}
                ORDER BY ${sortRule}
                LIMIT ?, ?`;
    },
    getOneOrder() {
        return `SELECT o.*, CONCAT(c.firstName, ' ', c.lastName) AS user_name, s.title AS subscription_title 
                FROM orders o 
                LEFT JOIN customers c ON (c.id = o.customer_id) 
                LEFT JOIN subscriptions s ON (s.id = o.subscription_id) 
                WHERE o.id = ?`;
    },
    getUserInfo() {
        return `SELECT c.*, s.title AS subscription_title 
                FROM customers c 
                LEFT JOIN orders o ON (o.customer_id = c.id) 
                LEFT JOIN subscriptions s ON (o.subscription_id = s.id)
                WHERE c.id = ?
                ORDER BY o.dateStart DESC`
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
    findByCustomerId() {
        return "SELECT * FROM ?? WHERE customer_id = ?;";
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
    createVisit() {
        return "INSERT INTO visits (customer_id, order_id) VALUES (?, ?);";
    },
}