-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 27, 2025 at 12:50 AM
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
-- Database: `Moods`
--

-- --------------------------------------------------------

--
-- Table structure for table `moods`
--

CREATE TABLE `moods` (
  `mood_id` int NOT NULL,
  `mood_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `moods`
--

INSERT INTO `moods` (`mood_id`, `mood_name`) VALUES
(1, 'Happy'),
(2, 'Sad'),
(3, 'Angry'),
(4, 'Anxious'),
(5, 'Excited'),
(6, 'Calm'),
(7, 'Frustrated'),
(8, 'Hopeful'),
(9, 'Bored'),
(10, 'Confident'),
(11, 'Nostalgic'),
(12, 'Overwhelmed'),
(13, 'Content'),
(14, 'Curious'),
(15, 'Lonely'),
(16, 'Grateful'),
(17, 'Irritated'),
(18, 'Pensive'),
(19, 'Energized'),
(20, 'Restless');

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

-- --------------------------------------------------------

--
-- Table structure for table `tea_moods`
--

CREATE TABLE `tea_moods` (
  `tea_id` int NOT NULL,
  `mood_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tea_moods`
--

INSERT INTO `tea_moods` (`tea_id`, `mood_id`) VALUES
(1, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(9, 1),
(11, 1),
(12, 1),
(13, 1),
(15, 1),
(19, 1),
(21, 1),
(22, 1),
(25, 1),
(26, 1),
(27, 1),
(28, 1),
(29, 1),
(30, 1),
(31, 1),
(32, 1),
(26, 2),
(2, 4),
(5, 4),
(7, 4),
(21, 4),
(24, 4),
(26, 4),
(27, 4),
(28, 4),
(30, 4),
(1, 5),
(3, 5),
(5, 5),
(19, 5),
(1, 6),
(2, 6),
(4, 6),
(8, 6),
(10, 6),
(12, 6),
(13, 6),
(14, 6),
(15, 6),
(16, 6),
(17, 6),
(20, 6),
(22, 6),
(24, 6),
(25, 6),
(26, 6),
(30, 6),
(31, 6),
(5, 7),
(7, 7),
(28, 7),
(1, 8),
(3, 8),
(6, 8),
(8, 8),
(10, 8),
(13, 8),
(14, 8),
(16, 8),
(19, 8),
(20, 8),
(21, 8),
(4, 11),
(8, 11),
(11, 11),
(16, 11),
(17, 11),
(24, 12),
(32, 12),
(2, 13),
(4, 13),
(6, 13),
(8, 13),
(10, 13),
(11, 13),
(12, 13),
(14, 13),
(16, 13),
(20, 13),
(22, 13),
(23, 13),
(25, 13),
(30, 13),
(31, 13),
(2, 14),
(9, 14),
(11, 14),
(13, 14),
(14, 14),
(19, 14),
(23, 14),
(29, 14),
(32, 14),
(12, 16),
(15, 16),
(17, 16),
(20, 16),
(22, 16),
(25, 16),
(31, 16),
(27, 17),
(10, 18),
(15, 18),
(17, 18),
(21, 18),
(23, 18),
(24, 18),
(3, 19),
(6, 19),
(7, 19),
(9, 19),
(27, 19),
(28, 19),
(29, 19),
(32, 19),
(9, 20),
(23, 20),
(29, 20);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `moods`
--
ALTER TABLE `moods`
  ADD PRIMARY KEY (`mood_id`);

--
-- Indexes for table `teas`
--
ALTER TABLE `teas`
  ADD PRIMARY KEY (`tea_id`);

--
-- Indexes for table `tea_moods`
--
ALTER TABLE `tea_moods`
  ADD PRIMARY KEY (`tea_id`,`mood_id`),
  ADD KEY `mood_id` (`mood_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tea_moods`
--
ALTER TABLE `tea_moods`
  ADD CONSTRAINT `tea_moods_ibfk_1` FOREIGN KEY (`tea_id`) REFERENCES `teas` (`tea_id`),
  ADD CONSTRAINT `tea_moods_ibfk_2` FOREIGN KEY (`mood_id`) REFERENCES `moods` (`mood_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
