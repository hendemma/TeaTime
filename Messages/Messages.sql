-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 27, 2025 at 12:52 AM
-- Server version: 8.0.40
-- PHP Version: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Messages`
--

-- --------------------------------------------------------

--
-- Table structure for table `entries`
--

CREATE TABLE `entries` (
  `entry_id` int NOT NULL,
  `tea_id` int NOT NULL,
  `name` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `comment` text,
  `date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `teas`
--

CREATE TABLE `teas` (
  `tea_id` int NOT NULL,
  `tea_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `teas`
--

INSERT INTO `teas` (`tea_id`, `tea_name`) VALUES
(1, 'Matcha'),
(2, 'Sencha'),
(3, 'Irish Breakfast'),
(4, 'Earl Grey'),
(5, 'Masala Chai'),
(6, 'English Breakfast'),
(7, 'Assam'),
(8, 'Darjeeling'),
(9, 'Ceylon'),
(10, 'Gyokuro'),
(11, 'Genmaicha'),
(12, 'Hojicha'),
(13, 'Jasmine'),
(14, 'Dragon Well'),
(15, 'Silver Needle'),
(16, 'White Peony'),
(17, 'Shou Mei'),
(19, 'Bai Hao'),
(20, 'Tie Guan Yin'),
(21, 'Da Hong Pao'),
(22, 'Milk Oolong'),
(23, 'Wuyi Rock'),
(24, 'Sheng Pu\'er (Raw)'),
(25, 'Shou Pu\'er (Ripe)'),
(26, 'Chamomile'),
(27, 'Peppermint'),
(28, 'Ginger'),
(29, 'Lemon'),
(30, 'Lavender'),
(31, 'Rooibos'),
(32, 'Hibiscus');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `entries`
--
ALTER TABLE `entries`
  ADD PRIMARY KEY (`entry_id`),
  ADD KEY `tea_id` (`tea_id`);

--
-- Indexes for table `teas`
--
ALTER TABLE `teas`
  ADD PRIMARY KEY (`tea_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `entries`
--
ALTER TABLE `entries`
  MODIFY `entry_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `entries`
--
ALTER TABLE `entries`
  ADD CONSTRAINT `entries_ibfk_1` FOREIGN KEY (`tea_id`) REFERENCES `teas` (`tea_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
