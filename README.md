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

# Tarefas de Melhoria em React Web

## Tarefas de Dificuldade 5
### 1. Adicionar filtragem avançada de promoções
- **Descrição:** Melhorar a funcionalidade de filtragem para incluir categorias adicionais (marca, preço mínimo/máximo) e combinações de filtros.
- **Dependências:** Atualização do estado global (ex.: Redux, Context API) e ajustes na UI de filtros.

## Tarefas de Dificuldade 8
### 2. Implementar visualização responsiva
- **Descrição:** Ajustar o layout para se adaptar perfeitamente a diferentes resoluções, priorizando dispositivos móveis e tablets.
- **Dependências:** Uso de frameworks CSS como Tailwind ou Material-UI.

## Tarefas de Dificuldade 13
### 3. Criar listas de compras compartilháveis
- **Descrição:** Permitir que os usuários compartilhem suas listas de compras via links ou redes sociais.
- **Dependências:** Gerar links únicos utilizando UUIDs e integração com bibliotecas de compartilhamento (ex.: react-share).

### 4. Implementar sistema de favoritos
- **Descrição:** Adicionar uma funcionalidade onde os usuários possam marcar mercados ou produtos como favoritos para acessá-los rapidamente.
- **Dependências:** Atualizações no Firestore e no estado global para armazenar favoritos.

### 5. Criar tutorial interativo para novos usuários
- **Descrição:** Implementar um tutorial interativo que explique como usar as principais funcionalidades do aplicativo.
- **Dependências:** Biblioteca para tutoriais interativos, como react-joyride.

### 6. Implementar carregamento de imagens otimizado
- **Descrição:** Usar lazy loading para imagens de promoções e listas, reduzindo o consumo de dados e melhorando a performance.
- **Dependências:** Utilizar a tag `loading="lazy"` nativa do HTML ou bibliotecas de lazy loading.

### 7. Melhorar as animações de interface
- **Descrição:** Adicionar animações sutis em interações importantes (ex.: ao adicionar/remover produtos de listas).
- **Dependências:** Bibliotecas de animação como Framer Motion ou React Spring.

### 8. Melhorar SEO para busca de promoções
- **Descrição:** Otimizar o SEO para que promoções e informações de mercados sejam indexadas nos motores de busca.
- **Dependências:** Configuração de react-helmet ou next/head para gerenciar metadados.

### 9. Adicionar integração com APIs de clima
- **Descrição:** Exibir informações meteorológicas para ajudar os usuários a planejar suas compras em dias mais convenientes.
- **Dependências:** Integração com APIs de clima, como OpenWeatherMap.

### 10. Adicionar rastreamento de métricas no PWA
- **Descrição:** Implementar um sistema para monitorar como os usuários interagem com o PWA, identificando áreas de melhoria.
- **Dependências:** Firebase Analytics ou ferramentas como Google Analytics.

## Tarefas de Dificuldade 21
### 11. Criar componente de comparação visual de preços
- **Descrição:** Desenvolver um gráfico comparativo de preços entre mercados utilizando bibliotecas como Chart.js ou Recharts.
- **Dependências:** Atualizar a lógica de cálculo no front-end e integrar a biblioteca de gráficos.

### 12. Adicionar tema escuro
- **Descrição:** Implementar um tema escuro com alternância dinâmica para melhorar a experiência do usuário.
- **Dependências:** Configurar suporte para alternância de temas via Context API ou CSS-in-JS.

### 13. Implementar notificações personalizadas baseadas em proximidade
- **Descrição:** Adicionar notificações que alertem o usuário sobre promoções em mercados próximos quando estiver na região.
- **Dependências:** Geolocation API e Notification API para integração.

### 14. Implementar busca inteligente de promoções
- **Descrição:** Adicionar um sistema de busca que sugira promoções relevantes com base no histórico de buscas e listas.
- **Dependências:** Algoritmo simples no front-end para processamento de dados e Firestore para armazenamento de histórico.

### 15. Personalizar promoções com base em histórico
- **Descrição:** Criar uma funcionalidade que sugira promoções com base no histórico de listas de compras do usuário.
- **Dependências:** Lógica adicional no front-end para análise do histórico armazenado no Firestore.

### 16. Permitir personalização de listas de compras
- **Descrição:** Adicionar opções para que os usuários personalizem suas listas com cores, ícones e anotações.
- **Dependências:** Atualização na UI e armazenamento no Firestore.

### 17. Criar funcionalidade de exportação de listas
- **Descrição:** Permitir que os usuários exportem suas listas em formatos PDF ou CSV para impressão ou compartilhamento.
- **Dependências:** Biblioteca para geração de arquivos, como jspdf ou papaparse.

### 18. Implementar monitoramento de performance
- **Descrição:** Adicionar monitoramento de performance para medir o tempo de carregamento e interações do usuário no aplicativo.
- **Dependências:** Firebase Performance Monitoring ou ferramentas como Lighthouse para relatórios.

### 19. Adicionar suporte a QR Code para compartilhamento de listas
- **Descrição:** Gerar QR Codes para listas de compras, permitindo que os usuários compartilhem suas listas rapidamente.
- **Dependências:** Biblioteca como qrcode.react para geração de QR Codes.

### 20. Criar sistema de feedback de interface
- **Descrição:** Permitir que os usuários deem feedback sobre a interface diretamente pelo aplicativo, sugerindo melhorias.
- **Dependências:** Firebase Firestore para armazenar feedbacks e ajuste na UI para formulário de envio.

### 21. Adicionar suporte para múltiplas listas simultâneas
- **Descrição:** Permitir que os usuários trabalhem com várias listas abertas ao mesmo tempo, facilitando o planejamento de compras em diferentes mercados.
- **Dependências:** Ajustes no estado global (Redux ou Context API) para gerenciar múltiplas listas.

