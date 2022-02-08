Olá, esta é a minha versao para eqi-investimentos /
desafio-frontend

ferramentas que utilizarei no desafio:
- HTML
- JavaScript
- CSS

dentro desta workspace você encontrará:
 - uma pasta com as imagens usadas;
 - uma pasta com os scripts;
 - uma pasta com os css's;
 e a estrutura HTML;
 - além do README.md para detalhamento dos meus passos no desafio.

HTML:

 - contém uma estrutura padrão, sendo que cada elemento
 é identificado por uma id distinta;
 - cada elemento está alocado no interno de uma div para melhor organização.

 CSS:

 - cada estrutura foi organiza com flex-box, para melhor posicionamento dos objetos;
 - a fonte escolhida foi uma fonte padrão, sem preferências;
 - a seleção global foi desativada, para melhor interação do usuário com o app;
 - o design responsivo será analisado para desktop, tablets e smartphones;

 JavaScript:

 - decidi fazer um id distinto para cada elemento, pois com querySelector estava 
 havendo bugs e deste modo está "clean";
 - a função de inserção de estilos na ul está em uma outra função de validação de passos,
 afim de evitar bugs quando o usuário interagir, 100% funcional;
 - esta mesma função quando chamada não permite que o usuário clique em "bruto" e "líquido" ao
 mesmo tempo, também não permite que ele utilize "pré", "pós" e "fixado" simultaneamente;
 - a função do input TextArea possui validação na distinção de números e strings, jogando um
 erro quando um texto de letras é captado em seu interior;
 - a função do input TextArea também está contida dentro de outra função, porém, essa é para
 sua execução, facilitando meu trabalho com os id's.


08/02/2022 changes:

 - melhora nas funções do script, código mais leve e implementação de armazenamento dos ids e um
 array, ficando um pouco melhor
 - forma de captar o id através de um evento de mouse que o busca e faz as validações necessárias
