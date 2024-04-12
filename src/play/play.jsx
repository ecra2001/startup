import React from 'react';

import { Players } from './players';
import { CookieClicker } from './cookieClicker';

export function Play(props) {
  return (
    <main className='bg-secondary'>
      <Players userName={props.userName} />
      <CookieClicker userName={props.userName} />
    </main>
  );
}