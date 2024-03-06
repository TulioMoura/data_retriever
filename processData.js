
function processData(data){
    data = data.slice(data.search("<tbody>\n")+9, data.search("</tbody>"))
    rows = []

    let result = 1;
    let count = 0;
    while(result){
        let stop = data.search("</tr>");
        row =data.slice(data.search("<tr")+ 18, stop)
        data = data.slice(stop+4);
        if(data.length < 10){
            result = 0;
        }
        rows.push(row)
    count++;
    }
    processedRows = []
    rows.forEach(row => {
        row = row.slice(row.search(`<td class="data">\n`)+18)
        row = row.replaceAll(`</span></td>`,"")
        row = row.replaceAll(`<td class="data">`,"")
        console.log("rows -- \n"+row)
        let result = 1;
        let count = 0;
        currentRow=[]
        while(result){
            let stop = row.search("\n");
            currentRow.push(row.slice(data.search(`<span class="m-label">`)+ 22, stop))
            row = row.slice(stop+2);
            if(row.length < 5){
                result = 0;
            }
        count++;
        }
        rowObject = {
            matricula:currentRow[1],
            nome:currentRow[2],
            periodo:currentRow[3],
            curso:currentRow[4],
            calouro:currentRow[5],
            tipoIngresso:currentRow[6],
        }
    processedRows.push(rowObject)
    });
    return processedRows; 
}


