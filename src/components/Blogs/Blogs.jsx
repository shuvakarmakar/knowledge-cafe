import React from 'react';
import './Blogs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';

const Blogs = ({ blog , spendTimeOnReading,handleSideAdd}) => {
    return (
        <div>
            <div className="card gap-2 mb-4" >
                <img src={blog.img} className="card-img-top" alt="..." />
                <div className="card-body">

                    <div className='d-flex justify-content-between'>
                        <div className='d-flex gap-2'>
                            <div className='blog-container'>
                                <img className='rounded-circle' src={blog.authoreImg} alt="" />
                            </div>
                            <div>
                                <h5>{blog.authoreName}</h5>
                                <p>{blog.publishDate}</p>
                            </div>
                        </div>
                        <div>
                            <h6>{blog.readtime} min read <FontAwesomeIcon onClick={() => handleSideAdd(blog.blogTitle) } icon={faBookmark} style={{cursor: "pointer"}}/></h6>
                        </div>
                    </div>
                    <h2 className="card-title">{blog.blogTitle}</h2>
                    <p className="card-text fw-light">#Beginners #programming</p>
                    <a onClick={() => spendTimeOnReading(blog.readtime)}  className="" style={{cursor: "pointer"}}>Mark as Read</a>
                </div>
            </div>
        </div>
    );
};

export default Blogs;