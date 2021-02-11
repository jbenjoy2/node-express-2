**`BUG#1`**:  app in (app.js) was being exported twice

**`BUG#2`**: User.getAll() model takes in a username/password that is never passed in the route, and returns more from the query than the route wants.

**`BUG#3`**: Current auth has admin tested second on patch route independently of login route, meaning even if correct user token is sent, the admin requirement throws an error and correct user cannot patch data. 

**`BUG#4`**: With previous fix in place, test to disallow patching of not-allowed fields fails (it only passed before because the token being sent was not passing the auth, so field was never being read.)
**`BUG#5`**: login route is not awaiting the promise from the User.authenticate method, and is therefore not throwing the error properly and is instead just allowing a token to be generated no matter what. 

**`BUG#6`**: Token in middleware/auth/authUser is not being verified, but decoded. This doesn't do what the docstring says and therefore will not properly authenticate users. 