# Simple Interest Web3 DApp

This project is a **Simple Web3 decentralized application** that calculates **Simple Interest** using a Solidity smart contract deployed on a local blockchain (Ganache) and a frontend built with **Next.js (Pages Router)**. The project uses **MetaMask** for wallet interaction and **Remix IDE** for smart contract compilation and deployment.
In the updated version:

The **Solidity smart contract is included directly in the project**

A **Manager Ownership Transfer** feature is added

**Blockchain event logs** can be viewed from the frontend

---

## Tech Stack

* **OS**: Ubuntu (Linux)
* **Frontend**: React + Next.js (Pages Router)
* **Blockchain Simulator**: Ganache
* **Smart Contract IDE**: Remix Ethereum IDE
* **Wallet**: MetaMask (Chrome Extension)
* **Library**: ethers.js

---

## Prerequisites

1. Google Chrome browser
2. MetaMask browser extension
3. Node.js & npm installed
4. Git installed

---

## 1. MetaMask Setup

1. Install **MetaMask** extension from Chrome Web Store
2. Open MetaMask → Click **Continue with Google / Create Wallet**
3. Set a password and complete wallet creation

---

## 2. Ganache Installation (Terminal Only)

### Download Ganache

```bash
cd ~/Downloads
wget https://github.com/trufflesuite/ganache/releases/download/v2.7.1/ganache-2.7.1-linux-x86_64.AppImage
```

### Give Execute Permission

```bash
chmod +x ganache-2.7.1-linux-x86_64.AppImage
```

### Install FUSE (if required)

```bash
sudo apt install libfuse2
```

### Run Ganache

```bash
./ganache-2.7.1-linux-x86_64.AppImage
```

Click **Quickstart Ethereum**. Keep Ganache running.

---

## 3. Add Ganache Network in MetaMask

1. Open MetaMask
2. Click **three lines → Settings → Networks → Add Network → Add Custom Network**
3. Fill the following details:

```
Network Name: Ganache
RPC URL: http://127.0.0.1:7545
Chain ID: 1337 or 5777 (check in Ganache)
Currency Symbol: ETH
```

4. Click **Save**

---

## 4. Import Ganache Account in MetaMask

1. In Ganache, click the **key icon** of any account
2. Copy the **Private Key**
3. In MetaMask → **Accounts → Add Wallet → Import Account**
4. Paste the private key
5. Ensure balance shows **100 ETH**

---

## 5. Smart Contract (Remix IDE)

### Create Contract File

1. Open [https://remix.ethereum.org](https://remix.ethereum.org)
2. File Explorer → `contracts/` → New File
3. Create `interestCal.sol`.Take this file from project files.

---

## 6. Compile & Deploy Smart Contract

1. Open **Solidity Compiler** in Remix
2. Select compiler version `0.8.x`
3. Click **Compile interestCal.sol**

### Deploy

1. Go to **Deploy & Run Transactions**
2. Environment: **Injected Provider – MetaMask**
3. Select Ganache account
4. Gas: **Estimated Gas**
5. Value: **0 Ether**
6. Click **Deploy**
7. Confirm transaction in MetaMask

### Save Contract Address

After deployment, copy the **contract address** from Remix.

---

## 7. Frontend Setup (Next.js)

### Clone Project

```bash
git clone <your-repo-url>
cd interest-dapp
```

### Install Dependencies

```bash
npm install
```

### Add Contract Address and abi from remix

Paste the deployed contract address in the env file.
Paste the ABI of deployed contract in the ../utils/InterestCalAbi.js

---

## 8. Run the Project

```bash
npm run dev
```

Open browser:

```
http://localhost:3000
```

---

## 9. Application Pages

* **Home Page** (`index.js`)
* **Manager Page** (`manager.js`) – Update Interest Rate and change ownership
* **User Page** (`user.js`) – Calculate Interest
* **Logs Page** (`logs.js`) – See all the changes of rate or owner


## 10. Git Commands Used

```bash
git init
git add .
git commit -m "Initial commit - Simple Interest Web3 DApp"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

---

## Notes

* Ganache must be running while using the app
* MetaMask must be connected to Ganache network
* Same account must be used in Ganache, MetaMask, and Remix

---

## Author

Developed as part of a Web3 / Blockchain academic assignment.
