document.querySelector('button').addEventListener('click', getTea)

async function getTea(){
    let tea = document.querySelector('input').value
    try{
        let response = await fetch(`/localhost:8000/api/${tea}`)
        let data = await response.json()
        document.querySelector('h2').textContent = data.type
    } catch(error) {
        console.log(error)
    }
}

console.log('terv')