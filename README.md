# ![Group 27](https://github.com/user-attachments/assets/822e3c4d-04d4-4288-9367-4185e9a0cdfc)

## Visão Geral

O **Pexinxa** é um aplicativo dedicado a ajudar usuários a economizar em suas compras de supermercado de forma prática e personalizada. Ele possibilita que consumidores visualizem e comparem as melhores promoções de mercados próximos, criem listas de compras específicas para cada mercado e decidam qual loja oferece a combinação ideal de economia e proximidade.

## História do Usuário

### Contexto

Como um consumidor atento aos preços e interessado em economizar, quero uma plataforma onde eu possa:

- **Explorar** todas as promoções disponíveis nos mercados da minha região.
- **Criar** listas de compras personalizadas para cada mercado.
- **Comparar** os valores totais das minhas listas em diferentes mercados, permitindo que eu veja rapidamente onde posso comprar tudo o que preciso pelo menor preço, sem abrir mão da praticidade.

### Funcionalidades Principais

- **Exploração de Promoções por Região**
  - Como usuário, quero visualizar facilmente todas as promoções de produtos nos mercados próximos à minha localização, permitindo que eu descubra oportunidades de economia sem precisar visitar diferentes sites ou lojas.
  - Ao acessar o Pexinxa, devo poder filtrar as promoções por categoria de produto, como alimentos, produtos de higiene, limpeza e outros, para agilizar minha busca.

- **Criação de Listas de Compras Personalizadas**
  - Como usuário, quero selecionar os produtos que estão em promoção e organizá-los em listas de compras separadas para cada mercado, facilitando meu planejamento e garantindo que não perco nenhuma oferta relevante.
  - Cada lista deve permitir a adição ou remoção de produtos, além de oferecer uma visão rápida do valor acumulado em cada mercado.

- **Comparação de Preços e Localização**
  - Como usuário, quero comparar o total das minhas listas em cada mercado, vendo tanto o valor total quanto a distância de cada um deles em relação à minha localização.
  - Esse recurso deve me dar uma visão clara de qual mercado tem o melhor custo-benefício para minha lista, levando em conta o valor dos produtos e a proximidade, de forma que eu possa economizar tempo e dinheiro.

### Detalhamento das Interações

1. **Navegação e Seleção de Promoções**
   - O usuário inicia explorando as promoções por meio de uma interface intuitiva, que apresenta as ofertas disponíveis nos mercados próximos. É possível filtrar por tipo de produto, facilitando a escolha.

2. **Construção de Listas de Compras**
   - Após visualizar as ofertas, o usuário pode clicar nos produtos em promoção e adicioná-los a uma lista específica para o mercado onde a promoção está disponível. As listas são exibidas de maneira organizada e permitem ao usuário gerenciar os produtos selecionados.

3. **Comparação Final e Decisão de Compra**
   - Com suas listas montadas, o usuário pode acessar uma visão geral que compara os valores e proximidade dos mercados, ajudando-o a escolher a opção mais econômica e conveniente para o momento de compra (lembrando que não sera feita a compra pelo app, APENAS A COMPARAÇÃO DE PREÇOS). Esta visão exibe o valor total de cada lista e a distância de cada mercado.

### Requisitos Não Funcionais

- **Confiabilidade das Informações**
  - As promoções exibidas devem ser atualizadas frequentemente, garantindo que o usuário veja dados precisos e relevantes para tomar suas decisões de compra.

- **Simples e Intuitivo**
  - A experiência do usuário deve ser fácil e sem complexidade, com passos claros desde a seleção de promoções até a comparação de mercados.

### Critérios de Aceitação

- O usuário consegue visualizar promoções por localização e filtrar produtos por categoria.
- O sistema permite a criação e edição de listas de compras separadas por mercado.
- A plataforma exibe de forma clara e objetiva o valor total de cada lista e a distância dos mercados, ajudando o usuário a escolher onde comprar.

---

## Arquitetura de Software

