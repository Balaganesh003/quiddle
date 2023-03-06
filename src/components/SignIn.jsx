import React from 'react';

import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="px-4 py-2">
      <h1 className="text-xl text-center">Quiddle</h1>
      <div>
        <form></form>
      </div>
    </div>
  );
}
