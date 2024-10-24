CREATE TABLE roles (
                      id SERIAL PRIMARY KEY,
                      role VARCHAR(255) NOT NULL
);

CREATE TABLE pessoa (
                         id SERIAL PRIMARY KEY,
                         nome VARCHAR(255) NOT NULL,
                         idade INT NOT NULL,
                         senha VARCHAR(10) NOT NULL,
                         documento VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE pessoa_role (
                             pessoa_id INT NOT NULL,
                             role_id INT NOT NULL,
                             FOREIGN KEY (pessoa_id) REFERENCES pessoa(id),
                             FOREIGN KEY (role_id) REFERENCES roles(id)
);

-- Inserir registros na tabela role
INSERT INTO roles (role) VALUES ('ADMIN'), ('USER'), ('SUPERVISOR');

-- Inserir registros na tabela pessoas
INSERT INTO pessoa (nome, idade, senha, documento) VALUES
    ('Sistema', 00, '123', 'Sistema');

INSERT INTO pessoa (nome, idade, senha, documento) VALUES
    ('Joao', 25, '123', '123456789');

INSERT INTO pessoa (nome, idade, senha, documento) VALUES
    ('Carla', 42, '123', '987654321');

INSERT INTO pessoa (nome, idade, senha, documento) VALUES
    ('Marcos', 60, '123', '10101010');

-- Inserir registros na tabela pessoa_role
INSERT INTO pessoa_role (pessoa_id, role_id) VALUES
    (1, 1);

INSERT INTO pessoa_role (pessoa_id, role_id) VALUES
    (2, 2);

INSERT INTO pessoa_role (pessoa_id, role_id) VALUES
    (3, 2);

INSERT INTO pessoa_role (pessoa_id, role_id) VALUES
    (4, 2);
