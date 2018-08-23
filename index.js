const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const app = express();

//Serve static files from React app
app.use(express.static(path.join(__dirname, 'client/build')));

//Put all API endpoints under '/api'

app.get('/api/tracker', (req, res) => {
	let urls = [
    'https://api.fortnitetracker.com/v1/profile/pc/lonefreak',
    'https://api.fortnitetracker.com/v1/profile/pc/Grùmpy',
    'https://api.fortnitetracker.com/v1/profile/pc/ellis endo',
    'https://api.fortnitetracker.com/v1/profile/pc/Ambrosiann',
    'https://api.fortnitetracker.com/v1/profile/pc/BawseMane',
  ];
  let requests = urls.map(url => fetch(url, {
      method: "GET",
      mode: "no-cors",
      credentials: "include",
      headers: {
      "TRN-Api-Key": "582365b9-87d8-4c86-af13-a4c0caaec1b1"
      }
  }));

  Promise.all(requests)
    .then(responses=> Promise.all(responses.map(r => r.json())))
    // .then(users => users.forEach(user => user.json()))
    .then((data)=> {
      return res.send({data:JSON.stringify(data)})
    })
});

//Catchall handler for all requests that don't match above
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname+'/client/build/index.html'))
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('listening on port');