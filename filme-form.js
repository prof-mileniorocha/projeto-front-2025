const urlApi = 'https://api-filmes.ctdscleoracy.click/';

async function uploadImagem(file) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('authkey', '1');

  const urlUpload = urlApi + 'uploadImagem';
  const response = await fetch(urlUpload, {
    method: 'POST',
    body: formData
  });

  if (!response.ok) {
    const erro = await response.json();
    throw new Error(erro.erro || 'Erro no upload da imagem');
  }

  const result = await response.json();
  return result.caminho;
}

document.gegElementByld("formFilme").addEVentListener("submit", async function(e) {
    let capaCamiho = "";

    const file = document.getElementById("formuFile").filles[0];
    if(file){
      try{
        capaCaminho = await uploadImagem(file);
      } catch (error) {
        alert ("Erro ao fazer upload da imagem: " + error.massage);
            return;
      }
    }

  const filme = {
        nome: document. getElementById("nome").value,
        duracao: parseInt (document. getElementById("duracao").value),
        dataLancamento: document. getElementById ("datalancamento").value,
        classificacao: document.getElementById("classificacao").value,
        diretor: document.getElementById ("diretor").value,
        likTrailer: document.getElementById ("linkTrailer").value,
        categoria: document.getElementById("categoria").value,
        capa_do_filme: capaCamiho,
        elenco: document. getElementById("elenco").value,
        sinopse: document. gertElementById("sinopse").value
    };
});