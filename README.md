![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

# PERN Project: Inspectify [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
Link to App: linkToApp.com 

# Links 
- inspectify-image-client FrontEnd: https://inspectify-image-client-kqsveyk4g-thiem-dev.vercel.app/
- inspectify-image-server-dev API server: https://inspectify-image-server-dev.onrender.com

Overview - Inspectify is an image classifier that helps user detect objects inside their photo. (results may vary)
- Built on PERN - Postgres, Express, React, Node 

## Features
- Upload Image via URL
- Use MobileNet to classify objects in an Image
- Caption and save image caption and classifications into a history
- Click on older history images and reclassify it
- Conditionally rendered form based on user's current form step (this was to prevent invalid user or submitting images with no classification or captions)



## Libraries & Services 
- DaisyUi + TailwindCSS: 
- TensorFlowJS
    - MobileNet
    - Models:
- Vite 
- Toastify
- CORS
- Services
    - NeonDB:
        - (maybe switching to supabase in the future)
    - Render
    - Vercel


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


## Screenshots
<details>
    <summary>App States</summary>

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
</details>


## Development Notes
<details>
    <summary>Development Pics</summary>
    
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
</details>




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

