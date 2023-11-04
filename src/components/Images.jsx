import PropTypes from 'prop-types'
import './Images.css'
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

                        <Draggable key={id} draggableId={id.toString()} index={index}>
                            {
                                provided => (
                                    <div
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                        className='inline-block image-container'

                                    >
                                        <div>
                                            <img className='rounded-xl border-2 border-gray-300 hover:opacity-50 hover:bg-black' src={image} alt="" />
                                        </div>
                                        <div>
                                            <input onChange={() => handleSelect(id)} checked={isChecked} type="checkbox" name="" id="checkbox" className={`m-5 h-5 w-5 hidden absolute top-0 ${isChecked === true && 'inline-block'}`} />
                                        </div>

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