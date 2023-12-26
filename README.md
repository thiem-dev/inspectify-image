# Project: Inspectify [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![App Screenshot](https://github.com/thiem-dev/inspectify-image/blob/dev/readMeAssets/inspectify-mainv1.jpg)

## Overview 
- Inspectify is an image classifier that helps user detect objects inside their photo. (results may vary)
- Built on PERN - Postgres, Express, React, Node 

Link to App: https://inspectify-image-client.vercel.app/ 

- Link to backend api: inspectify-image-server-dev API server: https://inspectify-image-server-dev.onrender.com
- **Note** Image history data might take time to load (1min) as web service spins up after a period of inactivity. If site is down (90 day life cycle on render.com) - let the code monkey know to redeploy. Latest Deploy (19 Dec 2023)



## Features
- Upload Image via URL with immediate image page update. 
- Use MobileNet to classify objects in an Image
- Caption and save image caption and classifications into a history
- Click on older history images and reclassify it
- Conditionally rendered form based on user's current form step (this was to prevent invalid user or submitting images with no classification or captions)


## Tech Used

### Libraries:

- TensorFlowJS: a js library for machine learning. See: https://www.tensorflow.org/js/
    - MobileNet: A small, low-latency, low-power model that can take any browser-based image element as input and return an array of likely predictions and confidence %. The low power model tradeoff is that it can run on any browser and load quickly, but its accuracy is lower (but still very accurate with animals and well known objects)
- Vite: a Frontend build tool for React that allows for fast "bundless" development. TLDR: It's for mainly for better CRA (create-react-app) via `npm create vite@latest`
- DaisyUi + TailwindCSS:  Lightweight CSS component based framework. (Daisy elements are easier to modify than vanilla Tailwind)
- Toastify: A lightweight JS notification library. See: https://apvarun.github.io/toastify-js/
- CORS: middleware for removing COR restrictions. See: https://www.npmjs.com/package/cors

### Services
- NeonDB: Free Postgres DB. See: https://neon.tech/
    - (maybe switching to supabase in the future)
- Render: Free place for DB and other webservices. Apps spin down after 10min of inactivity and removed after (90days). See: https://dashboard.render.com/
- Vercel: A react based front end cloud hosting service. (The deployment speed is phenomenal)


## Deployment Notes 
- Render Environment
    - Webservice:
        - Build Command: `npm install`
        - Start Command: `npm start`
- Vercel
    - Static Site:
        - Build Comand: `npm build` / `vite build`
        - Output Dir: `dist`
        - Install Command: `npm install`


## Local Test
<details>
  <summary>Running Locally</summary>

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

</details>


## App States Screenshots
![App Screenshot](https://github.com/thiem-dev/inspectify-image/blob/dev/readMeAssets/inspectify-herov1.jpg)
![App Screenshot](https://github.com/thiem-dev/inspectify-image/blob/dev/readMeAssets/inspectify-mainBv1.jpg)


## Development Notes

<h3>Wireframe</h3>
<img src="https://github.com/thiem-dev/inspectify-image/blob/dev/readMeAssets/inspectify-wireframev1.jpg" alt="Wireframe" width="400" height="300">


<h3>Entity Relationship Diagram (ERD)</h3>
<img src="https://github.com/thiem-dev/inspectify-image/blob/dev/readMeAssets/inspectify-ERDv2.jpg" alt="ERD" width="400" height="300">


<h3>MobileNet Convolutional Neural Network Diagram</h3>
<img src="https://github.com/thiem-dev/inspectify-image/blob/dev/readMeAssets/MobileNet-basicCNN.jpg" alt="MobileNet CNN Diagram" width="400" height="300">








