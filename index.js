const {Builder, Browser, By, Key, until, ChromiumWebDriver, WebDriver} = require('selenium-webdriver');

function processHeader(header){
    disciplina = header.slice(header.search("Disciplina:")+16, header.search("Período:")-3);
    periodo =header.slice(header.search("Período:")+13, header.search("Situação:")-3)
    situacao = header.slice(header.search("Situação:")+14, header.search("Carga horária:")-7)
    creditos = header.slice(header.search("Créditos:")+15, header.search("Integrações:")-11)
    docente = header.slice(header.search("Docentes:")+14, header.search("Forma de avaliação:")-7)
    
    return {disciplina,periodo,situacao,creditos,docente}
}

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
        //console.log("rows -- \n"+row)
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

(async function retrieveData() {
    
//console.log("aqui2")

    let file_content = "";
let retrievedContent = [];
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    //console.log("aqui")
    await driver.get("https://ecampus.ufvjm.edu.br");
    await driver.manage().deleteAllCookies();
    await driver.manage().addCookie({ name: "PHPSESSID", value: process.env.API_TOKEN });
    

    

    for(let i = 1198962; i< 1203000; i++){//1203000
        //console.log("alsda")
    await driver.get("https://ecampus.ufvjm.edu.br/index.php?module=ensino&action=main:turmas:conplanodep&item="+i)
    
    let header, data;
    try{
         header = await driver.findElement(By.css("#m_m42 > div")).getAttribute("innerHTML");
         header = processHeader(header)
         data =await driver.findElement(By.xpath('//*[@id="m38"]/div/div[2]/div/div/div/div[6]/div/table')).getAttribute("innerHTML");
         data = processData(data)
         retrievedContent.push({header:header, data:data});
         //driver.wait(true,200)
         console.log(i-1198962)
    }
    catch(error){
        //console.log(error)
    }
    }
    console.log(JSON.stringify(retrievedContent))
  }
   finally {
    const fs = require('node:fs');
    fs.writeFile('/Users/tulio_js879s8/Desktop/data_retriever/data.json', JSON.stringify(retrievedContent),err => {
        if (err) {
          console.error(err);
        } else {
          console.log("file written successfully")
        }
      });

      driver.close()
    
}
})();
