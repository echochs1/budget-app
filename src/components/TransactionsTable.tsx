import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    invoice: "1",
    date: "5/13",
    name: "Paddle.net",
    type: "Business",
    amount: "$3.00",
  },
  {
    invoice: "2",
    date: "5/11",
    name: "Jaws Ttobokki",
    type: "Food",
    amount: "$39.23",
  },
  {
    invoice: "3",
    date: "5/9",
    name: "Link.com",
    type: "Internal Transfer",
    amount: "+$5.00",
  },
  {
    invoice: "4",
    date: "5/9",
    name: "Steam",
    type: "Entertainment & Rec",
    amount: "$30.07",
  },
  {
    invoice: "5",
    date: "5/6",
    name: "Steam",
    type: "Entertainment & Rec",
    amount: "+$12.99",
  },
  {
    invoice: "6",
    date: "5/4",
    name: "Steam",
    type: "Entertainment & Rec",
    amount: "$16.25",
  },
  {
    invoice: "7",
    date: "5/4",
    name: "Hoyoverse",
    type: "Entertainment & Rec",
    amount: "$5.41",
  },
  {
    invoice: "8",
    date: "5/4",
    name: "Ludwig",
    type: "Shopping",
    amount: "$172.48",
  },
  {
    invoice: "9",
    date: "5/2",
    name: "Leet Code",
    type: "Education",
    amount: "$119.00",
  },
  {
    invoice: "10",
    date: "5/1",
    name: "Payment",
    type: "Credit Card Payment",
    amount: "$700.29",
  },
]

export function TransactionsTable() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead>Name</TableHead>
          <TableHead></TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.date}</TableCell>
            <TableCell>{invoice.name}</TableCell>
            <TableCell className="text-right">{invoice.type}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  )
}
