import PropTypes from 'prop-types'

const Header = ({ selectedFiles, deleteSelectedItems }) => {
    return (
        <div >
            <div className='mb-4 px-12 pt-5'>
            {
                selectedFiles === 0 ?
                    <h1 className='text-2xl font-bold'>Gallery</h1>
                    :
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-2xl font-bold'>
                                <input className='w-5 h-5 mr-2' type="checkbox" name="" checked={true} id="" />
                                {selectedFiles} Files Selected</h1>
                        </div>
                        <div>
                            <button className='font-bold text-xl text-red-500 hover:underline' onClick={deleteSelectedItems}>Delete Files</button>
                        </div>
                    </div>
            }
            </div>
            <hr className='h-0.5 bg-gray-200' />
        </div>
    );
};

Header.propTypes = {
    selectedFiles: PropTypes.any,
    deleteSelectedItems: PropTypes.any,
}

export default Header;