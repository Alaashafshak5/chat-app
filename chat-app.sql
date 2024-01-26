-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 26, 2024 at 05:18 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.4.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chat-app`
--

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
CREATE TABLE IF NOT EXISTS `message` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `sender_id` int(2) NOT NULL,
  `receiver_id` int(2) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `receiver_id` (`receiver_id`),
  KEY `sender_id` (`sender_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`id`, `text`, `sender_id`, `receiver_id`, `time`) VALUES
(1, 'Hey', 1, 2, '2024-01-23 20:39:30'),
(2, 'Hello', 4, 1, '2024-01-23 20:39:30'),
(3, 'How are you?', 1, 2, '2024-01-23 20:55:37'),
(14, 'Hi', 4, 5, '2024-01-25 20:45:33'),
(15, 'Ahla', 5, 1, '2024-01-25 20:45:33'),
(16, 'heyyyy', 1, 2, '2024-01-26 17:00:13'),
(17, 'Helloooo', 2, 1, '2024-01-26 17:00:51'),
(18, 'what time is it', 2, 1, '2024-01-26 17:05:42'),
(19, ' its 7:06', 1, 2, '2024-01-26 17:06:14');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `profile` varchar(100) DEFAULT NULL,
  `online` int(1) NOT NULL DEFAULT 0 COMMENT '0: offline 1:online',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `profile`, `online`) VALUES
(1, 'Alaa', 'Alaa.jpg', 1),
(2, 'Ola', 'ola.jpg', 1),
(3, 'George', 'George.jpg', 0),
(4, 'Ahmad', 'Ahmad.jpg', 0),
(5, 'Dana', 'Dana.jpg', 1);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `message_ibfk_1` FOREIGN KEY (`receiver_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `message_ibfk_2` FOREIGN KEY (`sender_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
