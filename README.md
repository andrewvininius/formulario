<h1>Formulário de Cadastro</h1>

> Status: concluído  🖥️

#### Este é um formulário de cadastro simples que contém campos para o preenchimento de nome, email, senha, situação e mensagem. Ele foi construído utilizando HTML e JavaScript e tem como objetivo validar os dados inseridos pelo usuário antes de enviá-los para um servidor.

## Funcionalidades:

+ Verificação de campo vazio para o nome
+ Verificação de campo vazio e formato válido para o email
+ Verificação do tamanho mínimo da senha
+ Verificação de campo vazio para a situação
+ Verificação de campo vazio para a mensagem



## Tecnologias Usadas:

<table>
  <tr>
    <td>JavaScript</td>
    <td> HTML</td>
    <td>CSS</td>
  </tr>
 
</table>

## Como utilizar:

1) Clone ou faça o download deste repositório

2) Abra o arquivo index.html em um navegador web

3) Preencha todos os campos do formulário

4) Clique no botão "Enviar"

5) Se algum dos campos não for preenchido corretamente, uma mensagem de alerta será exibida

### Funcionamento do código

O código é composto por uma série de seletores de elementos HTML que representam os campos do formulário. Um evento de escuta é adicionado ao formulário que impede o seu envio automático e executa funções para verificar se cada campo foi preenchido corretamente.

A função isEmailValid utiliza uma expressão regular para validar o formato do email inserido. A função validatePassword verifica se a senha tem o tamanho mínimo especificado.

Se todos os campos forem preenchidos corretamente, o formulário é enviado através do método submit(). Caso contrário, uma mensagem de alerta é exibida para o usuário corrigir os dados inseridos.






