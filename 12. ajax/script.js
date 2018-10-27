//////////////
// PROMISES //
//////////////

/*
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff worked');
    } else {
        reject('Error, it broke');
    }
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HIHI');
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POOKIE');
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Is it me you looking for');
});

Promise.all([promise, promise2, promise3, promise4]).then(values => {
    console.log(values);
});


promise
    .then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log('error!'))
    .then(result3 => {
        console.log(result3 + '!')
    });


const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
}).catch(() => console.log('error!'));


// EXERCISE: PROMISES //

// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});

// #2) Run the above promise and make it console.log "success"
promise.then(console.log);
// or
promise.then(resp => console.log(resp));

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise = Promise.resolve(
  setTimeout(() => {
    console.log("success");
  }, 4000)
);

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject("failed").catch(console.log("Ooops something went wrong"));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  "https://swapi.co/api/people/1",
  "https://swapi.co/api/people/2",
  "https://swapi.co/api/people/3",
  "https://swapi.co/api/people/4"
];

Promise.all(urls.map(url => fetch(url).then(people => people.json())))
  .then(array => {
    console.log("1", array[0]);
    console.log("2", array[1]);
    console.log("3", array[2]);
    console.log("4", array[3]);
  })
  .catch(err => console.log("ughhhh fix it!", err));

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
*/

/////////////////////
// ES8 ASYNC AWAIT //
/////////////////////

/*
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log);


async function fetchUsers() {
    const resp =await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data);
}

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

// Promise.all(urls.map(url => {
//     return fetch(url).then(resp => resp.json())
// })).then(array => {
//     console.log('users', array[0]);
//     console.log('posts', array[1]);
//     console.log('albums', array[2]);
// }).catch('oops');

const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url => 
            fetch(url).then(resp => resp.json())
        ))
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch (err) {
        console.log('oops');
    }
}
*/

// EXERCISE: ES8 ASYNC AWAIT //

// Solve the below problems:

// #1) Convert the below promise into async await
fetch("https://swapi.co/api/starships/9/")
    .then(response => response.json())
    .then(console.log);

async function fetchStarship() {
    const response = await fetch("https://swapi.co/api/starships/9/");
    const data = await response.json();
    console.log(data);
    }

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
];

const getData = async function() {
    const [users, posts, albums] = await Promise.all(
        urls.map(url => fetch(url).then(resp => resp.json()))
    );
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
};

const getData = async function() {
    const [users, posts, albums] = await Promise.all(
        urls.map(async function(url) {
        const response = await fetch(url);
        return response.json();
        })
    );
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
};


// #3) Add a try catch block to the #2 solution in order to catch any errors.
// Now chnage one of the urls so you console.log your error with 'ooooooops'
const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
            const response = await fetch(url);
            return response.json();
        }));
        console.log('users', users);
        console.log('posta', posts);
        console.log('albums', albums);
    } catch (err) {
        console.log('ooooooops', err);
    }
}