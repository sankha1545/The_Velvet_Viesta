CREATE DATABASE hotelBilling;

USE hotelBilling;

CREATE TABLE bills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(15) NOT NULL,
    startDate DATE NOT NULL,
    endDate DATE NOT NULL,
    daysStayed INT NOT NULL,
    totalBill DECIMAL(10, 2) NOT NULL
);
