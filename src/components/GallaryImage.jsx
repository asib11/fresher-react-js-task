import { useEffect, useState } from "react";
import Images from "./Images";
import Header from "./Header";

const GallaryImage = () => {

    const [images, setImages] = useState([]);
    const [select, setSelect] = useState([]);
    
    // const []
    //data load
    useEffect(() => {
        fetch('images.json')
            .then(response => response.json())
            .then(data => setImages(data))
    }, []);

    //click checkbox and select
    const handleSelect = id => {
        console.log(id)
        
        if(select.includes(id)){
            setSelect(select.filter(clickId =>clickId !==id ))
        }else{
            setSelect([...select, id])
        }
        // const selectItems = images.find(selectItem => selectItem.id === id);
        // if(!selectItems.state){
        //     // console.log(selectItems.state);
        //     selectItems.state = true;
        //     console.log(selectItems.state)
        // }else if (selectItems.state){
        //     selectItems.state = false;
        //     console.log(selectItems.state)
        // }

        // // const getSelectItems = images.filter(selectItem => console.log(selectItem.state) );
        // const getSelectItems = images.filter(selectItem => selectItem.state === true);
        // setSelect(getSelectItems.length);
        
    }


    return (
        <div >
            <div>
                <Header
                    select = {select.length}
                ></Header>
            </div>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-flow-row gap-4'>
                {
                    images.map((image, index) => <Images
                        key={image.id}
                        id={image.id}
                        image={image.image}
                        index={index}
                        isCheaked={select.includes(image.id)}
                        handleSelect={handleSelect}
                    ></Images>
                    )
                }
            </div>
        </div>
    );
};

export default GallaryImage;