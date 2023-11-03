import PropTypes from 'prop-types'


const Images = ({ index, id, image, isChecked, handleSelect}) => {
    

    return (
        <div  className={`relative flex ${index === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'} `}
        >
            <div className=''>
                <input onClick={() => handleSelect(id)} checked={isChecked} type="checkbox" name="" id="" className={`absolute  m-5 h-5 w-5`} />
            </div>
            <div>
                <img className='rounded-xl border-2 border-gray-300' src={image} alt="" />
            </div>
        </div>
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