### 22. Adicionar notificações locais
- **Descrição:** Adicionar suporte para notificações locais no navegador sobre promoções ou listas salvas.
- **Dependências:** Notification API e ajuste no PWA.

### 23. Implementar sugestão automática de categorias
- **Descrição:** Ao criar uma lista ou buscar produtos, sugerir categorias automaticamente com base no texto inserido.
- **Dependências:** Algoritmos simples de categorização no front-end e dados armazenados no Firestore.

## Tarefas de Dificuldade 34
### 24. Sistema de notificações no navegador
- **Descrição:** Adicionar notificações de promoções diretamente no navegador (push notifications).
- **Dependências:** Implementar Firebase Cloud Messaging (FCM) e ajustar permissões no navegador.

### 25. Modo offline para listas
- **Descrição:** Permitir que os usuários editem listas de compras mesmo sem conexão à internet, com sincronização posterior.
- **Dependências:** Uso do IndexedDB (via bibliotecas como idb) ou LocalStorage para armazenamento temporário.

### 26. Adicionar funcionalidade de histórico de promoções
- **Descrição:** Permitir que os usuários vejam promoções passadas para planejar compras futuras ou verificar padrões de preços.
- **Dependências:** Firebase Firestore para armazenar dados históricos e atualização na interface.

### 27. Implementar sistema de cashback
- **Descrição:** Criar um sistema de cashback, permitindo que os usuários acumulem créditos ao usar o aplicativo.
- **Dependências:** Firebase Firestore para gerenciamento de créditos e lógica no front-end.

### 28. Criar sistema de ranking para mercados
- **Descrição:** Adicionar uma funcionalidade onde os usuários podem visualizar um ranking dos mercados com base em avaliações, proximidade e promoções.
- **Dependências:** Firebase Firestore para armazenar avaliações e lógica no front-end para calcular o ranking.

### 29. Adicionar integração com APIs de preços em tempo real
- **Descrição:** Implementar uma funcionalidade que atualize os preços dos produtos em tempo real, diretamente da API de fornecedores ou mercados parceiros.
- **Dependências:** Configuração de integrações com APIs externas e ajustes na sincronização com Firestore.

### 30. Implementar gamificação para engajamento
- **Descrição:** Criar um sistema de gamificação que recompensa usuários com pontos ou distintivos por usar o aplicativo, completar listas ou avaliar mercados.
- **Dependências:** Lógica adicional no front-end para registrar ações e armazenamento no Firestore.

### 31. Adicionar suporte para login biométrico
- **Descrição:** Implementar login utilizando biometria (impressão digital ou reconhecimento facial) nos dispositivos que suportam.
- **Dependências:** WebAuthn API para autenticação baseada em biometria.

### 32. Criar sistema de múltiplos perfis
- **Descrição:** Permitir que uma única conta tenha múltiplos perfis, como "Pessoal", "Empresa" ou "Família", com listas separadas para cada perfil.
- **Dependências:** Firebase Firestore para organização de perfis e atualização no front-end.

### 33. Adicionar suporte a exportação automática para Google Sheets
- **Descrição:** Permitir que os usuários exportem suas listas diretamente para o Google Sheets.
- **Dependências:** Google Sheets API e ajustes no front-end para a integração.

### 34. Implementar comparador visual de rotas para mercados
- **Descrição:** Criar um mapa interativo que exiba rotas para mercados próximos, destacando a distância e tempo estimado de deslocamento.
- **Dependências:** Google Maps API ou Leaflet.js para visualização e cálculo de rotas.

### 35. Adicionar modo "economia máxima"
- **Descrição:** Criar uma funcionalidade que recomenda a melhor combinação de mercados para economizar ao máximo em uma lista de compras.
- **Dependências:** Algoritmos de otimização para cálculo de economia e ajuste na interface.

### 36. Implementar sistema de cashback personalizado
- **Descrição:** Criar um sistema de cashback onde os usuários possam escolher como utilizar os créditos acumulados, como descontos em compras futuras ou doações para causas sociais.
- **Dependências:** Firebase Firestore para armazenar o saldo de cashback e lógica no front-end para as opções de uso.

### 37. Criar sistema de notificações de economia por região
- **Descrição:** Implementar notificações que alertem os usuários sobre promoções específicas na região onde estão, baseando-se na geolocalização.
- **Dependências:** Geolocation API e Firebase Cloud Messaging para envio de notificações.

### 38. Desenvolver integração com assistentes virtuais
- **Descrição:** Permitir que os usuários interajam com o aplicativo por meio de assistentes virtuais, como Alexa ou Google Assistant, para adicionar produtos às listas ou verificar promoções.
- **Dependências:** Configuração de APIs de assistentes virtuais e ajuste no back-end para receber comandos.

### 39. Implementar assinatura premium para recursos avançados
- **Descrição:** Criar um sistema de assinatura premium que desbloqueie funcionalidades avançadas, como filtros de promoções exclusivos ou relatórios detalhados de economia.
- **Dependências:** Configuração de pagamentos recorrentes com Stripe ou PayPal e controle de acesso baseado em planos no Firebase Firestore.

### 40. Criar sistema de realidade aumentada para promoções
- **Descrição:** Adicionar uma funcionalidade que permita aos usuários escanear um mercado físico com a câmera do celular para visualizar promoções destacadas em realidade aumentada.
- **Dependências:** Uso de bibliotecas como AR.js ou WebXR e integração com promoções armazenadas no Firestore.


  Essa versão ampliada do README inclui detalhes cruciais sobre a arquitetura de software, fluxos de dados, requisitos funcionais e não funcionais e documentação adicional,     proporcionando uma visão clara tanto para desenvolvedores quanto para outros stakeholders envolvidos no projeto.
