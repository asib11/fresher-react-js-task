import { useEffect, useState } from "react";
// import image1 from '/images/image-1.webp'
// import image2 from '/images/image-2.webp'
// import image3 from '/images/image-3.webp'
// import image4 from '/images/image-4.webp'
// import image5 from '/images/image-5.webp'
// import image6 from '/images/image-6.webp'
// import image7 from '/images/image-7.webp'
// import image8 from '/images/image-8.webp'
// import image9 from '/images/image-9.webp'
// import image10 from '/images/image-10.jpeg'
// import image11 from '/images/image-11.jpeg'
import Images from "./Images";

// const images = [
//     {
//         id:1,
//         image:image1,
//     },
//     {
//         id:2,
//         image:image2,
//     },
//     {
//         id:3,
//         image:image3,
//     },
//     {
//         id:4,
//         image:image4,
//     },
//     {
//         id:5,
//         image:image5,
//     },
//     {
//         id:6,
//         image:image6,
//     },
//     {
//         id:7,
//         image:image7,
//     },
//     {
//         id:8,
//         image:image8,
//     },
//     {
//         id:9,
//         image:image9,
//     },
//     {
//         id:10,
//         image:image10,
//     },
//     {
//         id:11,
//         image:image11,
//     },
// ]

const GallaryImage = () => {
    
    const [images, setImage] = useState([]);

    //data load
    useEffect(() => {
        fetch('images.json')
        .then(response => response.json())
        .then(data => setImage(data))
    },[]);

    //click checkbox and select
    const handleSelect = id =>{
        console.log(id)
    }
    

    return (
        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-flow-row gap-4'>
        
            {
                images.map((image, index) => <Images
                    key={image.id}
                    id= {image.id}
                    image={image.image}
                    index = {index}
                    handleSelect = {handleSelect}
                ></Images>
                )
            }
        </div>
    );
};

export default GallaryImage;