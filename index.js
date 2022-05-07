function submitData(userName, userEmail){
        return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body:JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(response => response.json())
      .then((user) => {
        const Id = user.id
        const p = document.createElement('p');
        p.innerHTML = Id
        document.body.appendChild(p);
    })
    .catch(error => {
        const message = error
        const p = document.createElement('p')
        p.innerHTML = 'Unauthorized Access'
        document.body.appendChild(p)
    })
}