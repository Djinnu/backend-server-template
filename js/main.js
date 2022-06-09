document.querySelector('button').addEventListener('click', getTea)

async function getTea(){
    let tea = document.querySelector('input').value
    try{
        let response = await fetch(`https://backend-server-template.herokuapp.com/api/${tea}`)
        let data = await response.json()
        console.log(data)
        document.querySelector('h2').textContent = data.type
    } catch(error) {
        console.log(error)
    }
}

console.log('terv')