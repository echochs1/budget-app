import { ShadChart } from "./modules/ShadChart";
import { AccountsAccordion } from "./modules/AccountsAccordion";
import { TransactionsTable } from "./modules/TransactionsTable";
export default function Home() {
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
          <div className="w-100 h-100">
            <h2 className="font-semibold">Accounts</h2>
            <AccountsAccordion/>
          </div>
        </div>
      </main>
    </div>
  );
}
