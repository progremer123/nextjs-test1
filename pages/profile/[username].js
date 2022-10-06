import { useRouter } from 'next/router';
import React from 'react';

export default function Userprofilepage() {
  const router = useRouter();
  const { username } = router.query;
  console.log(router.query.username);
  return (
    <div>
      <h1> /profile/[username].js </h1>
      <h2> username: {username} </h2>
    </div>
  );
}
