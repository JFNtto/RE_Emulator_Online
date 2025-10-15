function naoSeMexe(){
    window.addEventListener("keydown", (e)=>{
        const travar = ["ArrowUp", "ArrowDown"];
        if (travar.includes(e.key)){
            e.preventDefault();
        }
    }, {passive: false})
}

naoSeMexe();