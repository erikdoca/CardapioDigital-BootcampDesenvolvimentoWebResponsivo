# Real Supermercado — Cardápio Digital

Projeto acadêmico desenvolvido para o **Bootcamp de Desenvolvimento Web Responsivo**. O objetivo é apresentar um cardápio digital que se adapte a diferentes tamanhos de tela (desktop, tablet e smartphone).

O site foi planejado a partir de layouts para desktop e mobile, mantendo a mesma identidade visual e reorganizando os conteúdos conforme o espaço disponível.

## Descrição do projeto

Site institucional do **Real Supermercado**, mercado de bairro localizado em Pederneiras, SP. A página apresenta as especialidades da casa e direciona os pedidos para o WhatsApp da loja.

Conteúdos apresentados:

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
cardapio-digital/
├── index.html          # Estrutura da página
├── css/
│   └── styles.css      # Estilos, layout e media queries
├── js/
│   └── script.js       # Interatividade e atualização de status
├── assets/
│   ├── logo.jpg        # Logotipo
│   └── img/            # Fotos, artes promocionais e vídeos
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

## Checklist de testes

- Testar a abertura do `index.html` no Chrome, Firefox ou Edge.
- Verificar as larguras de 375px, 768px e 1024px.
- Confirmar que o menu, as âncoras, os botões de telefone e os links do WhatsApp funcionam.
- Conferir o carregamento das imagens e dos vídeos locais.
- Conferir a leitura e a navegação do conteúdo em telas pequenas sem rolagem horizontal indevida.

## Entregas do módulo

### Primeira entrega

- Repositório versionado com a estrutura inicial do projeto.
- Pastas organizadas por responsabilidade (`css`, `js` e `assets`).
- README com descrição, tecnologias e instruções de execução.
- Histórico de commits do desenvolvimento.

### Segunda entrega

- Demonstração do comportamento responsivo em desktop, tablet e smartphone.
- Repositório Git atualizado.
- Projeto completo para envio no formato solicitado pelo coordenador.

## Dados da loja

- **Endereço:** Avenida Josefina Lorenzetti, S-1565, Pederneiras, SP
- **WhatsApp:** (14) 99712-7128
- **Telefone fixo:** (14) 3252-2787
- **Horários:** segunda a sexta, 08:00h às 12:30h e 14:00h às 20:00h; sábado, 08:00h às 20:00h; domingo, 08:00h às 13:00h

## Créditos e direitos de uso

As imagens de produtos, as artes promocionais de linguiças e os vídeos da loja foram fornecidos para a composição deste projeto. Antes de publicar o site fora do contexto acadêmico, confirme com o responsável pelo estabelecimento a autorização de uso das imagens, do logotipo e das informações comerciais. As fontes externas usadas na interface são o [Google Fonts](https://fonts.google.com) e os ícones Material Symbols.

## Integrantes

- Erik Vinicius Pinheiro Doca
- João Pedro Ferreira Viana
- Gustavo da Silva Sebastião
