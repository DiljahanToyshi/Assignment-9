import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className='container'>
        <section className='flex justify-between m-7 mx-16'>
            <p className='font-semibold text-2xl'>CarrerLink</p>
          <Link to="/">Home</Link>
          <Link to="/statistics">Staistics</Link>
          <Link to="/applied-jobs">Applied Jobs</Link>
          <Link to="/blogs"><button>Blogs</button></Link>
        </section>
      </div>
    );
};

export default Navbar;