data=`\n<colgroup>\n</colgroup>\n<colgroup><col width=\"5%\"><col width=\"15%\"><col width=\"30%\"><col width=\"20%\"><col width=\"10%\"><col width=\"10%\"><col width=\"10%\">\n</colgroup>\n<thead><tr>\n<th class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></th>\n<th class=\"data\"><span style=\"height: 56px;\">Nº</span></th>\n<th><span style=\"height: 56px;\">Matrícula</span></th>\n<th><span style=\"height: 56px;\">Nome</span></th>\n<th><span style=\"height: 56px;\">Curso</span></th>\n<th><span style=\"height: 56px;\">Período Ingresso</span></th>\n<th><span style=\"height: 56px;\">Calouro</span></th>\n<th><span style=\"height: 56px;\">Tipo ingresso</span></th>\n</tr></thead>\n<tbody>\n<tr class=\"row1\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">1</span></td><td class=\"data\">\n<span class=\"m-label\">20201002003         </span></td><td class=\"data\">\n<span class=\"m-label\">AQUILES VINÍCIUS LIMA DE OLIVEIRA</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2020/1</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">SISU/ENEM</span></td>\n</tr>\n<tr class=\"row2\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">2</span></td><td class=\"data\">\n<span class=\"m-label\">20202002011         </span></td><td class=\"data\">\n<span class=\"m-label\">ARTUR MARIO DE FREITAS</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2020/2</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">SISU/ENEM</span></td>\n</tr>\n<tr class=\"row1\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 79px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">3</span></td><td class=\"data\">\n<span class=\"m-label\">20191002034         </span></td><td class=\"data\">\n<span class=\"m-label\">EDMOND JOSEPH DJIBRIL VICTOR BARRY</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2019/1</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">PEC-G</span></td>\n</tr>\n<tr class=\"row2\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">4</span></td><td class=\"data\">\n<span class=\"m-label\">20191002025         </span></td><td class=\"data\">\n<span class=\"m-label\">GUILHERME FRANCISCO SILVA</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2019/1</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">Seleção Seriada</span></td>\n</tr>\n<tr class=\"row1\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">5</span></td><td class=\"data\">\n<span class=\"m-label\">20191002027         </span></td><td class=\"data\">\n<span class=\"m-label\">GUILHERME MIRANDA DE ASSIS</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2019/1</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">Seleção Seriada</span></td>\n</tr>\n<tr class=\"row2\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 79px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">6</span></td><td class=\"data\">\n<span class=\"m-label\">20202002001         </span></td><td class=\"data\">\n<span class=\"m-label\">GUILHERME YONAN CORDEIRO AZEVEDO</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2020/2</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">Reopção de Curso</span></td>\n</tr>\n<tr class=\"row1\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">7</span></td><td class=\"data\">\n<span class=\"m-label\">20182002009         </span></td><td class=\"data\">\n<span class=\"m-label\">JOSÉ CARLOS DE MAGALHÃES</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2018/2</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">SISU/ENEM</span></td>\n</tr>\n<tr class=\"row2\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">8</span></td><td class=\"data\">\n<span class=\"m-label\">20221002001         </span></td><td class=\"data\">\n<span class=\"m-label\">MÁRIO VÍTOR PIO DE CARVALHO</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2022/1</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">Reopção de Curso</span></td>\n</tr>\n<tr class=\"row1\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">9</span></td><td class=\"data\">\n<span class=\"m-label\">20181002011         </span></td><td class=\"data\">\n<span class=\"m-label\">MATHEUS PEREIRA SANTOS</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2018/1</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">Seleção Seriada</span></td>\n</tr>\n<tr class=\"row2\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 79px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">10</span></td><td class=\"data\">\n<span class=\"m-label\">20182002019         </span></td><td class=\"data\">\n<span class=\"m-label\">VANESSA GONÇALVES DO NASCIMENTO</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2018/2</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">SISU/ENEM</span></td>\n</tr>\n</tbody>\n"},{"header":{"disciplina":"CANA, MILHO E SORGO ","periodo":"2024/1 ","situacao":"Aberta","creditos":"3","docente":"RICARDO SIQUEIRA DA SILVA"},"data":"\n<colgroup>\n</colgroup>\n<colgroup><col width=\"5%\"><col width=\"15%\"><col width=\"30%\"><col width=\"20%\"><col width=\"10%\"><col width=\"10%\"><col width=\"10%\">\n</colgroup>\n<thead><tr>\n<th class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></th>\n<th class=\"data\"><span style=\"height: 56px;\">Nº</span></th>\n<th><span style=\"height: 56px;\">Matrícula</span></th>\n<th><span style=\"height: 56px;\">Nome</span></th>\n<th><span style=\"height: 56px;\">Curso</span></th>\n<th><span style=\"height: 56px;\">Período Ingresso</span></th>\n<th><span style=\"height: 56px;\">Calouro</span></th>\n<th><span style=\"height: 56px;\">Tipo ingresso</span></th>\n</tr></thead>\n<tbody>\n<tr class=\"row1\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">1</span></td><td class=\"data\">\n<span class=\"m-label\">20201002003         </span></td><td class=\"data\">\n<span class=\"m-label\">AQUILES VINÍCIUS LIMA DE OLIVEIRA</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2020/1</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">SISU/ENEM</span></td>\n</tr>\n<tr class=\"row2\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">2</span></td><td class=\"data\">\n<span class=\"m-label\">20202002013         </span></td><td class=\"data\">\n<span class=\"m-label\">BRENDA PEREIRA DE CARVALHO</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2020/2</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">SISU/ENEM</span></td>\n</tr>\n<tr class=\"row1\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 79px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">3</span></td><td class=\"data\">\n<span class=\"m-label\">20192002009         </span></td><td class=\"data\">\n<span class=\"m-label\">CASSIANA APARECIDA FERREIRA</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2019/2</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">SISU/ENEM</span></td>\n</tr>\n<tr class=\"row2\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">4</span></td><td class=\"data\">\n<span class=\"m-label\">20162002023         </span></td><td class=\"data\">\n<span class=\"m-label\">CRISTAL CARDOSO AMARAL</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2016/2</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">SISU/ENEM</span></td>\n</tr>\n<tr class=\"row1\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 79px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">5</span></td><td class=\"data\">\n<span class=\"m-label\">20202002010         </span></td><td class=\"data\">\n<span class=\"m-label\">DAYANA RODRIGUES DE MELO</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2020/2</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">SISU/ENEM</span></td>\n</tr>\n<tr class=\"row2\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">6</span></td><td class=\"data\">\n<span class=\"m-label\">20191002029         </span></td><td class=\"data\">\n<span class=\"m-label\">GABRIELA KAROLAINE MACIEL</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2019/1</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">SISU/ENEM</span></td>\n</tr>\n<tr class=\"row1\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">7</span></td><td class=\"data\">\n<span class=\"m-label\">20201002012         </span></td><td class=\"data\">\n<span class=\"m-label\">GABRIELLA AGUIAR DOS SANTOS</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2020/1</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">SISU/ENEM</span></td>\n</tr>\n<tr class=\"row2\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">8</span></td><td class=\"data\">\n<span class=\"m-label\">20201002006         </span></td><td class=\"data\">\n<span class=\"m-label\">ISABELLE SARAIVA MEDEIROS</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2020/1</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">SISU/ENEM</span></td>\n</tr>\n<tr class=\"row1\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">9</span></td><td class=\"data\">\n<span class=\"m-label\">20201002007         </span></td><td class=\"data\">\n<span class=\"m-label\">ISADORA SILVA ROCHA</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2020/1</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">Seleção Seriada</span></td>\n</tr>\n<tr class=\"row2\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 79px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">10</span></td><td class=\"data\">\n<span class=\"m-label\">20191002026         </span></td><td class=\"data\">\n<span class=\"m-label\">JOÃO VITOR PEREIRA FERNANDES</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2019/1</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">Seleção Seriada</span></td>\n</tr>\n<tr class=\"row1\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">11</span></td><td class=\"data\">\n<span class=\"m-label\">20182002009         </span></td><td class=\"data\">\n<span class=\"m-label\">JOSÉ CARLOS DE MAGALHÃES</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2018/2</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">SISU/ENEM</span></td>\n</tr>\n<tr class=\"row2\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">12</span></td><td class=\"data\">\n<span class=\"m-label\">20191002024         </span></td><td class=\"data\">\n<span class=\"m-label\">LEYZIANE CRISTINA DE SOUZA</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2019/1</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">Seleção Seriada</span></td>\n</tr>\n<tr class=\"row1\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">13</span></td><td class=\"data\">\n<span class=\"m-label\">20201002010         </span></td><td class=\"data\">\n<span class=\"m-label\">NAYARA GOMES DE OLIVEIRA</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2020/1</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">SISU/ENEM</span></td>\n</tr>\n<tr class=\"row2\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">14</span></td><td class=\"data\">\n<span class=\"m-label\">20201002016         </span></td><td class=\"data\">\n<span class=\"m-label\">PÂMALA DE JESUS REIS FERREIRA</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2020/1</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">SISU/ENEM</span></td>\n</tr>\n<tr class=\"row1\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">15</span></td><td class=\"data\">\n<span class=\"m-label\">20192002020         </span></td><td class=\"data\">\n<span class=\"m-label\">RODRIGO MARTINS RODRIGUES</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2019/2</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">SISU/ENEM</span></td>\n</tr>\n<tr class=\"row2\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 79px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">16</span></td><td class=\"data\">\n<span class=\"m-label\">20202002017         </span></td><td class=\"data\">\n<span class=\"m-label\">STERFANY FERNANDES ROCHA</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2020/2</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">SISU/ENEM</span></td>\n</tr>\n<tr class=\"row1\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 79px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">17</span></td><td class=\"data\">\n<span class=\"m-label\">20202002016         </span></td><td class=\"data\">\n<span class=\"m-label\">VICTOR GABRIEL MACHADO FERNANDES</span></td><td class=\"data\">\n<span class=\"m-label\">AGRONOMIA</span></td><td class=\"data\">\n<span class=\"m-label\">2020/2</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">SISU/ENEM</span></td>\n</tr>\n</tbody>\n"},{"header":{"disciplina":"CANA, MILHO E SORGO ","periodo":"2024/1 ","situacao":"Aberta","creditos":"3","docente":"RICARDO SIQUEIRA DA SILVA"},"data":"\n<colgroup>\n</colgroup>\n<colgroup><col width=\"5%\"><col width=\"15%\"><col width=\"30%\"><col width=\"20%\"><col width=\"10%\"><col width=\"10%\"><col width=\"10%\">\n</colgroup>\n<thead><tr>\n<th class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></th>\n<th class=\"data\"><span style=\"height: 56px;\">Nº</span></th>\n<th><span style=\"height: 56px;\">Matrícula</span></th>\n<th><span style=\"height: 56px;\">Nome</span></th>\n<th><span style=\"height: 56px;\">Curso</span></th>\n<th><span style=\"height: 56px;\">Período Ingresso</span></th>\n<th><span style=\"height: 56px;\">Calouro</span></th>\n<th><span style=\"height: 56px;\">Tipo ingresso</span></th>\n</tr></thead>\n<tbody>\n<tr class=\"row1\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">1</span></td><td class=\"data\">\n<span class=\"m-label\">20191018016         </span></td><td class=\"data\">\n<span class=\"m-label\">DANIELLE GOMES MOREIRA</span></td><td class=\"data\">\n<span class=\"m-label\">ZOOTECNIA</span></td><td class=\"data\">\n<span class=\"m-label\">2019/1</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">Seleção Seriada</span></td>\n</tr>\n<tr class=\"row2\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 33px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">2</span></td><td class=\"data\">\n<span class=\"m-label\">20191018008         </span></td><td class=\"data\">\n<span class=\"m-label\">GEISE LEAL SANTOS</span></td><td class=\"data\">\n<span class=\"m-label\">ZOOTECNIA</span></td><td class=\"data\">\n<span class=\"m-label\">2019/1</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">SISU/ENEM</span></td>\n</tr>\n<tr class=\"row1\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">3</span></td><td class=\"data\">\n<span class=\"m-label\">20191018009         </span></td><td class=\"data\">\n<span class=\"m-label\">ÍGOR FELIPE ARAÚJO ROCHA</span></td><td class=\"data\">\n<span class=\"m-label\">ZOOTECNIA</span></td><td class=\"data\">\n<span class=\"m-label\">2019/1</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">SISU/ENEM</span></td>\n</tr>\n<tr class=\"row2\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">4</span></td><td class=\"data\">\n<span class=\"m-label\">20201018007         </span></td><td class=\"data\">\n<span class=\"m-label\">IURY DE AGUIAR REIS</span></td><td class=\"data\">\n<span class=\"m-label\">ZOOTECNIA</span></td><td class=\"data\">\n<span class=\"m-label\">2020/1</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">SISU/ENEM</span></td>\n</tr>\n<tr class=\"row1\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">5</span></td><td class=\"data\">\n<span class=\"m-label\">20182018015         </span></td><td class=\"data\">\n<span class=\"m-label\">LARISSA MARIA CABRAL DA SILVA</span></td><td class=\"data\">\n<span class=\"m-label\">ZOOTECNIA</span></td><td class=\"data\">\n<span class=\"m-label\">2018/2</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">SISU/ENEM</span></td>\n</tr>\n<tr class=\"row2\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">6</span></td><td class=\"data\">\n<span class=\"m-label\">20201018021         </span></td><td class=\"data\">\n<span class=\"m-label\">MATHEUS OLIVEIRA CARDOSO</span></td><td class=\"data\">\n<span class=\"m-label\">ZOOTECNIA</span></td><td class=\"data\">\n<span class=\"m-label\">2020/1</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">Seleção Seriada</span></td>\n</tr>\n<tr class=\"row1\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">7</span></td><td class=\"data\">\n<span class=\"m-label\">20191018006         </span></td><td class=\"data\">\n<span class=\"m-label\">NICHOLAS GABRIEL NUNES VIEIRA</span></td><td class=\"data\">\n<span class=\"m-label\">ZOOTECNIA</span></td><td class=\"data\">\n<span class=\"m-label\">2019/1</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">SISU/ENEM</span></td>\n</tr>\n<tr class=\"row2\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">8</span></td><td class=\"data\">\n<span class=\"m-label\">20202018001         </span></td><td class=\"data\">\n<span class=\"m-label\">SHEILA COSTA PEREIRA</span></td><td class=\"data\">\n<span class=\"m-label\">ZOOTECNIA</span></td><td class=\"data\">\n<span class=\"m-label\">2020/2</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">Reopção de Curso</span></td>\n</tr>\n<tr class=\"row1\"><td class=\"btn\"><span class=\"linkbtn\" style=\"height: 56px;\">&nbsp;</span></td><td class=\"data\">\n<span class=\"m-label\">9</span></td><td class=\"data\">\n<span class=\"m-label\">20192018023         </span></td><td class=\"data\">\n<span class=\"m-label\">VICTOR HUGO NUNES FERNANDES</span></td><td class=\"data\">\n<span class=\"m-label\">ZOOTECNIA</span></td><td class=\"data\">\n<span class=\"m-label\">2019/2</span></td><td class=\"data\">\n<span class=\"m-label\">Não</span></td><td class=\"data\">\n<span class=\"m-label\">SISU/ENEM</span></td>\n</tr>\n</tbody>\n"`

console.log(processData(data))


