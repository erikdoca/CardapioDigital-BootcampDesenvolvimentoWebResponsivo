# Real Supermercado — Site Responsivo

Projeto acadêmico desenvolvido para o **Bootcamp de Desenvolvimento Web Responsivo**, com o objetivo de construir uma página que se adapte a diferentes tamanhos de tela (desktop, tablet e smartphone).

## Descrição do projeto

Site institucional/e-commerce fictício do **Real Supermercado**, mercado de bairro localizado em Pederneiras, SP. A página apresenta:

- Cabeçalho com contato rápido e navegação
- Seção de destaque (hero) com chamada para as ofertas
- Departamentos do mercado
- Grade de ofertas da semana, com carrinho de compras interativo (adicionar/remover quantidade)
- Seção de benefícios (frete grátis, produtos frescos, formas de pagamento, clube de vantagens)
- Formulário de cadastro no "Clube Real"
- Rodapé com endereço, horário de funcionamento e contato
- Aba lateral do carrinho (drawer), aberta pelo ícone 🛒 no cabeçalho ou pela barra flutuante no mobile, com listagem dos produtos adicionados, alteração de quantidade, remoção de itens e resumo do pedido

## Tecnologias utilizadas

- **HTML5** semântico
- **CSS3** puro, sem frameworks (Flexbox, Grid, `clamp`, media queries e variáveis CSS para o design system)
- **JavaScript** puro (vanilla), sem bibliotecas, para:
  - menu responsivo (hambúrguer no mobile)
  - filtros de categoria
  - stepper de quantidade e carrinho de compras
  - formulário de cadastro
- Fonte **Plus Jakarta Sans** (Google Fonts)

Não foi utilizado nenhum framework CSS (como Bootstrap) — a responsividade foi construída manualmente com media queries, para reforçar o aprendizado dos conceitos de CSS responsivo.

## Estrutura de pastas

```
real-supermercado/
├── index.html          # Estrutura da página, incluindo a aba lateral do carrinho
├── css/
│   └── styles.css      # Estilos, variáveis de design e media queries
├── js/
│   └── script.js       # Interatividade (menu, filtros, carrinho)
├── assets/
│   └── logo.jpg         # Logotipo do supermercado
└── README.md
```

## Breakpoints de responsividade

| Faixa            | Largura           | Comportamento                                              |
|-------------------|--------------------|--------------------------------------------------------------|
| Mobile (padrão)   | até 767px          | Menu hambúrguer, grade de produtos em 2 colunas, categorias em carrossel horizontal, barra de carrinho flutuante fixa |
| Tablet            | 768px – 1023px     | Grade de produtos em 3 colunas, benefícios em 4 colunas       |
| Desktop           | a partir de 1024px | Menu horizontal completo, grade de produtos em 4 colunas, hero em duas colunas, barra de carrinho flutuante oculta |

## Como instalar e executar

Não é necessário nenhum servidor ou instalação de dependências.

1. Faça o download ou clone deste repositório.
2. Abra o arquivo `index.html` diretamente no navegador (duplo clique) **ou**
3. No VS Code, utilize a extensão **Live Server** e clique em "Go Live" para visualizar com recarregamento automático.

Para testar a responsividade, utilize a ferramenta de inspeção do navegador (tecla **F12**) e o modo de simulação de dispositivos (ícone de celular/tablet).

## Dados da loja (conteúdo fictício de exemplo)

- **Endereço:** Avenida Josefina Lorenzetti, S-1565, Pederneiras, SP
- **Telefone/WhatsApp:** (14) 99712-7128

## Integrantes

- Erik Vinicius Pinheiro Doca
- João Pedro Ferreira Viana 
-Gustavo da Silva Sebastião