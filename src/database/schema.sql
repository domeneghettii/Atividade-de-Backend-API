CREATE DATABASE herois;

\c herois;

CREATE TABLE editoras (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE,
    pais_origem VARCHAR(100)
);

CREATE TABLE herois (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    poder VARCHAR(100),
    editora_id INT NOT NULL,
    FOREIGN KEY (editora_id) REFERENCES editoras(id) ON DELETE CASCADE
);


INSERT INTO editoras (nome, pais_origem) VALUES 
    ('Marvel Comics', 'Estados Unidos'),
    ('DC Comics', 'Estados Unidos'),
    ('Dark Horse Comics', 'Estados Unidos'),
    ('Image Comics', 'Estados Unidos'),
    ('IDW Publishing', 'Estados Unidos');

INSERT INTO herois (nome, poder, editora_id) VALUES 
    ('Homem-Aranha', 'Sentido Aranha', 1),
    ('Homem de Ferro', 'Armadura Tecnológica', 2),
    ('Batman', 'Inteligência e Recursos', 3),
    ('Mulher-Maravilha', 'Força e Agilidade', 4),
    ('Superman', 'Força Sobrehumana', 5);