-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 19, 2019 at 03:08 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `buy`
--

CREATE TABLE `buy` (
  `id` int(100) NOT NULL,
  `cartid` int(100) NOT NULL,
  `productid` int(100) NOT NULL,
  `category` varchar(200) NOT NULL,
  `subcategory` varchar(200) NOT NULL,
  `brand` varchar(200) NOT NULL,
  `userid` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `buy`
--

INSERT INTO `buy` (`id`, `cartid`, `productid`, `category`, `subcategory`, `brand`, `userid`) VALUES
(1, 3, 2, 'Ram', '4GB', 'Corsair', 4),
(2, 2, 2, 'Ram', '4GB', 'Corsair', 4),
(3, 2, 2, 'Ram', '4GB', 'Corsair', 4),
(4, 3, 2, 'Ram', '4GB', 'Corsair', 4),
(5, 6, 2, 'Ram', '4GB', 'Corsair', 5),
(6, 7, 7, 'Graphics Card', 'VGA', 'Asus', 5);

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(100) NOT NULL,
  `productid` int(100) NOT NULL,
  `category` varchar(200) NOT NULL,
  `subcategory` varchar(200) NOT NULL,
  `brand` varchar(200) NOT NULL,
  `userid` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `productid`, `category`, `subcategory`, `brand`, `userid`) VALUES
(4, 2, 'Ram', '4GB', 'Corsair', 4),
(5, 2, 'Ram', '4GB', 'Corsair', 4),
(8, 5, 'Monitor', 'LCD', 'Apple', 5);

-- --------------------------------------------------------

--
-- Table structure for table `passcode`
--

CREATE TABLE `passcode` (
  `id` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `passcode`
--

INSERT INTO `passcode` (`id`) VALUES
(259);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(100) NOT NULL,
  `category` varchar(50) NOT NULL,
  `subcategory` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `review` varchar(100) NOT NULL,
  `cost` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `category`, `subcategory`, `brand`, `review`, `cost`) VALUES
(2, 'Ram', '4GB', 'Corsair', 'review deleted', 2000),
(3, 'Casing', 'ATX', 'Corsair', 'review deleted', 1500),
(4, 'Casing', 'ATX', 'Phantek', 'not inserted', 1100),
(5, 'Monitor', 'LCD', 'Apple', 'not inserted', 4000),
(6, 'Monitor', 'LED', 'Dell', 'not inserted', 2500),
(7, 'Graphics Card', 'VGA', 'Asus', 'not inserted', 2200);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL,
  `type` varchar(30) NOT NULL,
  `balance` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `type`, `balance`) VALUES
(2, 'admin@gmail.com', '12345', 'admin', 15000),
(4, 'admin', '12', 'admin', 15000),
(5, 'user', '1', 'user', 15000),
(6, 'temp', '5', 'user', 15000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buy`
--
ALTER TABLE `buy`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buy`
--
ALTER TABLE `buy`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
