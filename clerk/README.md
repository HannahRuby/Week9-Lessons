🧩 Full stack user authentication
Completion requirements

Authentication with Clerk
Overview
Authentication on the web is a complex topic. There are a lot of different ways to handle it. Many frameworks will have a built-in authentication system that you can use. Next.js does not. There is a popular library called Next Auth which can be great, but is complicated to configure and the documentation is out of date due to an ongoing rewrite.

There are a number of third-party managed user authentication services we can use. Some of the popular ones are Auth0, Firebase, AWS Cognito, and Okta. These services are fine, but they can be expensive and they are not always easy to use.

Clerk.com has changed this, and integrated tightly and seamlessly with Next.js and the /app router, so we're going to use it for our authentication. They offer a generous free plan, and include easy setup of email login and validation, social login, and even passwordless login with magic links sent to your email.

Being able to log in is a critical feature for most apps. It allows you to personalise the experience for each user and to store data for each user. You can restrict pages to only logged in users, and you can make sure only the correct user can access or edit their own data.

There are two long, similar words related to this two stage process:

Authentication is the process of verifying who a user is. This is usually done with a username and password, but can also be done with a magic link sent to an email address, or with a social login like Google or Facebook.

Authorisation is the process of verifying what a user is allowed to do. For example, a user might be allowed edit their own profile, posts and comments, but not anyone else's.

Authentication is checking that the user has the credentials to login. Authorisation is checking that a particular authenticated user has permission to take an action that they are trying to take.

You can check that the currently authenticated user created the post they're trying to edit by checking if the ID of the current user matches the ID stored in the database as the user that created the post. If it matches, we can allow the edit. If it doesn't match the edit should fail. A user_id field on your posts table would enable this.

Under the hood, all of this works by dropping a cookie on your machine when you authenticate, and the cookie is then sent with every request to the server. The server then uses the cookie credentials to identify the user, and perform any necessary checks.

Clerk makes it easy for us to manage user signup, login, and access to the ID of the current user from the request cookie. It also provides full featured login and signup pages, password reset, and email verification (to help ensure emails are real, and reduce spam users).

Class Plan
Demo: Clerk Setup in a new Next.js project
Workshop: Clerk setup in a new or existing project
Topics
Authentication
Authorisation
Resources
Clerk Docs
Clerk Next.js Quick start
Clerk Next.js Custom Signup and Sign in Pages
Clerk Next.js Server Actions
Workshop
Setup
The Clerk docs are excellent, so we're going to follow them closely.

⛳️ Sign in with your Github account at clerk.com

⛳️ Follow the setup guide for Next.js

⛳️ Follow the guide for configuring Signin and Signup pages

🎯 Using the reference guide for Server Actions in the Clerk docs, add user authentication to your Next.js project.

Your answer
