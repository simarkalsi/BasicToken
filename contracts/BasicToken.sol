// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.17;

contract BasicToken{

    string private _name;
    string private _symbol;
    address private manager;
    uint256 public totalSupply;
    uint private _decimals;

    mapping(address=>uint256) public balanceOf;

    event transactionEvent(address indexed from , address indexed to, uint indexed amount);
    event issueTokensEvent(uint numOfToken);


    constructor(string memory name_, string memory symbol_, uint decimals_){
        require(decimals_<=18,"Decimal should be less than 19");
        _name=name_;
        _symbol=symbol_;
        _decimals=decimals_;
        manager=msg.sender;

    }

    //Token Data
    function name() public view returns(string memory){
        return _name;
    }
    function symbol() public view returns(string memory){
        return _symbol;
    }
    function decimals() public view returns(uint){
        return _decimals;
    }

    modifier onlyManager(){
        require(msg.sender==manager,"Only manager have permission");
        _;
    }


    function issueTokens(uint totalTokens) public onlyManager{
        totalSupply+=totalTokens;
        balanceOf[manager]+=totalTokens;
        emit issueTokensEvent(totalTokens);
    }

    function transaction(address  recipient, uint amount) public returns(bool){
        require(balanceOf[msg.sender]>=amount,"Insufficient balance");
        balanceOf[msg.sender] -=amount;
        balanceOf[recipient] +=amount;

        emit transactionEvent(msg.sender,recipient,amount);
        return true;
    }

    function balance() public view returns(uint){
        return balanceOf[msg.sender];
    }

}