

function processHeader(header){
disciplina = header.slice(header.search("Disciplina:")+16, header.search("Período:")-3);
periodo =header.slice(header.search("Período:")+13, header.search("Situação:")-3)
situacao = header.slice(header.search("Situação:")+14, header.search("Carga horária:")-7)
creditos = header.slice(header.search("Créditos:")+15, header.search("Integrações:")-11)
docente = header.slice(header.search("Docentes:")+14, header.search("Forma de avaliação:")-7)

return {disciplina,periodo,situacao,creditos,docente}
}

export default processHeader;