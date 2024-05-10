# CRUD Sync360.io

Este é um CRUD desenvolvido em React, Node.js e MySQL como parte de um desafio em um processo seletivo. 
Ele permite adicionar usuários com as seguintes informações: nome, data de aniversário, idade, estado, 
cidade, bairro, rua e biografia do usuário. Além disso, o sistema está integrado a uma API que gera fotos 
aleatórias para o perfil do usuário. Em futuras atualizações, está prevista a possibilidade de adicionar 
fotos de perfil a partir de arquivos locais, vinculando com serviços como Cloudinary ou Azure Cloud Server.

Foi um desafio interessante, pois foi a primeira vez que trabalhei com React. Gostei bastante da experiência 
e pretendo continuar a me desenvolver nessa linguagem.

## Instalação

Para iniciar o cliente e o servidor, utilize o comando `npm start`. 
Para criar a tabela no MySQL, utilize o seguinte comando SQL:

```sql
CREATE TABLE IF NOT EXISTS `crud_sync360` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(500) NOT NULL,
    `b_date` VARCHAR(45) NOT NULL,
    `age` VARCHAR(45) NOT NULL,
    `state` VARCHAR(500) NOT NULL,
    `city` VARCHAR(500) NOT NULL,
    `neighborhood` VARCHAR(500) NOT NULL,
    `road` VARCHAR(500) NOT NULL,
    `biography` TEXT NOT NULL,
    `image_url` TEXT NOT NULL
);
```

```db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Nome de seu usuário',
  password: 'Sua senha do mysql',
  database: 'Nome de sua tabela',
});

module.exports = connection;
```

##Uso
Ao acessar a tela, você verá um botão para adicionar usuário. Ao abrir o formulário, uma imagem aleatória de perfil 
será gerada automaticamente. Preencha todos os campos, e ao selecionar a data de nascimento, a idade será calculada 
automaticamente. Após o cadastro, você terá uma tabela exibindo as informações do usuário. Na tabela, é possível 
visualizar, editar e excluir os usuários.
