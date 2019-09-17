# api-test-mocha

### Get started
- Step1 : Clone or Download this repo
- Step2 : ```npm install```
- Step3 : ```sudo npm install -g mocha```
- Step4 : ```npm install -g newman```

### Test Result
- ```mocha```
![Image of mocha](https://github.com/ioulungTsai/api-test-mocha/blob/master/images/mocha.png)
- ```npm start```
- ```newman run test/newman/api-test-mocha.postman_collection.json```
![Image of newman](https://github.com/ioulungTsai/api-test-mocha/blob/master/images/newman.png)
- ```sh test/curl/post.sh```
![Image of curl](https://github.com/ioulungTsai/api-test-mocha/blob/master/images/curl.png)

### What can learn form this repo
1. Run unit test & api supertest using **mocha** with **Should.js** & **supertest.js**.
2. **Password authentication** pattern using **regular expressions (RegEx)**.
3. Create **Postman Collections** to **organize individual requests** and **build integration test suites**.
4. Using **Newman** run and test a **Postman collection** directly from the command-line.
5. Execute **curl test scripts** in **filename.sh** file by command **sh /dir/filename.sh**.

### References
- [How to Test Nodejs Code and RESTful API](https://codeforgeek.com/unit-testing-nodejs-application-using-mocha/?fbclid=IwAR2cgqTrEp-gzkq58RNZgHU49eQJbP3alG79e5U-J8iPV_bQWbkE4BCVm6c)
- [Mocha](https://mochajs.org/)
- [Should.js](https://shouldjs.github.io/)
- [supertest package](https://www.npmjs.com/package/supertest)
- [Use RegEx To Test Password Strength In JavaScript](https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/)
- [Newman package](https://www.npmjs.com/package/newman#command-line-options)
- [Postman Creating Collections](https://learning.getpostman.com/docs/postman/collections/creating_collections/)
- [How to use `curl` scripts to test RESTful web services](https://alvinalexander.com/web/using-curl-scripts-to-test-restful-web-services)
- [How to cURL POST from the Command Line](http://osxdaily.com/2017/01/30/curl-post-request-command-line-syntax/)
