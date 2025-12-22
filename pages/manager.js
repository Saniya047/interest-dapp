import { ethers } from "ethers";
import { useState } from "react";
import Link from "next/link";

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

const abi = [
  "function updateRate(uint _r) public"
];

export default function Manager() {
  const [rate, setRate] = useState("");

  async function updateRateHandler() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    await contract.updateRate(rate);
    alert("Rate Updated");
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Manager Dashboard</h2>

        <input
          placeholder="Interest Rate"
          onChange={e => setRate(e.target.value)}
        />

        <button onClick={updateRateHandler}>Update Rate</button>

        <Link href="/">
          <button className="link-btn">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}
