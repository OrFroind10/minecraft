const map = document.querySelector('.map');

let selectedTool = "";
let inventory = [0,0,0,0,0,0];
const initialize = () => {
    for(let i=0; i<15; i++){
        for(let j=0; j<20; j++){
            let item = document.createElement('div');
            item.classList.add('item','sky');
            item.setAttribute("row",`${i}`);
            item.setAttribute("col",`${j}`);
            map.appendChild(item);
            if(i==10)
                item.classList.add('grass');
            if(i>10)
                item.classList.add('ground');
            if((i==2 || i==1) && (j>3 && j<7))
                item.classList.add('cloud');
            if((i<10 && i>6) && (j==8))
                item.classList.add('wood');
            if(i<7 && i>3 && j>6 && j<10)
            item.classList.add('leaves');
            if((i<10 && i>7) && (j==11 || j==12))
            item.classList.add('stone');
        }
    }
}
map.addEventListener('click',()=>{})
initialize();

let items = document.querySelectorAll('.item');
console.log(items);

items.forEach((item)=>{
    item.addEventListener('click',()=>{
        console.log("click")
        if(item.classList.contains('ground')){
            inventory[0]++;
            if(selectedTool === "Shovel")
                item.classList.remove('ground')
        }
            

        if(item.classList.contains('grass')){
            inventory[1]++;
            if(selectedTool === "Shovel")
                item.classList.remove('grass')
        }
            

        if(item.classList.contains('wood')){
            inventory[2]++;
            if(selectedTool === "Axe")
                item.classList.remove('wood')
        }
            

        if(item.classList.contains('leaves')){
            inventory[3]++;
            if(selectedTool === "Axe")
                item.classList.remove('leaves')
        }
            
        if(item.classList.contains('stone')){
            inventory[4]++;
            if(selectedTool === "Pickaxe")
                item.classList.remove('stone')
        }
            

        // item.classList.remove('ground','grass','wood','leaves','cloud','stone');

    })
});

// change tool
let tools = document.querySelectorAll('.tool');
console.log(tools);
tools.forEach((tool)=>{
    tool.addEventListener('click',()=>{
        console.log("pick tool")
        if(tool.classList.contains('Axe'))
            selectedTool="Axe";
        if(tool.classList.contains('Shovel'))
            selectedTool="Shovel";
        if(tool.classList.contains('Pickaxe'))
            selectedTool="Pickaxe";  
    });
});



