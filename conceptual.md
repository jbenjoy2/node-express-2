### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

  A: A JWT is a JSON web token, pronounced "JOT" (for some reason). It is a way to manage authorization and authentication by sending encoded tokens as part of a request that have an encrypted signature section that must match a secret key.

- What is the signature portion of the JWT?  What does it do?

    A: The signature portion is the encrypted part. It is encrypted using a secret key specific to the server running the app (or servers for multiple apps if the secret key is the same) and it is used to verify that the token is valid for the app it's accessing. If the decrypted signature matches the secret key, it's valid. 

- If a JWT is intercepted, can the attacker see what's inside the payload?

  A: Yes they can since the payload is not encrypted. Therefore, no sensitive information should be placed into the payload of the token. 

- How can you implement authentication with a JWT?  Describe how it works at a high level.

  A: JWT authentication can be implemented, speaking specifically about expres apps, using middleware. On each request, a JWT can be verified to see if one even exists and if so, the payload can be passed to the route handlers. Users must first GET a token in order to pass one on any given request, and therefore, if no token, or an invalid token, is sent in the request, a user would not be considered authenticated. 

- Compare and contrast unit, integration and end-to-end tests.

  A: All of these are important ways to test the functions of an app, an they all have many tools and methods to run tests. The differences lie in what is being tested.

  For unit testing, only small portions, like individual methods, are being tested at any given time to just make sure the functions behave as expected, especially where edge cases are concerned. Integration testing takes that and adds in the route functionality: are the routes returning expected information based on the methods they are calling? Is auth being handled properly? These are the types of questions to consider for integration testing. End-to-end testing can test the full user-flow of the app. It can simulate what a user may do from login, to full app use, to logout and everything in between to make sure it's working properly and displaying as expected. 

- What is a mock? What are some things you would mock?


  A: A mock is a substitute function or object used in unit testing when the method to be tested has dependencies that are more complex and unpredictable. It's easier to simulate that behavior with a mock so that you can properly test expected outcomes. These can include functions like Math.random(), or ajax calls to external resources. 
- What is continuous integration?

  A: CI is where you build, merge, and test code in small frequent pieces instead of large changes. It helps to automate the testing when pushing code so that no deployments are accepted with failing code. This can really come in handy when working on large scale apps. 

- What is an environment variable and what are they used for?

  A: an environemnt variable is a variable set on the actual global environment that is running the code. They're used to configure how the code will run and, in some cases, what code will run. 

- What is TDD? What are some benefits and drawbacks?

  TDD stands for test-driven development, and describes the practice of writing tests first, and building the app code based on those tests. This way, only the absolutely necessary code is written, making the code cleaner and more efficient. Some benefits are that the code architecture is cleaner because the code has to be testable, and that the code is more modular and easy to maintain. A disadvantage is that it takes longer to get the app going in the beginning and to get features implemented. 

- What is the value of using JSONSchema for validation?

  A: It takes all of the heavy lifting of having to validate request bodies and does it for you. This can significantly clean up intense conditional logic that arises with large apps requiring lots of validation. 

- What are some ways to decide which code to test?

  A: Depending on the type of test being run, the code to test will be different. In a unit test for a model, don't necessarily test every little piece of code, but only the core functionality of the method to make sure you're testing expected outcome and edge cases. With integration testing, it doesn't make sense to test against the database, since the routes aren't directly accessing the database (they will use the model methods). Therefore, test against the API itself to make sure expected outcomes and edge cases are behaving as expected. 

- What are some differences between Web Sockets and HTTP?

  A: HTTP has a request response pattern where the connection is opened when a request is made and closed after the response is sent. Websockets keep the connection open at all times, like a tunnel. For this reason, things are seen by all connected parties in real time, without having to refresh the page or make a new request. 

- Did you prefer using Flask over Express? Why or why not (there is no right 
  answer here --- we want to see how you think about technology)?


  A: I definitely, as of now, feel more confident in flask (i feel like we covered it more in depth), but i LIKE express way more and would love to keep exploring it and get more confident in it.