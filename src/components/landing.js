import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthPanel from './auth_panel';
import { useAuth } from './auth_provider';
import WhiteLogo from './white_logo';
import ageConfirmStore from '../stores/age_confirm_store'
import AgeVerificationModal from './age_verification_modal.js';
import authMall from '../stores/auth_mall';

export default function Landing (props) {
  let history = useHistory();
  let auth = useAuth();

  if (!auth.userAuthed()) {
    return (
      <div className='bg-landing bg-cover h-screen'>
        <div className="flex">
          <WhiteLogo />
        </div>
        <div className='grid grid-cols-11 place-items-center'>
          <div className='col-span-7 '></div>
          <div className='col-span-4'>
            <AuthPanel/>
          </div>
        </div>
        <AgeVerificationModal/>
      </div>
    );
  } else {
    let userIsAuthed = authMall.currentAuthService.isAuthed();

    auth.setUserAuthedState(userIsAuthed, () => {
      if (authMall.isUserNew() == true) {
        history.replace('/onboard');
      } else {
        history.replace('/dashboard');
      }
    });
    return null;
  }
}
