import PropTypes from 'prop-types'

const Images = ({index,id,image,isCheaked,handleSelect}) => {
    const handleSelector = id =>{
        handleSelect(id)
    }
    return (
        <div className={`${index === 0 ? 'col-span-2 row-span-2': 'col-span-1 row-span-1'} relative `}>
            <input onClick={() => handleSelector(id)}  checked={isCheaked} type="checkbox" name="" id="" className='absolute m-3 h-4 w-4 '/>
            <img  className=' rounded border border-black' src={image} alt="" />
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