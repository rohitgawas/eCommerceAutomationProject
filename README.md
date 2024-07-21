Readme.md for ecommerce site :

Test case :

1.	Open amazon.in website
2.	Login with valid credentials
3.	Click on burger menu
4.	Go to categories 
5.	Go to Mobiles , computers
6.	Go to All mobile phones
7.	Select IQOO and add any phone to cart
8.	Now go to burger menu > Categories > TV , Appliances and Electronics > Televisions
9.	Add any TV to Cart
10.	Go to burger menu > Categories > TV , Appliances and Electronics >  Headphones 
11.	Add any headphones to cart
12.	Go to cart
13.	Click on Proceed to pay
14.	Enter address 
15.	Select delivery options


Getting started :

1.	Clone the repository in local storage
2.	Open the repository in IDE.
3.	Open the terminal 
4.	On root directory of the repository (which has the package.json file) :
perform following command :
```
    npm install
```

This will install all the dependencies required for this project to run like , Cypress , mochawesome.


5.	Now go to cypress.config.js and make following settings :


```

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: "https://www.amazon.in/",
    userName: "Add your user name here",
    password: "Add your password here",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/tests/*.js",
    defaultCommandTimeout: 40000,
  },
  reporter: "mochawesome",
});

```

6.	Now in terminal , go to the root directory and open cypress test runner using one of the following command :
```
- node_modules/.bin/cypress open
OR
- npx cypress open
```

7.	Now select the e2e testing

8.	Select the desired browser


9.	Select the test “testEcommerceScenario.js” from e2e/tests folder in UI


10.	This will run the test in cypress test runner.



Folder structure :

In the repository cypress folder structure is based on Page object model framework.
It is arranged like :
```
-Cypress 
  -Downloads
  -e2e
    - tests
    - Utilities
  -Fixtures
    - eCommercePageID.json
  -Screenshots
  -Support 
    -commands.js
  -Videos

```
1.	E2e folder is consist of two sub folders , tests and Utilities
Tests folder is consist of actual cypress tests
Utilities folder containseCommerceFuctions.js file , which includes all the functions used by main cypress test.


2.	Fixtures folder contains eCommercePageID.json file , which includes all the elements ID used by the main test.


3.	Support folder includes commands.js file , which includes all the functions which are supposed to be used frequently by all the main tests.


4.	Videos folder will store all the videos recorded by mochawesome while tests are running.






How to generate HTML reports :

To generate html reports of the running tests , we can use following commands in terminal :
```
- node_modules/.bin/cypress run --reporter mochawesome   
```
This will run the tests in headless modes and will store the html reports under mochawesome-reports folder which is present in root directory.

```
- node_modules/.bin/cypress run --reporter mochawesome –headed  
```
This will run the tests in headed mode in browser and will store the html reports under mochawesome-reports folder which is present in root directory.













