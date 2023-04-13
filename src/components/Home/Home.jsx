import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import Bookmarks from '../Bookmarks/Bookmarks';
import Questions from '../Questions/Questions';
import Time from '../Time/Time';
import './Home.css'

const Home = () => {

    const [blogs, setBlogs] = useState([]);

    // State for Bookmark handleSide
    const [add, setAdd] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    // Function for spendTimeOnReading 
    const [readtime, setReadTime] = useState("");
    const spendTimeOnReading = (time) => {
        const previousWatchTime = JSON.parse(localStorage.getItem("readtime"))
        if (previousWatchTime) {
            const sum = previousWatchTime + time;
            localStorage.setItem("readtime", sum);
            setReadTime(sum);
        }
        else {
            localStorage.setItem("readtime", time)
            setReadTime(time)
        }
    }
    // For handling Bookmark
    const handleSideAdd = (blogs) => {
        const newAdd = [...add, blogs]
        setAdd(newAdd)
    }

    return (
        <div className='container gap-3'>
            <div className='row'>
                <div className='blogs-container col col-md-8'>
                    {
                        blogs.map(blog => <Blogs blog={blog} spendTimeOnReading={spendTimeOnReading} key={blog.id} handleSideAdd={handleSideAdd}></Blogs>)
                    }
                </div>

                <div className='time-container col col-md-4'>
                    <div>
                        <Time readtime={readtime} spendTimeOnReading={spendTimeOnReading} ></Time>
                    </div>
                    <div className='text-center mt-3'>
                        <div className='card text-center bg-info-subtle mt-3 mb-3'>
                            <h5>Bookmarked Blogs: {add.length} </h5>
                        </div>
                        {
                            add.map(sideAdd => <Bookmarks sideAdd={sideAdd} ></Bookmarks>)
                        }
                    </div>
                </div>
            </div>
            <Questions></Questions>
        </div>
    );
};

export default Home;