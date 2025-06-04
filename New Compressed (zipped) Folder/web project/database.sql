-- SQL Schema for Green Garden Bistro Website

-- Drop tables in correct order if they exist to allow for easy re-creation
DROP TABLE IF EXISTS `feedback`;
DROP TABLE IF EXISTS `bookings`;
DROP TABLE IF EXISTS `payments`;
DROP TABLE IF EXISTS `order_items`;
DROP TABLE IF EXISTS `orders`;
DROP TABLE IF EXISTS `menu_items`;
DROP TABLE IF EXISTS `customers`;

-- Table: customers
CREATE TABLE `customers` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE, -- Email should be unique
    `phone` VARCHAR(20) NOT NULL,
    `address` TEXT, -- For delivery, can be optional if not always needed
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: menu_items
CREATE TABLE `menu_items` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `price` DECIMAL(10, 2) NOT NULL,
    `category` VARCHAR(100) NOT NULL, -- e.g., 'starters', 'main_course', 'desserts', 'shorteats', 'beverages'
    `image_url` VARCHAR(255),
    `is_available` BOOLEAN DEFAULT TRUE
);

-- Table: orders
CREATE TABLE `orders` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `customer_id` INT NOT NULL,
    `order_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `total_amount` DECIMAL(10, 2) NOT NULL,
    `delivery_address` TEXT NOT NULL, -- Specific address for this order
    `customer_phone_order` VARCHAR(20) NOT NULL, -- Phone for this order (might differ from customer record)
    `customer_name_order` VARCHAR(255) NOT NULL, -- Name for this order
    `order_status` VARCHAR(50) DEFAULT 'Pending', -- e.g., 'Pending', 'Confirmed', 'Preparing', 'Out for Delivery', 'Delivered', 'Cancelled'
    `special_instructions` TEXT,
    FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON DELETE RESTRICT -- Or SET NULL if customer can be deleted but orders remain
);

-- Table: order_items (Junction table for orders and menu_items)
CREATE TABLE `order_items` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `order_id` INT NOT NULL,
    `menu_item_id` INT NOT NULL,
    `quantity` INT NOT NULL,
    `price_at_order` DECIMAL(10, 2) NOT NULL, -- Price of the item at the time of order
    `subtotal` DECIMAL(10, 2) NOT NULL, -- quantity * price_at_order
    FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`menu_item_id`) REFERENCES `menu_items`(`id`) ON DELETE RESTRICT
);

-- Table: payments
CREATE TABLE `payments` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `order_id` INT NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `payment_method` ENUM('cash', 'card') NOT NULL, -- Simplified from 'online'
    `payment_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `payment_status` ENUM('Pending', 'Completed', 'Failed') DEFAULT 'Pending', -- e.g. card payment pending, cash pending until delivery
    `transaction_id` VARCHAR(255) NULL, -- For card payment reference
    FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE CASCADE
);

-- Table: bookings
CREATE TABLE `bookings` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `customer_name` VARCHAR(255) NOT NULL,
    `customer_phone` VARCHAR(20) NOT NULL,
    `customer_email` VARCHAR(255),
    `booking_date` DATE NOT NULL,
    `booking_time` TIME NOT NULL,
    `number_of_guests` INT NOT NULL,
    `special_requests` TEXT,
    `booking_status` VARCHAR(50) DEFAULT 'Pending', -- e.g., 'Pending', 'Confirmed', 'Cancelled', 'Completed'
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: feedback
CREATE TABLE `feedback` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `customer_name` VARCHAR(255) NOT NULL,
    `customer_email` VARCHAR(255),
    `rating` INT CHECK (rating >= 1 AND rating <= 5), -- Assuming a 1-5 star rating
    `comments` TEXT,
    `submission_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample Data for menu_items
INSERT INTO `menu_items` (`name`, `description`, `price`, `category`, `image_url`, `is_available`)
VALUES
('Chicken Kottu Roti', 'Spicy chopped roti with chicken, vegetables, and egg.', 850.00, 'main_course', 'images/kottu.jpg', TRUE),
('Vegetable Fried Rice', 'Classic Sri Lankan style vegetable fried rice.', 650.00, 'main_course', 'images/fried_rice.jpg', TRUE),
('Fish Ambul Thiyal', 'Sour and spicy fish curry, a Sri Lankan specialty.', 950.00, 'main_course', 'images/fish_ambul_thiyal.jpg', TRUE),
('Parippu (Dhal Curry)', 'Creamy lentil curry with coconut milk and spices.', 350.00, 'side_dish', 'images/dhal_curry.jpg', TRUE),
('Pol Sambol', 'Spicy coconut relish with chili and lime.', 250.00, 'side_dish', 'images/pol_sambol.jpg', TRUE),
('Watalappan', 'A rich coconut custard pudding, sweetened with jaggery.', 400.00, 'desserts', 'images/watalappan.jpg', TRUE),
('Fish Cutlets', 'Spicy fish and potato croquettes, deep-fried.', 150.00, 'shorteats', 'images/fish_cutlets.jpg', TRUE),
('Vegetable Roti', 'Flatbread stuffed with a spicy vegetable filling.', 120.00, 'shorteats', 'images/veg_roti.jpg', TRUE),
('Masala Chai', 'Spiced milk tea.', 200.00, 'beverages', 'images/masala_chai.jpg', TRUE),
('Fresh Lime Juice', 'Refreshing lime juice, sweet or salty.', 180.00, 'beverages', 'images/lime_juice.jpg', TRUE),
('Chicken Lamprais', 'Rice boiled in stock with curries and accompaniments, baked in a banana leaf.', 1200.00, 'main_course', 'images/lamprais.jpg', TRUE),
('Egg Hoppers', 'Bowl-shaped pancakes made from fermented rice flour, with a soft-cooked egg in the center.', 100.00, 'main_course', 'images/egg_hopper.jpg', TRUE);

-- Instructions for use:
-- 1. Ensure you have a MySQL server running.
-- 2. Create a database (e.g., `greengarden_db`) if it doesn't exist: `CREATE DATABASE greengarden_db;`
-- 3. Select the database: `USE greengarden_db;`
-- 4. Run this script: `SOURCE path/to/database.sql;`

