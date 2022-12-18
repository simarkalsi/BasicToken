const { expect } = require("chai");
const { ethers } = require("hardhat");


describe('Tethers', () => {
  let owner,account1, account2,token, hardhatToken

  before(async () => {
    [owner, account1, account2] = await ethers.getSigners();


    token = await ethers.getContractFactory("BasicToken"); //instance contract
    hardhatToken = await token.deploy("simar", "SM", 0); //deploy contract
    console.log("deployed successfully");


  });



  describe('Tether token', () => {
    it('tranfer of total supply to owner account', async function () {
      
      await hardhatToken.issueTokens(100);

      const ownerBalance = await hardhatToken.balanceOf(owner.address);
      console.log("Owner Address : ", owner.address); //getting address of owner

      

      console.log(hardhatToken.totalSupply());
      console.log(ownerBalance);

      expect(await hardhatToken.totalSupply()).to.equal(ownerBalance); //equation to proof

    })
    it("tranfer function",async function(){
      
      await hardhatToken.transaction(account1.address,100);
      expect(await hardhatToken.balanceOf(account1.address)).to.equal(100);

      await hardhatToken.connect(account1).transaction(account2.address,50);
      expect(await hardhatToken.balanceOf(account2.address)).to.equal(50);

    })
    
  });
});