import { ethers } from "ethers";
import { useState } from "react";
import Link from "next/link";

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

const abi = [
  "function calculateInterest(uint P, uint T) public view returns (uint)"
];

export default function User() {
  const [P, setP] = useState("");
  const [T, setT] = useState("");
  const [result, setResult] = useState("");

  async function calculate() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const res = await contract.calculateInterest(P, T);
    setResult(res.toString());
  }

  return (
    <div className="container">
      <div className="card">
        <h2>User Dashboard</h2>

        <input
          placeholder="Principal"
          onChange={e => setP(e.target.value)}
        />

        <input
          placeholder="Time"
          onChange={e => setT(e.target.value)}
        />

        <button onClick={calculate}>Calculate Interest</button>

        <p>Interest: <b>{result}</b></p>

        <Link href="/">
          <button className="link-btn">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}
