### Part of [freeCodeCamp.org](https://www.freecodecamp.org/) Back End Development and APIs Certificate

Note: This project was built in progress for the <strong>freeCodeCamp Back End Development and APIs Projects Certificate</strong>. This was for <strong>project #3</strong>. This is a clone of the freeCodeCamp boilerplate repo from Github. The clone only included the starting packages and initial code. I had to build the actually API by myself, following the user stories and technical requirements requested by freeCodeCamp.


# Challenge?
## To Build a URL Shortener Microservice

## User Stories To Fullfill

Build a full stack JavaScript app that is functionally similar to this:  https://url-shortener-microservice.freecodecamp.rocks. Working on this project will involve you writing your code using one of the following methods:

- Clone [this GitHub repo](https://github.com/freeCodeCamp/boilerplate-project-urlshortener/) and complete your project locally.
- Use [our Replit starter project](https://replit.com/github/freeCodeCamp/boilerplate-project-urlshortener) to complete your project.
- Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.

When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the ```Solution Link``` field. Optionally, also submit a link to your project's source code in the ```GitHub``` Link field.

HINT: Do not forget to use a body parsing middleware to handle the POST requests. Also, you can use the function ```dns.lookup(host, cb)``` from the ```dns``` core module to verify a submitted URL.

## Technical Requirements

- You should provide your own project, not the example URL.

- You can POST a URL to ```/api/shorturl``` and get a JSON response with ```original_url``` and ```short_url``` properties. Here's an example: ```{ original_url : 'https://freeCodeCamp.org', short_url : 1}```

- When you visit ```/api/shorturl/<short_url>```, you will be redirected to the original URL.

- If you pass an invalid URL that doesn't follow the valid ```http://www.example.com``` format, the JSON response will contain ```{ error: 'invalid url' }```

## What I used to create?

I cloned the freeCodeCamp repo from Github.

## Key Concepts Used

- HTTPS Requests
- Body-Parser
- dns.lookup()
- Building an API
- Express.js
- Node.js
- Javascript

## Source Code?

Check out my source code above.

## Feedback?

Let me know! I would love to know what you think.
