import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <nav>
      <div className="left">
        <Image src="/next.svg" fill />
      </div>

      <div className="right">
        <Link href={`/`}>Home</Link>
        <Link href={`/about`}>About</Link>
      </div>
    </nav>
  );
};

export default Nav;
// https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/xe53sloxzydgojii4kjl
