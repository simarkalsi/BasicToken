import React from 'react'
import Transfer from './Transfer';
import IssueToken from './IssueToken';





export default function Home({ token }) {
  return (

    <div>

      <div><Transfer token={token} /></div>
      <div><IssueToken token={token} /></div>

    </div>
  )

}
