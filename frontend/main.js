const formElement = document.getElementById("saveUser") //Es el form en html
console.log(formElement)

formElement.addEventListener("submit", (event) => {
    //Evitamos reinicio de pagina
    event.preventDefault();
    //Valores de los inputs
    const userName = document.getElementById("userName").value
    const userNumber = document.getElementById("userNumber").value
    //contenedor
    const container = document.getElementById('container')
    //objeto
    let userData = {
        userName : userName,
        userNumber : userNumber
    }
    let userJson = JSON.stringify(userData)

    //fetch para mandar al backend


    //Post
        fetch('http://localhost:3000/transaction', {
        method: 'Post',
        body: userJson
        }).then(x => console.log(userJson))
        alert("usuario guardado")

        //Explicacion :  el fetch de arriba, toma la direccion del puerto, 
        //e ingresa los datos del objecto transactionJson (metodo post) 

        //get
        fetch('http://localhost:3000/transaction').then((response) => response.json()) .then((data) =>{mostrarPantalla(data)});
        //Mostrara los datos.
        

        function mostrarPantalla(transactionJson){
            let nameUser = document.createElement('p');
            nameUser.textContent = `Nombre de usuario:  ${userData.userName}`;
            let numberUser = document.createElement('p')
            numberUser.textContent = `Numero: ${userData.userNumber}`;
        
            //Clases
            nameUser.classList.add('elementoAgregado')
            numberUser.classList.add('elementoAgregado')
        
            //Agregando en la en el contenedor 
            container.appendChild(nameUser);
            container.appendChild(numberUser);
        }    
})


