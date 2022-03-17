export function dataToHTMLList (array) {
    const HTMLElements = array.map(
        (item) => {
            const li = document.createElement("li");
            //li.innerText = `Importe: ${item} puntos.`;
            li.innerText = `El resultado de dividir ${item} entre 2 es ${item/2}`; 
            return li;
        }
    )
    document.querySelector("#list").append(...HTMLElements);
}