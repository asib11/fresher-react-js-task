import { useState } from "react";
import image1 from '/images/image-1.webp'
import image2 from '/images/image-2.webp'
import image3 from '/images/image-3.webp'
import image4 from '/images/image-4.webp'
import image5 from '/images/image-5.webp'
import image6 from '/images/image-6.webp'
import image7 from '/images/image-7.webp'
import image8 from '/images/image-8.webp'
import image9 from '/images/image-9.webp'
import image10 from '/images/image-10.jpeg'
import image11 from '/images/image-11.jpeg'
import Images from "./Images";


const GallaryImage = () => {
    //Here array could have been used but useState hook is used if need to add image in future
    const [images, setImage] = useState([image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11])
    return (
        <div className='grid grid-cols-5 grid-flow-row gap-4'>
        
            {
                images.map((image, index) => <Images
                    key={index}
                    image={image}
                    index = {index}
                    
                ></Images>
                )
            }
        </div>
    );
};

export default GallaryImage;