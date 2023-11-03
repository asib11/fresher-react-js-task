import { useEffect, useState } from "react";
import Images from "./Images";
import Header from "./Header";
import toast, { Toaster } from 'react-hot-toast';

const GallaryImage = () => {

    const [images, setImages] = useState([]);
    const [select, setSelect] = useState([]);

    //data load from json file
    useEffect(() => {
        fetch('images.json')
            .then(response => response.json())
            .then(data => setImages(data))
    }, []);

    //click checkbox and select
    const handleSelect = id => {
        console.log(id)

        if (select.includes(id)) {
            setSelect(select.filter(imageId => imageId !== id))
        } else {
            setSelect([...select, id])
        }
    };

    //delete selected files
    const deleteSelectedItems = () => {
        const updatedImages = images.filter(image => !select.includes(image.id));
        setImages(updatedImages);
        setSelect([]) //Clear the selected images after deletion
        toast.success(`${select.length} Files Deleted successfully!`);
    }
    
    return (
        <div className="m-5 bg-white rounded-xl">
            {/* header section */}
            <nav>
                <Header
                    selectedFiles={select.length}
                    deleteSelectedItems={deleteSelectedItems}
                ></Header>
            </nav>

            {/* image gallery section */}
            <div className=' px-12 py-9 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-flow-row gap-8'

            >
                {
                    images.map((image, index) => <Images
                        key={image.id}
                        id={image.id}
                        image={image.image}
                        index={index}
                        isChecked={select.includes(image.id)}
                        handleSelect={handleSelect}
                        images = {images}
                        setImages = {setImages}
                    ></Images>
                    )
                }
            </div>

            <Toaster //when delete image it show a notifiction
                //toster style
                toastOptions={{
                    style: {
                        background: '#d0fccf',
                        fontWeight: 700,
                        fontSize: '20px'
                    },

                }}
            />
        </div>
    );
};

export default GallaryImage;