A arquitetura do **Pexinxa** foi projetada para garantir escalabilidade, segurança e alto desempenho, aproveitando tecnologias modernas e serviços em nuvem. Abaixo está a arquitetura detalhada:

### Componentes Principais

1. **Front-end (Aplicativo Móvel)**
   - **Tecnologias**: React + Vite
   - Responsável pela interface de usuário, onde os consumidores podem interagir com a plataforma, visualizar promoções, criar listas de compras, e comparar preços.
   - Padrão de Design (MVC), Firebase (Firestore Database + Firebase Authentication)
   - Rerenciamento a lógica de negócios, autenticação de usuários, e interações com o banco de dados, incluindo o gerenciamento de promoções e criação de listas.

2. **Banco de Dados**
   - **Tecnologia**: Firebase Firestore
   - Utilizado para armazenar informações dinâmicas sobre promoções, mercados, e listas de compras. A escolha do Firestore oferece alta escalabilidade, baixa latência, e sincronização em tempo real.

3. **Serviços de Localização**
   - **Tecnologias**: APIs de geolocalização (Google Maps API ou similares)
   - As localizações dos mercados são determinadas com base na localização do usuário, e as distâncias são calculadas para comparar as lojas próximas.

### Fluxo de Dados

 **Usuário faz login**
   - O front-end se comunica com o Firebase Authentication para validar o login do usuário.
   
**Criação e gerenciamento de listas de compras**
   - O usuário cria e edita suas listas, com as informações dos preços sendo retiradas do Firestore.

 **Comparação de mercados**
   - O sistema calcula o custo total de cada lista de compras e exibe as distâncias dos mercados.

---

## Tecnologias Utilizadas

Este projeto segue um padrão de integração contínua (CI/CD), garantindo que o processo de desenvolvimento, testes e deploy seja automatizado e eficiente. As principais tecnologias utilizadas são:

- **CI/CD**: O projeto adota um fluxo de integração contínua (CI) e entrega contínua (CD), utilizando ferramentas para automação de build, testes e deploy, como GitHub Actions ou CircleCI, garantindo que as mudanças no código sejam integradas e entregues sem interrupção.

- **Authentication**: O sistema de autenticação é gerido pelo Firebase Authentication, permitindo que os usuários se registrem, façam login e mantenham sua segurança de forma eficiente, com suporte a autenticação via email/senha e outros métodos populares (como autenticação via Google, Facebook, etc.).

- **Firestore**: O banco de dados é o Firestore, que é uma solução de banco de dados NoSQL escalável e em tempo real fornecida pelo Firebase. O Firestore permite que os dados sejam sincronizados instantaneamente entre usuários e facilita o gerenciamento das promoções e listas de compras de forma eficiente.

- **Hosting**: O projeto utiliza o Firebase Hosting para hospedar a versão web da plataforma. O Firebase Hosting oferece hospedagem segura, com alta disponibilidade e entrega rápida de conteúdo estático, garantindo uma ótima experiência de usuário.

- **NoSQL**: O Firestore segue o modelo de banco de dados NoSQL, permitindo um armazenamento flexível e escalável de dados, adequado para a estrutura dinâmica das promoções, mercados e listas de compras. A escolha do NoSQL possibilita uma maior flexibilidade na consulta e manipulação de dados.

---

## Requisitos de Software

### Funcionais

1. **Registro e Autenticação de Usuários**
   - O sistema deve permitir que usuários se registrem e façam login para salvar suas listas de compras e preferências.

2. **Filtragem de Promoções**
   - O sistema deve ser capaz de filtrar promoções por categoria (alimentos, higiene, limpeza, etc.) e por proximidade geográfica.

3. **Criação de Listas de Compras**
   - O usuário deve ser capaz de criar e editar suas listas de compras, adicionando e removendo produtos de promoções específicas.

4. **Comparação de Preços**
   - O sistema deve comparar os preços das listas nos diferentes mercados e calcular a distância até cada um.

5. **Exibição de Distâncias e Preços**
   - O sistema deve exibir claramente o preço total de cada lista e a distância dos mercados.

