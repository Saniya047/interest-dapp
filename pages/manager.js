import { ethers } from "ethers";
import { useState } from "react";
import Link from "next/link";
import InterestCalABI from "../utils/InterestCalABI";


const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;


export default function Manager() {
  const [rate, setRate] = useState("");
  const [newManager, setNewManager] = useState("");

  async function changeManagerHandler() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(contractAddress, InterestCalABI, signer);

  await contract.changeManager(newManager);
  alert("Manager changed successfully");
}

  async function updateRateHandler() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, InterestCalABI, signer);
    await contract.updateRate(rate);
    alert("Rate Updated");
  }

   return (
    <div className="container">
      <div className="card">
        <h2>Manager Dashboard</h2>

        {/* Update Rate */}
        <input
          placeholder="Interest Rate"
          onChange={e => setRate(e.target.value)}
        />
        <button onClick={updateRateHandler}>Update Rate</button>

        <hr />

        {/* Change Manager / Ownership */}
        <input
          placeholder="New Manager Address"
          onChange={e => setNewManager(e.target.value)}
        />
        <button onClick={changeManagerHandler}>
          Transfer Ownership
        </button>

        <Link href="/">
          <button className="link-btn">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}