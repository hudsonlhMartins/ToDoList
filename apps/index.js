let $ = document.querySelector.bind(document)
let input_text = $('#input_text')
let btn_buscar = $('#btn_buscar')
let items_tela =$('.items') 


let items = []
let id = 0
let contador = 0


let setList =(objeto)=>{ 
    let table =''
    for(let key in objeto){
        table+= `<li id='${key}'>
    <input type="checkbox" name="" id="">
    <span class='span${key}' onclick='updateText(${key})'>${objeto[key].name}</span>
    <button onclick='setDelete(${key})' class='btn_delete'>delete</button>
    
    </li>
`
    }
    items_tela.innerHTML = table
    
}

btn_buscar.onclick = (e)=>{
    e.stopPropagation()
    items.push({'name': input_text.value})
    setList(items)    
}

function setDelete(id){
    items.splice(id, 1)
    setList(items)
    console.log('euu')
}

function updateText(id){
    let span= $(`.span${id}`)
    console.log(span)
    let input = `<input type='text' value=${span.textContent} />`
    span.innerHTML = input
    let field = span.firstChild
    span.onmouseover = null
    span.onmouseover = null;
    field.select()
    

    field.onchange = ()=>{
        items[id].name = field.value
        setList(items)
        console.log('euu')
    }
    field.onblur = ()=>{
        console.log('saiu sem mudar')
        items[id].name = field.value
        if(!items[id].name){
            items.splice(id, 1)
            alert('koe ta me tirando')
            setList(items)
            return
        }
        setList(items)
    } 
    console.log(field)
    console.log(field.value)
    
}




input_text.onchange = ()=>{
    console.log(input_text.value)
}
