# DM CODEX SERVERLESS API
In lieu of fullstack python. I decided to host a serverless db on Vercel using postgressql. The files in the `api` directory will serve as the api layer for the application as of this writing. The move was born out of a career shift in focus by me, the author. I needed to unblock myself from the weight of standing up a professional backend from scratch to get the project moving forward with continued momentum. I may revisit the python backend in the future if the app grows and I need more control over the database (or more efficient control).

This is a little unconventional by my understanding but the serveless backend workflow will be as follows:
1. "Migrations" (creating/updating tables) will happen via the query ui in the DM Codex Vercel Project
2. Then the `drizzle` orm will be updated to reflect the current state of the database.

I am only doing the free tier so the dev and production db will have to be the same. Not sane or ideal but viable for MVP to get the app working for me and off the ground. I intend to build this in a way that little to know update will be needed for how the Frontend pulls the dat afrom the backend.

Also want to note that, despite this project not being too large and not needing an ORM, I am used to working with ORMs and like the layer of abstraction to use as I build out and add middleware.

## Authentication
I decided on the onset to go ahead and setup the Auth0 SDK
Auth flow will be handled via that and I will connect the Vercel DB to sync user data for the campaign and session tables.
A user registers via Auth0 -> then the app updates the db via the clientside api directory here. Now that user can create campaigns and sessions that relate back to their profile, but auth is handled by the much more secure Auth0

If I use Auth0 as the user store, I can use `user_metadata` to save the campaign ids they've created and not have to have a user table in my db at all which will save me space in it...