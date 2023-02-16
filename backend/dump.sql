create DATABASE devnologyBackEnd;

CREATE TABLE usuarios (
	usuario_id serial PRIMARY KEY,
	email VARCHAR UNIQUE NOT NULL,
	senha VARCHAR NOT NULL,
	nome VARCHAR NOT NULL
);

CREATE TABLE blog (
	blog_id serial PRIMARY KEY,
	url VARCHAR NOT NULL,
	titulo VARCHAR NOT NULL,
	referencia_usuario INTEGER REFERENCES usuarios(usuario_id) 
);
 