### Não Funcionais

1. **Escalabilidade**
   - O sistema deve ser capaz de lidar com milhares de usuários simultâneos, sem degradação de performance.

2. **Segurança**
   - A plataforma deve garantir a proteção de dados do usuário, utilizando criptografia para o armazenamento de dados sensíveis.

---

## Documentação Adicional

- **Como rodar o projeto localmente**:
  1. Clone o repositório: `git clone https://github.com/usuario/pexinxa.git`
  2. Navegue até o diretório: `cd pexinxa`
  3. Instale as dependências: `npm install`
  4. Para iniciar o projeto: `npm run dev`

- **Testes**:
  - O projeto utiliza o **Cypress** para testes automatizados no front-end. Para rodar os testes:
    1. Execute `npm run test`.
    2. Acesse a interface de testes no navegador para visualizar os resultados.
---

### Tarefas de Melhoria em React Web  

#### 1. Adicionar filtragem avançada de promoções  
**Dificuldade:** 5  
**Descrição:** Melhorar a funcionalidade de filtragem para incluir categorias adicionais (marca, preço mínimo/máximo) e combinações de filtros.  

#### 2. Implementar visualização responsiva  
**Dificuldade:** 8  
**Descrição:** Ajustar o layout para se adaptar perfeitamente a diferentes resoluções, priorizando dispositivos móveis e tablets.  

#### 3. Criar listas de compras compartilháveis  
**Dificuldade:** 13  
**Descrição:** Permitir que os usuários compartilhem suas listas de compras via links ou redes sociais.  

#### 4. Implementar sistema de favoritos  
**Dificuldade:** 13  
**Descrição:** Adicionar uma funcionalidade onde os usuários possam marcar mercados ou produtos como favoritos para acessá-los rapidamente.  

#### 5. Adicionar tema escuro  
**Dificuldade:** 21  
**Descrição:** Implementar um tema escuro com alternância dinâmica para melhorar a experiência do usuário.  

#### 6. Sistema de notificações no navegador  
**Dificuldade:** 34  
**Descrição:** Adicionar notificações de promoções diretamente no navegador (push notifications).  

#### 7. Modo offline para listas  
**Dificuldade:** 34  
**Descrição:** Permitir que os usuários editem listas de compras mesmo sem conexão à internet, com sincronização posterior.  

#### 8. Personalizar promoções com base em histórico  
**Dificuldade:** 34  
**Descrição:** Criar uma funcionalidade que sugira promoções com base no histórico de listas de compras do usuário.  

#### 9. Implementar mapa interativo para mercados  
**Dificuldade:** 55  
**Descrição:** Adicionar um mapa interativo com os mercados próximos e suas promoções, permitindo interação direta com as localizações.  

#### 10. Implementar notificações personalizadas baseadas em proximidade  
**Dificuldade:** 21  
**Descrição:** Adicionar notificações que alertem o usuário sobre promoções em mercados próximos quando estiver na região.  

#### 11. Implementar busca inteligente de promoções  
**Dificuldade:** 21  
**Descrição:** Adicionar um sistema de busca que sugira promoções relevantes com base no histórico de buscas e listas.  

#### 12. Adicionar funcionalidade de histórico de promoções  
**Dificuldade:** 34  
**Descrição:** Permitir que os usuários vejam promoções passadas para planejar compras futuras ou verificar padrões de preços.  

#### 13. Criar tutorial interativo para novos usuários  
**Dificuldade:** 13  
**Descrição:** Implementar um tutorial interativo que explique como usar as principais funcionalidades do aplicativo.  

#### 14. Implementar carregamento de imagens otimizado  
**Dificuldade:** 13  
**Descrição:** Usar lazy loading para imagens de promoções e listas, reduzindo o consumo de dados e melhorando a performance.  

#### 15. Melhorar as animações de interface  
**Dificuldade:** 13  
**Descrição:** Adicionar animações sutis em interações importantes (ex.: ao adicionar/remover produtos de listas).  

