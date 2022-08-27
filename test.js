const puppeteer = require('puppeteer');
const Timeout = 7000;
 
describe("crud", () => {
   let browser
   let page
 
   beforeAll(async () => {
       
       browser = await puppeteer.launch({ headless: false })
       page = await browser.newPage()
       await page.goto(`file://${__dirname}/index.html`)
       // await page.screenshot({path: 'aberturaHtml.png'})
 
 
   })
 
   afterAll(async () => {
       await page.close()
       browser.close();
   })
 
   // CADASTRAR CLIENTE - VALIDANDO CASOS DE TESTE COM NOME
 
   it ('Clicar em Cadastrar', async () => {
       await page.click('#cadastrarCliente')
       await page.screenshot({ path: 'clicarCadastrarCliente.png'})
 
   }, 7000)

 
   it ('Digitar nome', async () => {
       await page.click('#nome')
       await page.keyboard.type('Vanessa')
       await page.screenshot({ path: 'digitarNome.png'})
   }, 7000)
 
 
//    // it ('Digitar caracteres, o esperado é que não passe! TESTE PASSOU, configurando-se possível erro na programação', async () => {
//    //     await page.click('#nome')
//    //     await page.keyboard.type('*/@$#')
//    //     await page.screenshot({ path: 'digitarCaracteres.png'})
 
//    // }, 7000)
 
//    // it ('Verificando se salva com o campo NOME vazio. O Esperado é que não passe, e realmente NÃO PASSOU!', async () => {
//    //     await page.click('#nome')
//    //     await page.keyboard.type('')
//    //     await page.screenshot({ path: 'digitarNomeVazio.png'})
//    //     await expect(page).toMatch('Vanessa')
      
//    // })
 
 
   it ('Digitar Email', async () => {
       await page.click('#email')
       await page.keyboard.type('vanessapontes@gmail.com')
       await page.screenshot({ path: 'digitarEmail.png'})
   }, 7000)
 
 
//    // it ('Vericando se salva com o campo EMAIL vazio. O Esperado é que não passe, e realmente NÃO PASSOU!', async () => {
 
//    //     await page.click('#email')
//    //     await page.keyboard.type('')
//    //     await page.screenshot({ path: 'digitarEmail.png'})
//    //     await expect(page).toMatch('vanessapontes@gmail.com')
  
//    // }, 7000)
 
 
   it ('Digitar celular', async () => {
 
   await page.click('#celular')
   await page.keyboard.type('(84) 99954312')
   await page.screenshot({ path: 'digitarCelular.png'})
 
   }, 7000)
 
 
//    it ('Verificando se salva com o campo CELULAR vazio. O esperado é que não PASSE (não salvar), e realmente NÃO PASSOU!', async () => {
 
//        await page.click('#celular')
//        await page.keyboard.type('')
//        await page.screenshot({ path: 'digitarCelular.png'})
//        await expect(page).toMatch('(84) 996329488')
//    })

    
//    it ('Verificando se salva passando String no campo CELULAR. O esperado é que não salve, e SALVOU (passou)', async () => {
 
//     await page.click('#celular')
//     await page.keyboard.type('celular')
//     await page.screenshot({ path: 'digitarCelular.png'})
// })


   it ('Digitar Cidade ', async () => {
 
    await page.click('#cidade')
    await page.keyboard.type('Acari')
    await page.screenshot({ path: 'digitarCidade.png'})

    }, 7000)
 
//    it ('Verificando se salva passando campo CIDADE vazio. O esperado é que não salve, e realmente NÃO SALVOU (não passou)', async () => {
 
//    await page.click('#cidade')
//    await page.keyboard.type('')
//    await page.screenshot({ path: 'digitarCidade.png'})
//    await expect(page).toMatch('Cidade')
  
//    }, 7000)


//    it ('Verificando se salva passando campo CIDADE com número. O esperado é que não salve, mas PASSOU! ', async () => {
 
//     await page.click('#cidade')
//     await page.keyboard.type('849992323')
//     await page.screenshot({ path: 'digitarCidade.png'})

//     }, 7000)


 
   it ('Salvar', async () => {
 
       await page.focus('#salvar')
       await page.click('#salvar')
       await page.screenshot({ path: 'btnSalvar.png' })
       await page.$eval('#salvar', el => el.click());

   }, 7000)
 
//    it ('Cancelar', async () => {
//        await page.focus('#cancelar')
//        await page.click('#cancelar')
//        await page.screenshot({ path: 'cancelar.png' })
//    })

    // it ('Clicar em Editar Campos', async () => {
    //     await page.focus('#edit-0')
    //     await page.click('#edit-0')
    //     // await page.screenshot({ path: 'clicarBotãoEditar.png'})

    // })


    // it ('EDITANDO CAMPO NOME', async () => {

    //     await page.click('#nome')
    //     await page.keyboard.type('Pontes')
    //     // await page.screenshot({ path: 'CampoEditarNome.png'})

    // }, 7000)

    // it ('EDITANDO CAMPO EMAIL', async () => {

    //     await page.click('#email')
    //     await page.keyboard.type('vanessapontes@gmail.com')
    //     // await page.screenshot({ path: 'CampoEditarEMAIL.png'})
    // })


    // it ('EDITANDO CAMPO CELULAR', async () => {

    //     await page.click('#celular')
    //     await page.keyboard.type('84 99951-4321')
    //     // await page.screenshot({ path: 'CampoEditarCelular.png'})
    // })



    // it ('EDITANDO CAMPO CIDADE', async () => {
    //     await page.click('#cidade')
    //     await page.keyboard.type('Acari')
    //     // await page.screenshot({ path: 'CampoEditarCIDADE.png'})
    // })

    // it ('Salvar EDIÇÃO', async () => {
 
    //     await page.focus('#salvar')
    //     await page.click('#salvar')
    //     await page.screenshot({ path: 'btnSalvaralteração.png' })
 
    // }, 7000)


    // it ('EXCLUIR USUÁRIO', async () => {
    //     await page.focus('#delete-0')
    //     await page.click('#delete-0')
    //     page.on('dialog', dialogHandler);
    //     await page.click('#root > div > div > div.ToDoInput > button')
        
    //     await page.screenshot({ path: 'deletarUsuario.png'})

    // })
    

   it('Criar Usuario com saveClient()', async () => {
 
 
       const nome = await page.evaluate(() => document.getElementById('nome').value = "vanessa");
       const email = await page.evaluate (() => document.getElementById('email').value = "vanessapontes@gmail.com");
       const celular = await page.evaluate (() => document.getElementById('celular').value = "84 9999999");
       const cidade = await page.evaluate(() => document.getElementById('cidade').value = "Acari");
 
       const saveClient = await page.evaluate(() => saveClient());
       await page.waitForTimeout(2000)
       const readClient = await page.evaluate(() => readClient().lenght);
       await page.screenshot({ path: 'salvar.png' })
       await expect(saveClient).not.toBe(1);
 
   });
 
   it('Deletar Usuario com DeleteClient()', async () => {
       const nome = await page.evaluate(() => document.getElementById('nome').value = "vanessa");
       const email = await page.evaluate (() => document.getElementById('email').value = "vanessapontes@gmail.com");
       const celular = await page.evaluate (() => document.getElementById('celular').value = "84 99999999");
       const cidade = await page.evaluate(() => document.getElementById('cidade').value = "Acari");
 
       const saveClient = await page.evaluate(() => saveClient.call());
       const deleteClient = await page.evaluate(() => deleteClient(0));
       const array = await page.evaluate(() => readClient());
       await page.screenshot({ path: 'DELETAR.png'})
       await expect(array).toBe(0);
   });
 
   it('Editar Usuario com updateClient', async () => {
       const nome = await page.evaluate(() => document.getElementById('nome').value = "vanessa");
       const email = await page.evaluate (() => document.getElementById('email').value = "vanessapontes@gmail.com");
       const celular = await page.evaluate (() => document.getElementById('celular').value = "84 99999999");
       const cidade = await page.evaluate(() => document.getElementById('cidade').value = "Acari");
 
       const saveClient = await page.evaluate(() => saveClient.call());
       const updateClient = await page.evaluate(() => updateClient(0));
       const array = await page.evaluate(() => readClient());
       await page.screenshot({ path: 'editar.png'})
       await expect(array).toBeNull(0);
   })
  
})
 

