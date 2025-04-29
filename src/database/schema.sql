CREATE DATABASE herois_db;
\c herois_db;

CREATE TABLE editoras (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE
);


CREATE TABLE herois (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    poder VARCHAR(100),
    editora_id INT NOT NULL,
    FOREIGN KEY (editora_id) REFERENCES editoras(id) ON DELETE CASCADE
);


INSERT INTO editoras (nome) VALUES 
    ('Marvel Comics'),
    ('DC Comics');


INSERT INTO herois (nome, poder, editora_id) VALUES 
    ('Homem-Aranha', 'Sentido Aranha', 1),
    ('Homem de Ferro', 'Armadura Tecnológica', 1),
    ('Batman', 'Inteligência e Recursos', 2),
    ('Mulher-Maravilha', 'Força e Agilidade', 2);
