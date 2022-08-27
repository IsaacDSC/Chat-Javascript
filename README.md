# Chat-Javascript

### Sobre este projeto:
 *Serve como demonstracao de um caso de uso de um chat utilizando API.*
    - *Vale resaltar que em ambiente empresarial com time maior que uma pessoa para trabalhar no projeto, deveria ser efetuado algumas mudancas, como a separacao do repositório do frontend e do backend, assim como a utilizacao de recursos melhores de uma infraestrura melhor para banco de dados, recomendando NoSQL e Chave-Valor e cache para armazenar connexoes de usuários e dados de authenticacao caso necessário.*
    - *Este projeto foi desenvolvido pensando em um senário médio, que possibilitária modificacoes básicas para funcionar em senários mais parrudos, e desenhado pensando nas boas práticas de programacao*
      - *Dependencie inversion*
      - *Tests automatizated (integrations, end2end, unitary, etc...)*
- Backend
  -  Estrutura mvp para analise, em caso real deveria ser avaliado pois a grande usos do chat esta forma deveria ser acrescentada algumas coisas.
     -  Instacia Redis para armazenar as connectios
     -  Midleware de auth e validacao e comunicacao entre apis
     -  Projeto deveria incluir eslint e/ou prettier para formatacão e padronizacao do código, para que todos que trabalhem no projeto sigam o mesmo padrão, facilitando a manutencão.
        -  Dificuldade de testes End2End backend using websocket -> comunication client not disconnect
        -