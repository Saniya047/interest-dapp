// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InterestCal {
    uint public R;
    address public manager;

    constructor() {
        manager = msg.sender;
    }

    function updateRate(uint _r) public {
        require(msg.sender == manager, "Only manager allowed");
        R = _r;
    }

    function calculateInterest(uint P, uint T) public view returns (uint) {
        return (P * R * T) / 100;
    }
}
