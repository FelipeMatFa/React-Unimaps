CREATE DATABASE unimaps;
USE unimaps;

drop database unimaps;

CREATE TABLE usuario (
    id INT UNIQUE AUTO_INCREMENT PRIMARY KEY,
    foto VARCHAR(255),
    nome VARCHAR(255),
    senha VARCHAR(255),
    email VARCHAR(255) UNIQUE
);

INSERT INTO usuario (nome, senha, email, foto) 
VALUES ("Felipe", "senhaSegura123", "felattosdefarias@gmail.com", "/uploads/fotoPerfil.jpg");

CREATE TABLE post (
    id INT UNIQUE AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    imagem VARCHAR(255),
    titulo VARCHAR(255),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

CREATE TABLE marcadores (
    id INT UNIQUE AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    img VARCHAR(255), -- Armazenará o caminho ou URL da imagem
    titulo VARCHAR(255),
    descricao VARCHAR(255),
    latitude VARCHAR(255),
    longitude VARCHAR(255),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

CREATE TABLE estudosIA (
    id INT UNIQUE AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    dia VARCHAR(255),
    acertos VARCHAR(255),
    materia VARCHAR(255),
    mencao VARCHAR(255),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

insert into estudosIA(dia,acertos,materia,mencao) values("Dia 2","11/21","Física", "ED");
select * from estudosIA;
-- Consultas
SELECT * FROM post;
SELECT * FROM linkredacoes;
SELECT * FROM usuario;
SELECT * FROM marcadores;
