import React from 'react';
import AuthPanel from './auth_panel';

export default class Landing extends React.Component {
  render() {
    return (
      <div className='bg-hero-pattern bg-cover'>
        <div className='grid grid-cols-11 w-screen h-screen place-items-center'>
          <div className='col-span-7 '></div>
          <div className='col-span-4'>
           <AuthPanel/>
          </div>
        </div>
      </div>
    );
  }
}
