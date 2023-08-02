

let objectCreatHtml = new Object({

    funCr : function (html,tybeText,text){
        let crElH = document.createElement(html);
        document.body.appendChild(crElH);
        if (tybeText === ''){
           tybeText = 'p' 
        }
        let tyT = document.createElement(tybeText || 'p');
        crElH.appendChild(tyT);
        let creatText = document.createTextNode(text);
        tyT.appendChild(creatText);


    }
})


objectCreatHtml.funCr('p','','hello this is test for object');

objectCreatHtml.funCr('div','p','hello this is test for object');

