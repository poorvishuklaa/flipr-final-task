# Blog Post Website

## Description
This project is built using **Vite** and **React** with **Tailwind CSS** for styling. It showcases a responsive multi-page web app with features such as blog navigation, hover effects, and dynamic page redirects. The site includes pages like **Home**, **Blog**, **About Us**, **Privacy Policy**, **Contact**, **Category**, and **Author**, designed to be fully responsive across all devices.


## Prerequisites
Before setting up the project, ensure you have the following installed:
- **Node.js** 
- **npm** 

## Getting Started

### 1. Clone the Repository
If you haven’t already cloned the project, start by cloning it to your local machine:

```bash
git clone "https://github.com/poorvishuklaa/flipr-final-task"
cd repo name
```
### 2. Set Up the Project
#### Initialize a Vite Project
Run the following command to create a new Vite project with the React template (JavaScript variant

```bash
npm create vite@latest ./ --template react
This will generate the project structure.
```

### 3. Install Dependencies
#### After creating the project, navigate into your project folder and install the required dependencies:

```bash
npm install
```

### 4. Set Up TailwindCSS
Run the following command to install the required packages:
```bash
npm install -D tailwindcss postcss autoprefixer
```

#### Initialize Tailwind

```bash
npx tailwindcss init -p
```

### 5. **Configure Tailwind in Your Project**

####  Edit `tailwind.config.js`

```js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Then, open the `src/index.css` file and add the following lines to import Tailwind's default styles:


```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```


### 6. Run the Development Server
#### Run the Development Server
Now you're ready to run the project locally. Start the development server by running:
```bash
npm run dev
```
This will start the server, and you can view your app at http://localhost:3000.

### 7. **Build and Deploy**
### Build and Deploy

Once you're ready to deploy, run the build command to create the production-ready version of the app:

```bash
npm run build
```
You can then deploy the contents of the dist/ folder to your preferred hosting provider, such as Vercel, Netlify, or any other service.

### 8. **Project Structure**

Here's a quick overview of the project folder structure:

```bash
├── public/            # Public assets (images, fonts, etc.)
├── src/               # Application source code
│   ├── assets/        # Assets like images, icons
│   ├── components/    # Reusable components
│   ├── pages/         # Pages in your app
│   └── index.jsx      # Main entry point for the app
├── tailwind.config.js # Tailwind CSS configuration
├── vite.config.js     # Vite configuration
├── package.json       # Project dependencies and scripts
├── README.md          # Project documentation (this file)
└── index.html         # Main HTML file
```

### 9. **Learn More**

```markdown
## Learn More

- [Vite Documentation](https://vitejs.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs)
```


## Project Features

- **Responsive Design**: The app is fully responsive across all screen sizes (mobile, tablet, desktop).
- **Hover Effects**: Interactive hover effects across various elements.
- **Dynamic Page Redirects**: Buttons and clickable areas that redirect to detailed pages, such as blog posts, category pages, and author pages.
- **Mobile Layout (Card Design)**: On smaller devices, images are displayed above the content within card components, improving readability and user experience.
- **Modular Code Structure**: The code is written clearly and is modular, making it easier to manage, test, and scale.

## Notes on Development

1. **Responsive Design for All Devices**: The app adjusts seamlessly to different screen sizes, including desktop, tablet, and mobile.
2. **Hover Effects**: Hover effects are consistent and enhance the user experience across elements like buttons, images, and links.
3. **Mobile Layout (Card Design)**: On mobile devices, images are displayed above the content within card components, improving readability.
4. **Code Readability**: The code is written clearly to be easy to debug, understand, and update.
5. **Modularity**: The app’s code is modular, making it easier to manage, test, and scale.

## Deployment Steps

1. **Deploying with Vercel**:
   - Push your code to GitHub (or any other Git repository).
   - Connect your repository to Vercel.
   - Select your project, and Vercel will automatically detect your project type (React, Vite) and deploy it for you.

2. **Handling Environment Variables**: For any sensitive keys, use the Vercel dashboard to add environment variables.

3. **Continuous Deployment**: Whenever you push updates to your Git repository, Vercel will automatically redeploy your site with the latest changes.

## Troubleshooting

- My page Privacy Policy returns a `404` error, due to a routing issue but in my local host it is working completely fine kindly understand that.

 ### . **All pages screenshots**
### **Screen 1**
![Screenshot_9-11-2024_01143_localhost](https://github.com/user-attachments/assets/738c0b8f-eb08-4747-bbd0-00960dfaab7e)

### **Screen 2**
![Screenshot_9-11-2024_01219_localhost](https://github.com/user-attachments/assets/88c9db20-63e9-43d8-9f81-8e37df55617b)

### **Screen 3**
![Screenshot_9-11-2024_01239_localhost](https://github.com/user-attachments/assets/57d0af08-1e06-4fe4-840e-bd64c1ffe094)

### **Screen 4**
![Screenshot_9-11-2024_01239_localhost](https://github.com/user-attachments/assets/7bb669a4-fc7b-4f8a-8ea9-c5f3fe3a3363)

### **Screen 5**
![Screenshot_9-11-2024_01354_localhost](https://github.com/user-attachments/assets/47c95924-a825-4786-b129-b5b03d894f7b)

### **Screen 6**
![Screenshot_9-11-2024_01418_localhost](https://github.com/user-attachments/assets/04011702-b69b-401c-9804-a050565abf39)

### **Screen 7**
![Screenshot_9-11-2024_01325_localhost](https://github.com/user-attachments/assets/a1b575c7-0ee5-45b3-aaf2-9cd6d7a84b08)

### **Screen 8**
![Screenshot_9-11-2024_01626_localhost](https://github.com/user-attachments/assets/7f164cfc-5aef-4ac9-ae6e-ed7edf361d7f)

