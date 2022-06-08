import React from 'react';

const NavBar = ({ accounts, setAccounts}) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum){
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      })
      setAccounts(accounts);
    }
  }

  return (
    <div>
      {/* Left side - Social media Icons */}
      <div>Facebook</div>
      <div>Twitter</div>
      <div>Email</div>

      {/* Right side - Sections and Connect */}
      <div>About</div>
      <div>Mint</div>
      <div>Team</div>

      {/* Connect */}
      {isConnected? (
      <p>Connected</p>
      ):(
        <button onClick={connectAccount}>Connect</button>
      )}
    </div>
  )

}
export default NavBar;
