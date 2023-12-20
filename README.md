
# Project: Inspectify
Link to App: linkToApp.com 

Overview - Inspectify is an image classifier that helps user detect objects inside their photo. (results may vary)


# Using Locally
- Clone repo
- App is split into client and server side.
- Setup local postgres db and use migrationSeed.sql files and plug in `.env` variables
    - See .env.template for variables
    - Or import sampleData into history state

### Server Side
- `cd server`
- `npm install`
- `npm run dev-server`

### Client Side
- `cd client`
- `npm install`
- `npm run dev`

## Deployment Resources
- Client: Vercel
- DB: NeonDB
- Server/API service: Render

# Links 
- inspectify-image-client FrontEnd: https://inspectify-image-client-kqsveyk4g-thiem-dev.vercel.app/
- inspectify-image-server-dev API server: https://inspectify-image-server-dev.onrender.com 
## Features

- Upload Image via URL
- Use MobileNet to classify objects in an Image
- Caption and save image caption and classifications into a history
- Click on older history images and reclassify it
- Conditionally rendered form based on user's current form step (this was to prevent invalid user or submitting images with no classification or captions)

## Tech Stack

**Client:** React, TailwindCSS, DaisyUi, TensorFlowJS, Toastify

**Server:** Node, Express

**Database** PostgresDB 


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

