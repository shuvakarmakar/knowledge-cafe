import React from 'react';

const Bookmarks = ({sideAdd}) => {
    return (
        <div>
            <div className='card'>
                {
                    <h5>{sideAdd}</h5>
                }
            </div>
        </div>
    );
};

export default Bookmarks;