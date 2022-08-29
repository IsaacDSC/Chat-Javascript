# Chat-Javascript

### Sobre este projeto:
 *Serve como demonstração de um caso de uso de um chat utilizando API-Rest e Websocket.*
    - *Vale ressaltar que em ambiente empresarial com time maior que uma pessoa para trabalhar no projeto, deveria ser efetuado algumas mudanças, como a separação do repositório do frontend e do backend, assim como a utilização de recursos melhores de uma infraestrutra assim como para banco de dados, recomendando NoSQL para armazenamento instantâneo das mensagens com maior velocidade de escrita e Chave-Valor(Redis), para armazenar conexões de usuários e dados de autenticação caso seja grande escala, assim como optar por uma arquitetura distribuída de micro-serviços e orientada a eventos.*
    - *Este projeto foi desenvolvido pensando em um cenário médio-pequeno, que possibilitaria modificações básicas para funcionar em cenários mais parrudos, e desenhado com as boas práticas de programação*
      - *Dependencie inversion*
      - *Tests automatizated (integrations, end2end, unitary, etc...)*
      - *Single Responsiblity Principle*
      - *Open-Closed Principle*
      - *Liskov Substitution Principle*
      - *Interface Segregation Principle*
      - *Clean code*

  *O sistema sempre poderia ficar melhor e cada vez lido conseguiria melhorar, mas é necessário desenvolver o mvp e evoluindo aos poucos.*
### inIcializar projeto
  - Backend
    - Entre na pasta raiz do projeto :
    ``` sh
        yarn dev
    ```

  - Frontend
    - Entre na pasta raiz do projeto :
    ``` sh
        yarn dev
    ```
    - Criar uma nova sala pela URL adicione o parametro room={value room}
      - http://127.0.0.1:5173/?room=123
      - http://127.0.0.1:5173/


### Tests Backend
  - Commands in Package.json running tests application

  - *Test end2end backend chat websocket*
  ``` sh
  yarn test:ws:chat

  ```
  - *Test end2end backend API user/account*
  ``` sh
  yarn test:api:user

  ```
  - *Test end2end backend respository messages database*
    ``` sh
  yarn test:repository:msg

  ```
  - *Test end2end backend repository user database*
    ``` sh
  yarn test:repository:user

  ```

### Starting using Docker
  - *Se no caso estiver com banco de dados postgres e já estiver colocado o stringconnector no .env este comando fará criar em sua máquina a aplicação backend*
  ``` sh
  docker build . -t chat-demo-backend:latest
  docker run -p 3000:3333
  ```
  - *Se ainda não tiver banco de dados ainda não se preocupe, preparei um docker-compose com banco de dados.*
  ``` sh
  docker-compose up -d
  ```
  - Para acessar o banco de dados.
      - user: root
      - password: root
      - email: root@admin.com
