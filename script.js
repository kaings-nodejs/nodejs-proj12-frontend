// Code goes here

const loginButton = document.getElementById('login');
const getButton = document.getElementById('get');
const postButton = document.getElementById('post');
let authToken;

loginButton.addEventListener('click', () => {
    const data = {
        user: 'authorized user'  // the ONLY user
    };

    fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(result => result.json())
    .then(res => {
        console.log('res..... ', res);
        authToken = res.token;
    })
    .catch(err => {
        console.log(err);
    });
});

getButton.addEventListener('click', () => {  
  fetch('http://localhost:3001/posts', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + authToken
    }
  })
  .then(res => res.json())
  .then(result => {
    // res.json() is a Promise  
    console.log('result.....', result);
  })
  .catch(err => {
    console.log('Error..... ', err);
  })
});

postButton.addEventListener('click', () => {  
  const data = {
    title: 'sending POST',
    content: 'sending POST via frontend in REST API lesson!'
  }
  
  fetch('http://localhost:3001/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',    // set the content-type as json format in order to parse the request body
      'Authorization': 'Bearer ' + authToken
    },
    body: JSON.stringify(data)    // send the data as json in order to parse the request body
  })
  .then(res => res.json())
  .then(result => {
    console.log('result..... ', result);
  })
  .catch(err => {
    console.log('Error..... ', err);
  })
});



