import React from 'react';

const Signup = () => {
  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-5'>
          <div className='card shadow p-4'>
            <h2 className='text-center mb-4'>Signup</h2>

            <form>
              <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input type='text' className='form-control' />
              </div>

              <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input type='email' className='form-control' />
              </div>

              <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input type='password' className='form-control' />
              </div>

              <button className='btn btn-success w-100'>
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;