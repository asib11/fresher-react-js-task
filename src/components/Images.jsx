import PropTypes from 'prop-types'

const Images = ({index,image}) => {
    console.log(index);
    return (
        <div className={`${index === 0 ? 'col-span-2 row-span-2': 'col-span-1 '} `}>
            {/* {
                index === 0? <img className='col-span-2' src={image} alt="" />: <img className='' src={image} alt="" />
            } */}
            <img className='' src={image} alt="" />
            
        </div>
    );
};

Images.propTypes ={
    image : PropTypes.any,
    index: PropTypes.any
}
export default Images;