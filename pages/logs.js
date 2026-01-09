import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Link from "next/link";
import InterestCalABI from "../utils/InterestCalABI";

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;


export default function Logs() {
  const [logs, setLogs] = useState([]);

  async function fetchLogs() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, InterestCalABI, provider);

    // Fetch events
    const rateEvents = await contract.queryFilter("RateUpdated");
    const managerEvents = await contract.queryFilter("ManagerChanged");

    const formattedLogs = [];

    rateEvents.forEach(e => {
      formattedLogs.push({
        type: "RateUpdated",
        data: `Rate changed from ${e.args.oldRate} to ${e.args.newRate}`
      });
    });

    managerEvents.forEach(e => {
      formattedLogs.push({
        type: "ManagerChanged",
        data: `Manager changed from ${e.args.oldManager} to ${e.args.newManager}`
      });
    });

    setLogs(formattedLogs.reverse()); // latest first
  }

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h2>Contract Logs</h2>

        {logs.length === 0 && <p>No events found</p>}

        {logs.map((log, index) => (
          <p key={index}>
            <b>{log.type}:</b> {log.data}
          </p>
        ))}

        <Link href="/">
          <button className="link-btn">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}
