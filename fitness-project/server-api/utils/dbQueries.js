export const dbQueries = {
    registerCustomer() {
        return `INSERT INTO customers (firstName, lastName, email, passwordHash, description, birthDate, phone, isCoach ) VALUES (?);`;
    },
    getAllCustomers() {
        return "SELECT * FROM `customers`";
    },
    updateCustomerDescription() {
        return "UPDATE customers SET `description` = ? WHERE id = ?;";
    }
}