#### 16. Permitir personalização de listas de compras  
**Dificuldade:** 21  
**Descrição:** Adicionar opções para que os usuários personalizem suas listas com cores, ícones e anotações.  

#### 17. Criar funcionalidade de exportação de listas  
**Dificuldade:** 21  
**Descrição:** Permitir que os usuários exportem suas listas em formatos PDF ou CSV para impressão ou compartilhamento.  

#### 18. Implementar monitoramento de performance  
**Dificuldade:** 21  
**Descrição:** Adicionar monitoramento de performance para medir o tempo de carregamento e interações do usuário no aplicativo.  

#### 19. Criar sistema de feedback de interface  
**Dificuldade:** 21  
**Descrição:** Permitir que os usuários deem feedback sobre a interface diretamente pelo aplicativo, sugerindo melhorias.  

#### 20. Adicionar suporte para múltiplas listas simultâneas  
**Dificuldade:** 21  
**Descrição:** Permitir que os usuários trabalhem com várias listas abertas ao mesmo tempo, facilitando o planejamento de compras em diferentes mercados.  

#### 21. Adicionar integração com APIs de clima  
**Dificuldade:** 13  
**Descrição:** Exibir informações meteorológicas para ajudar os usuários a planejar suas compras em dias mais convenientes.  

#### 22. Criar funcionalidade de notificações locais  
**Dificuldade:** 21  
**Descrição:** Adicionar suporte para notificações locais no navegador sobre promoções ou listas salvas.  

#### 23. Adicionar sistema de autenticação  
**Dificuldade:** 34  
**Descrição:** Permitir que os usuários façam login para salvar configurações e listas personalizadas.  

#### 24. Implementar sugestões de compras recorrentes  
**Dificuldade:** 34  
**Descrição:** Criar uma funcionalidade que sugira produtos com base em compras frequentes do usuário.  

#### 25. Melhorar SEO do aplicativo  
**Dificuldade:** 21  
**Descrição:** Otimizar tags e metadados para melhorar o ranqueamento do aplicativo em motores de busca.  

#### 26. Adicionar suporte para multilíngue  
**Dificuldade:** 34  
**Descrição:** Implementar tradução para diferentes idiomas, começando com inglês e português.  

#### 27. Criar modo "eco-friendly"  
**Dificuldade:** 21  
**Descrição:** Adicionar dicas para compras sustentáveis e reduzir o desperdício com base nas listas criadas.  

#### 28. Adicionar integração com redes sociais  
**Dificuldade:** 21  
**Descrição:** Permitir que os usuários compartilhem listas ou promoções diretamente em suas redes sociais.  

#### 29. Implementar pagamento via app  
**Dificuldade:** 55  
**Descrição:** Adicionar uma funcionalidade para pagamento direto no app por meio de carteiras digitais.  

#### 30. Criar sistema de ranking de promoções  
**Dificuldade:** 34  
**Descrição:** Permitir que os usuários avaliem promoções para destacar as melhores ofertas.  

#### 31. Criar sistema de listas colaborativas  
**Dificuldade:** 34  
**Descrição:** Permitir que várias pessoas editem a mesma lista de compras em tempo real.  

#### 32. Adicionar navegação por comandos de voz  
**Dificuldade:** 55  
**Descrição:** Permitir que os usuários naveguem e criem listas usando comandos de voz.  

#### 33. Criar página de estatísticas de compras  
**Dificuldade:** 34  
**Descrição:** Mostrar estatísticas sobre os gastos do usuário e padrões de compras ao longo do tempo.  

#### 34. Implementar integração com APIs de cupons  
**Dificuldade:** 34  
**Descrição:** Permitir que os usuários adicionem cupons automaticamente às compras com base em promoções disponíveis.  

  Essa versão ampliada do README inclui detalhes cruciais sobre a arquitetura de software, fluxos de dados, requisitos funcionais e não funcionais e documentação adicional,     proporcionando uma visão clara tanto para desenvolvedores quanto para outros stakeholders envolvidos no projeto.
