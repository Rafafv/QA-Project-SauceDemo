# Bug Reports 

## Bug 1 – Site perde a sessão rapidamente
ID: BUG-001
Severidade: Média
Prioridade: Média

Descrição: O sistema encerra a sessão rápido, voltando para a página de login, 
o que pode atrapalhar a navegação de possíveis compradores.

Passos para reproduzir:

Acessar a página e fazer login
Adicionar produtos ao carrinho, voltar a tela de produtos.
Alguns poucos segundos quando retorna à página de produtos ou ao carrinho,
encerra a sessão.

Resultado esperado: Navegação flúida para o usuário comprar os produtos.
Resultado atual: O site encerra sessão rapidamente.


## Bug 2 – Não é possível aumentar quantidade do mesmo produto
ID: BUG-002
Severidade: Alta
Prioridade: Alta

Descrição: Quando se adiciona um produto ao carrinho, não é possível adicionar 
mais uma unidade do mesmo produto.

Passos para reproduzir:

Acessar a página e fazer login
Adicionar um produto ao carrinho, e tentar mudar a quantidade do produto no carrinho,
ou na página Inventory.

Resultado esperado: Adição de mais quantidades do mesmo produto.
Resultado atual: Um produto só pode ser adicionado uma vez ao carrinho.


## Bug 3 – Site permite seguir fluxo de checkout com o carrinho vazio
ID: BUG-003
Severidade: Alta
Prioridade: Alta

Descrição: Quando inicia o processo de checkout, o site não barra quando o
carrinho está sem produto.

Passos para reproduzir:

Acessar a página e fazer login
Não adicione nenhum produto e vá para o carrinho. Clique no botão de continuar para seguir para 
a tela de campos obrigatórios.

Resultado esperado: Validação de carrinho vazio.
Resultado atual: É possível seguir para o checkout mesmo sem produtos no carrinho.