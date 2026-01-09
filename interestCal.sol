
pragma solidity >=0.7.0 <0.9.0;

contract InterestCal {

    uint public R;
    address public manager;

    event ManagerChanged(address indexed oldManager, address indexed newManager);
    event RateUpdated(uint oldRate, uint newRate);

    modifier onlyManager() {
        require(msg.sender == manager, "Caller is not manager");
        _;
    }

    constructor() {
        manager = msg.sender;
        emit ManagerChanged(address(0), manager);
    }

    // ONLY manager can change manager (ownership transfer)
    function changeManager(address newManager) public onlyManager {
        require(newManager != address(0), "Invalid address");
        emit ManagerChanged(manager, newManager);
        manager = newManager;
    }

    // ONLY manager can update rate
    function updateRate(uint _r) public onlyManager {
        emit RateUpdated(R, _r);
        R = _r;
    }

    // user can calculate interest
    function calculateInterest(uint P, uint T) public view returns (uint) {
        return (P * R * T) / 100;
    }
}

