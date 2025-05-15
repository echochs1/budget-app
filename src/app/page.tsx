"use client"
import { ShadChart } from "../components/ShadChart";
import { AccountsAccordion } from "../components/AccountsAccordion";
import { TransactionsTable } from "../components/TransactionsTable";
import { Button } from "@/components/ui/button";
import { usePlaidLink } from 'react-plaid-link';
import { useEffect, useState } from "react";

export default function Home() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const createLinkToken = async() => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/plaid/create-link-token`, {method: 'POST'});
      const { link_token } = await response.json();
      setToken(link_token);
    }
    createLinkToken();
  }, []);
  
  const { open, ready } = usePlaidLink({
    token,
    onSuccess: (public_token, metadata) => {
      // send public_token to server
      console.log('public_token', public_token);
      console.log('metadata', metadata);
    },
  });

  return (
    <div className="font-[family-name:var(--font-geist-sans)] m-10">
      <main className="">
        <h1 className="text-4xl">Good evening, Elliot</h1>
        <div className="flex gap-6">
          <div className="w-200 h-160">
            <ShadChart/>
          </div>
          <div className="w-100 h-100">
            <h2 className="font-semibold">Accounts</h2>
            <AccountsAccordion/>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-200 h-100">
            <TransactionsTable/>
          </div>
          <div className="w-150 h-100 bg-slate-200">
            <Button onClick={() => open()} disabled={!ready}>Connect to Plaid</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
