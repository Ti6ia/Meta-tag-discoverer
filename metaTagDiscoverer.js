const metas = document.querySelectorAll('meta')

const printMetas = () => {
    for(let i = 0; i < metas.length; i++){
        console.log(metas[i].outerHTML);
    }
}

printMetas();
