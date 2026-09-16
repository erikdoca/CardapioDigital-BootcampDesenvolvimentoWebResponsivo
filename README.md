# Real Supermercado — Site Responsivo

Projeto acadêmico desenvolvido para o **Bootcamp de Desenvolvimento Web Responsivo**, com o objetivo de construir uma página que se adapte a diferentes tamanhos de tela (desktop, tablet e smartphone).

O site foi construído a partir de dois layouts feitos previamente pelo grupo, um para desktop e outro para mobile, e cada versão segue o seu layout de origem.

## Descrição do projeto

Site institucional do **Real Supermercado**, mercado de bairro localizado em Pederneiras, SP. A página apresenta as especialidades da casa e direciona os pedidos para o WhatsApp da loja.

Seções da página:

- Cabeçalho com contatos, navegação por categorias e faixa animada de destaques
- Seção de destaque (hero) com a apresentação da loja
- Cartão de horários de funcionamento, endereço e canais de atendimento
- Assados de fim de semana: frango assado, joelho de porco e maionese caseira
- Linguiças artesanais fabricadas na loja
- Pizzas semiprontas (somente retirada no balcão)
- Pães fresquinhos, com os horários das duas fornadas
- Verduras frescas recebidas diariamente às 09:30h
- Rodapé com horários, especialidades, formas de pagamento e contato

Não há carrinho de compras: todas as chamadas para ação levam ao WhatsApp ou ao telefone da loja.

## Tecnologias utilizadas

- **HTML5** semântico
- **CSS3** puro, sem frameworks (Flexbox, Grid, media queries e variáveis CSS para o design system)
- **JavaScript** puro (vanilla), sem bibliotecas, para:
  - selo de **aberto/fechado em tempo real**, calculado a partir dos horários da loja
  - destaque da seção atual no menu de categorias, na navegação inferior do mobile e no subtítulo do cabeçalho
  - atualização automática do ano no rodapé
- Fontes **Plus Jakarta Sans** e **Material Symbols Outlined** (Google Fonts)

Não foi utilizado nenhum framework CSS (como Bootstrap) — a responsividade foi construída manualmente com media queries, para reforçar o aprendizado dos conceitos de CSS responsivo.

## Estrutura de pastas

```
real-supermercado/
├── index.html          # Estrutura da página
├── css/
│   └── styles.css      # Estilos, variáveis de design e media queries
├── js/
│   └── script.js       # Interatividade (selo de aberto/fechado, seção atual)
├── assets/
│   ├── logo.jpg        # Logotipo do supermercado
│   └── img/            # Fotos das seções
└── README.md
```

## Breakpoints de responsividade

| Faixa            | Largura            | Comportamento                                                                                      |
|------------------|--------------------|----------------------------------------------------------------------------------------------------|
| Mobile (padrão)  | até 767px          | Cabeçalho compacto com selo de aberto/fechado, seções empilhadas em cartões e barra de navegação fixa na base |
| Tablet           | 768px – 1023px     | Mesmo visual do mobile, com as grades abrindo em 2, 3 ou 4 colunas                                   |
| Desktop          | a partir de 1024px | Cabeçalho completo com barra de contatos e menu de categorias, hero em duas colunas e seções em grade; a navegação inferior é ocultada |

## Como instalar e executar

Não é necessário nenhum servidor ou instalação de dependências.

1. Faça o download ou clone deste repositório.
2. Abra o arquivo `index.html` diretamente no navegador (duplo clique) **ou**
3. No VS Code, utilize a extensão **Live Server** e clique em "Go Live" para visualizar com recarregamento automático.

Para testar a responsividade, utilize a ferramenta de inspeção do navegador (tecla **F12**) e o modo de simulação de dispositivos (ícone de celular/tablet).

## Dados da loja

- **Endereço:** Avenida Josefina Lorenzetti, S-1565, Pederneiras, SP
- **WhatsApp:** (14) 99712-7128
- **Telefone fixo:** (14) 3252-2787
- **Horários:** segunda a sexta, 08:00h às 12:30h e 14:00h às 20:00h; sábado, 08:00h às 20:00h; domingo, 08:00h às 13:00h

## Créditos das imagens

As fotos da pasta `assets/img/` foram obtidas no [Pexels](https://www.pexels.com), sob licença livre para uso, inclusive comercial, sem exigência de atribuição.

## Integrantes

- Erik Vinicius Pinheiro Doca
- João Pedro Ferreira Viana
- Gustavo da Silva Sebastião
