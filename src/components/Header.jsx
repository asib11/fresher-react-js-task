import PropTypes from 'prop-types'

const Header = ({ select ,deleteSelectedItems}) => {
    return (
        <div>
            {select === 0 ?
            <div>
                <p>gallary</p>
            </div>
            :
            <div className='flex justify-between'>
                <div>
                    <h1><input type="checkbox" name="" checked={true} id="" /> {select} Files Selected</h1>
                </div>
                <div>
                    <button  onClick={deleteSelectedItems}>Delete Files</button>
                </div>
            </div>}
        </div>
    );
};

Header.propTypes = {
    select : PropTypes.any,
    deleteSelectedItems : PropTypes.any,
}

export default Header;