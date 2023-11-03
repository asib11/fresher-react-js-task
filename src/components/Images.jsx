import PropTypes from 'prop-types'
import { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';


const Images = ({ index, id, image, isChecked, handleSelect }) => {
   

    // Manage visibility of checkbox
    

    return (
        <Droppable droppableId={index.toString()}>
            {
                (provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={`relative flex ${index === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'} `}
                    >
                        {
                           <input onChange={() => handleSelect(id)} checked={isChecked} type="checkbox" name="" id="" className={`absolute  m-5 h-5 w-5`} />
                        }
                            
                        

                        <Draggable key={id} draggableId={id.toString()} index={index}>
                            {
                                drag => (
                                    <div
                                        {...drag.draggableProps}
                                        {...drag.dragHandleProps}
                                        ref={drag.innerRef}
                                    >
                                        <img className='rounded-xl border-2 border-gray-300' src={image} alt=""/>
                                    </div>
                                )
                            }
                        </Draggable>

                    </div>
                )
            }
        </Droppable>



    );
};

Images.propTypes = {
    image: PropTypes.any,
    id: PropTypes.any,
    index: PropTypes.any,
    isChecked: PropTypes.any,
    handleSelect: PropTypes.func
}
export default Images;