import PropTypes from 'prop-types'

const Images = ({index,id,image,isCheaked,handleSelect}) => {
    const handleSelector = id =>{
        handleSelect(id)
    }
    return (
        <div className={`${index === 0 ? 'col-span-2 row-span-2': 'col-span-1 row-span-1'} relative `}>
            <input onClick={() => handleSelector(id)}  checked={isCheaked} type="checkbox" name="" id="" className='absolute m-5 h-5 w-5 '/>
            <img  className='rounded-xl border-2 border-gray-300' src={image} alt="" />
        </div>
    );
};

Images.propTypes ={
    image : PropTypes.any,
    id: PropTypes.any,
    index: PropTypes.any,
    isCheaked: PropTypes.any,
    handleSelect: PropTypes.func
}
export default Images;