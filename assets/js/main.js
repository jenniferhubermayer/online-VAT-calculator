berechneMehrwertsteuer = (event) =>{
    event.preventDefault();
    let wasBerechnen = +document.querySelector("input[name='wasBerechnen']:checked").value;
    let mwst = +document.querySelector("input[name='mwst']:checked").value;
    let betrag = +document.querySelector("input[name='betrag']").value;
    let mwstBetrag = document.querySelector(".mwstBetrag")
    let bruttoBetrag = document.querySelector(".bruttoBetrag")

    switch(wasBerechnen){
        case 1:
            mwstBetrag.innerText = `${(mwst * betrag / 100).toFixed(2)} €`;
            bruttoBetrag.innerText = `${(mwst * betrag / 100 + betrag).toFixed(2)} €`;
            break;
        case 2:
            mwstBetrag.innerText = `${(mwst * betrag / (mwst + 100)).toFixed(2)} €`;
            bruttoBetrag.innerText = `${betrag - (mwst * betrag / (mwst + 100)).toFixed(2)} €`;
            break;
    }
}