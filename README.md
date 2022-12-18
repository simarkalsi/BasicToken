# Basic Token Project


Deployed Dapp Link-> https://basic-token.vercel.app/


Smart Contract  Address: 0x1e78d0F334edfD46031d8163753BFAB6c313E416


deployed on Goerli test net-> https://goerli.etherscan.io/address/0x1e78d0F334edfD46031d8163753BFAB6c313E416


To hide Issue Tokens from public we can use
`
{account == process.env.REACT_APP_MANAGER_ACCOUNT ? (<div><IssueToken token={token} /></div>) : (<div></div>)}
`
