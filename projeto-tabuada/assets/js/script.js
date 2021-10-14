document.querySelector('button').addEventListener('click', (e) => {

    let tabuada = document.querySelector('#tabuada tbody');
    let valorA = document.querySelector('input').value;

    if(!valorA) {
        alert("Por favor, digite um valor.")
        
        return;
    }

    tabuada.innerHTML = '';

    for(let valorB = 0; valorB <= 10; valorB++) {
        let resultado = valorA * valorB;

        let template = `
            <tr>
                <td>${valorA}</td>
                <td>x</td>
                <td>${valorB}</td>
                <td>=</td>
                <td>${resultado}</td>
            </tr>`;

        let tr = document.createElement('tr');

        tr.innerHTML = template;

        tabuada.append(tr);
    }
})