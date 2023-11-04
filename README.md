# Documentation of React JS Developer Task Assignment at Ollyo

## React vite is used as template
    npm create vite@latest name-of-your-project -- --template react
    cd <your new project directory>
    npm install
    npm run dev

## Tailwind is used as CSS
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
#### Configure your template paths
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
#### Add the Tailwind directives to your CSS
##### Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
**sometimes used valina css in this project

## A separate component is created for header, gallery, images

### Header
When an image is selected, the header will show how many images are selected and a delete button will be displayed. Hovering over the delete button will show the underline. If you click on the delete button, the selected images will be deleted and the show button will show only the gallery entries.

### GalleryImage
The images are created in a json file as an array of obaject and loaded with data using the useEffect hook. Then the data is sent to the header and images component. To send this data, the necessary work has been done with various functions such as selecting an image and unselecting that image. Delete the selected images. A dnd library is used to drag and drop images, swapping images from one location to another. An algorithm has been written for this swapping. Finally, an area has been created called add Image.

### Images
In the image component, the display of the images is shown in grid form, the first image is shown as a feature, the checkbox will show when hovering over the image, some opacity will appear on the image, after selecting the checkbox will not be hidden and the color will change slightly.

## heroIcone is used for Icon
    npm install @heroicons/react

## react-beautiful-dnd use for Drag and Drop
    npm i react-beautiful-dnd