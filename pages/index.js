import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="card">
        <h1>Decentralized Web App</h1>

        <Link href="/manager">
          <button>Manager</button>
        </Link>

        <Link href="/user">
          <button>User</button>
        </Link>

         <Link href="/logs">
          <button>See Logs</button>
        </Link>
        
      </div>
    </div>
  );
}
