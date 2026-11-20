const formulario = document.getElementsByid("formulario");
const campoNome = document.getElementsByid("nome");
const mensagem = document.getElementsByid("mensagem");

formulario.addEventlistener("submit",function(evento){

evento.preventdefault();
const nome = campoNome.value.trinm();
mensagem.classlist.remove("alert-danger", "alert-success");
mensagem.classlist.add("alert");

if (nome ==="") {
    mensagem.textcontent = "por favor, informar seu nome"
    mensagem.classlist.add("alert-danger");
    campoNome.focus();
} else {
    mensagem.textcontent = 'ola sr $(nome), seja bem vindo ao mundo de hoje :)';
    mensagem.classlist.add("alert-sucess");
}
});

