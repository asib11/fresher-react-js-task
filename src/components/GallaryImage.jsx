import { useEffect, useState } from "react";
import Images from "./Images";
import Header from "./Header";
import toast, { Toaster } from 'react-hot-toast';
import { DragDropContext } from "react-beautiful-dnd";

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
        setSelect([]); //Clear the selected images after deletion
        toast.success(`${select.length} Files Deleted Successfully!`);
    }

    // swapping algorithm
    const handleSwapping = (result) => {
        // console.log('this is result', result);
        const { source, destination } = result;
        const cloneImage = [...images];
        const stored = cloneImage[source.index];
        cloneImage[source.index] = cloneImage[destination.index];
        cloneImage[destination.index] = stored;
        // console.log(cloneImage);
        setImages(cloneImage);
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
            <DragDropContext onDragEnd={handleSwapping}>
                <div className=' px-12 py-9 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-flow-row gap-8 relative'>
                    {
                        images.map((image, index) => <Images
                            key={image.id}
                            id={image.id}
                            image={image.image}
                            index={index}
                            isChecked={select.includes(image.id)}
                            handleSelect={handleSelect}
                        ></Images>
                        )
                    }
                    <div className='col-span-1 row-span-1 w-100 flex h-100 rounded-xl border-2 border-gray-300'>add image</div>
                </div>
            </DragDropContext>


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