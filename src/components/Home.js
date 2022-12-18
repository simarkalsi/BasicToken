import React from 'react'
import Transfer from './Transfer';
import IssueToken from './IssueToken';


const MANAGER_ADDRESS = process.env.REACT_APP_MANAGER_ACCOUNT

export default function Home({ token, account}) {
  return (
    <>

      <div><Transfer token={token} /></div>
      <p>{MANAGER_ADDRESS}</p>
      {account==MANAGER_ADDRESS ? (<div><IssueToken token={token}/></div>):(<div></div>)}
      

    </>
  )
}
