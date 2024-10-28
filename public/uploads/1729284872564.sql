CREATE DATABASE unimaps;
USE unimaps;

DROP DATABASE unimaps;

CREATE TABLE usuario(
    id INT UNIQUE AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    senha VARCHAR(255),
    email VARCHAR(255) UNIQUE
);

CREATE TABLE atividades(
    id INT UNIQUE AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    atividade VARCHAR(80),
    descricao VARCHAR(255),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

CREATE TABLE dicas(
    id INT UNIQUE AUTO_INCREMENT PRIMARY KEY,
    id_dicas INT,
    titulo VARCHAR(255),
    descricao VARCHAR(255),
    FOREIGN KEY (id_dicas) REFERENCES usuario(id)
);

CREATE TABLE marcadores(
    id INT UNIQUE AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    img VARCHAR(255), -- Armazenará o caminho ou URL da imagem
    titulo VARCHAR(255),
    descricao VARCHAR(255),
    latitude VARCHAR(255),
    longitude VARCHAR(255)
);

CREATE TABLE estudosIA(
    id INT UNIQUE AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    dia VARCHAR(255),
    acertos VARCHAR(255),
    materia VARCHAR(255),
    mencao VARCHAR(255)
);

select * from usuario;
select * from marcadores;