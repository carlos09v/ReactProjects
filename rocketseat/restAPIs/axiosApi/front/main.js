const url = 'http://localhost:5500/api'

// Get Users
const getUser = () => {
    axios.get(url)
        .then(res => {
            const data = res.data
            renderResults.textContent = JSON.stringify(data)
        })
        .catch(err => console.log(err))
}

// Post newUser
const addNewUser = () => {
    axios.post(url, {
        name: 'Olivia Palito',
        avatar: '',
        city: 'Rio do Sul'
    }).then(res => {
        alert(JSON.stringify(res.data)) 
    }).catch(err => console.log(err))
}

// Update User
const updateUser = () => {
    axios.put(`${url}/2`, {
        name: 'Piu Piu',
        avatar: '',
        city: 'Jacarandá'
    }).then(res => {
        alert(JSON.stringify(res.data)) 
    }).catch(err => console.log(err))
}

// Delete User
const deleteUser = () => {
    axios.delete(`${url}/5`)
        .then(res => {
            alert(JSON.stringify(res.data)) 
        }).catch(err => console.log(err))
}

// Get OneUser
const getOneUser = () => {
    axios.get(`${url}/6`)
        .then(res => {
            const data = res.data
            renderResults.textContent = JSON.stringify(data)
        }).catch(err => console.log(err))
}

getOneUser()
