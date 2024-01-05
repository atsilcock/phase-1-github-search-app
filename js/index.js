const baseURL = 'https://api.github.com';
const endPoint = '/search/users';


function submitBox(event) {
    let searchTerm = document.getElementById('search').value;
    event.preventDefault()
    let apiUrl = `https://api.github.com/search/users?q=${searchTerm}`

    fetch(apiUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function updateDOM(data){
    console.log (data);
}


Accept: application/vnd.github.v3+json

