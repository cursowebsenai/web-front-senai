-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 24/04/2025 às 21:18
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bdbanco_diego`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `conta` varchar(100) DEFAULT NULL,
  `agencia` varchar(20) DEFAULT NULL,
  `senha` varchar(20) DEFAULT NULL,
  `saldo` decimal(8,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `clientes`
--

INSERT INTO `clientes` (`id`, `nome`, `conta`, `agencia`, `senha`, `saldo`) VALUES
(1, 'João Silva', '123456-7', '0001', 'senha123', 1500),
(2, 'Maria Santos', '234567-8', '0002', 'senha123', 2351),
(3, 'Carlos Lima', '345678-9', '0001', 'senha123', 980),
(4, 'Ana Oliveira', '456789-0', '0003', 'senha123', 121),
(5, 'Paulo Souza', '567890-1', '0001', 'senha123', 1875),
(6, 'Fernanda Costa', '678901-2', '0002', 'senha123', 3491),
(7, 'Rafael Teixeira', '789012-3', '0001', 'senha123', 950),
(8, 'Juliana Almeida', '890123-4', '0004', 'senha123', 410),
(9, 'Marcelo Rocha', '901234-5', '0003', 'senha123', 1401),
(10, 'Patrícia Gomes', '012345-6', '0001', 'senha123', 1890),
(11, 'Bruno Ribeiro', '102938-4', '0002', 'senha123', 2765),
(12, 'Camila Fernandes', '564738-2', '0001', 'senha123', 650),
(13, 'Felipe Barros', '847362-1', '0003', 'senha123', 1340),
(14, 'Renata Mello', '193847-5', '0002', 'senha123', 221),
(15, 'Thiago Pires', '019283-7', '0001', 'senha123', 570),
(16, 'Larissa Martins', '726354-8', '0002', 'senha123', 990),
(17, 'Eduardo Nunes', '847261-3', '0003', 'senha123', 1845),
(18, 'Beatriz Dias', '392847-9', '0004', 'senha123', 130),
(19, 'Ricardo Antunes', '284756-0', '0002', 'senha123', 1750),
(20, 'Aline Cardoso', '908172-3', '0001', 'senha123', 600),
(21, 'Lucas Matos', '298374-6', '0003', 'senha123', 1720),
(22, 'Tatiane Farias', '819273-4', '0001', 'senha123', 3100),
(23, 'André Castro', '018273-2', '0004', 'senha123', 250),
(24, 'Débora Azevedo', '928374-1', '0002', 'senha123', 180),
(25, 'Fábio Lima', '817263-9', '0003', 'senha123', 2901),
(26, 'Natália Luz', '928371-4', '0001', 'senha123', 325),
(27, 'Gustavo Alves', '382716-5', '0002', 'senha123', 1450),
(28, 'Vanessa Rocha', '091827-6', '0001', 'senha123', 780),
(29, 'Pedro Henrique', '827364-8', '0004', 'senha123', 451),
(30, 'Roberta Lima', '182736-9', '0002', 'senha123', 1796),
(31, 'Joana Prado', '918273-0', '0003', 'senha123', 970),
(32, 'Anderson Silva', '345126-7', '0001', 'senha123', 1250),
(33, 'Helena Moraes', '654321-0', '0002', 'senha123', 245),
(34, 'Murilo Reis', '876543-2', '0003', 'senha123', 1980),
(35, 'Sabrina Torres', '123789-6', '0004', 'senha123', 560),
(36, 'Danilo Campos', '321654-8', '0001', 'senha123', 830),
(37, 'Luciana Paiva', '951357-3', '0002', 'senha123', 1440),
(38, 'Renan Borges', '753951-2', '0003', 'senha123', 305),
(39, 'Michele Rezende', '159753-4', '0004', 'senha123', 1280),
(40, 'Vinicius Tavares', '258456-9', '0001', 'senha123', 1770),
(41, 'Flávia Cunha', '654987-1', '0002', 'senha123', 680),
(42, 'Wesley Andrade', '741852-0', '0003', 'senha123', 1580),
(43, 'Isadora Meireles', '369258-7', '0001', 'senha123', 230),
(44, 'Diego Dantas', '159456-3', '0002', 'senha123', 1440),
(45, 'Elaine Duarte', '258369-1', '0003', 'senha123', 1190),
(46, 'Henrique Vieira', '147258-6', '0004', 'senha123', 1990),
(47, 'Letícia Mendes', '321789-5', '0001', 'senha123', 395),
(48, 'Cristiano Alves', '852147-0', '0002', 'senha123', 930),
(49, 'Kelly Barbosa', '789456-2', '0003', 'senha123', 1730),
(50, 'Tales Rocha', '951456-1', '0004', 'senha123', 2200);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
