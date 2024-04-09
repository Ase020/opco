import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function TableCard() {
  return (
    <Table>
      <TableHeader className="bg-red-200 font-bold">
        <TableRow>
          <TableHead className="text-nowrap">PSP ID</TableHead>
          <TableHead className="text-nowrap">BANK ID</TableHead>
          <TableHead className="text-nowrap">REPORTING DATE</TableHead>
          <TableHead className="text-nowrap">BANK A/C</TableHead>
          <TableHead className="text-nowrap">TRUST A/C</TableHead>
          <TableHead className="text-nowrap">ORG RECEIVING DONATION</TableHead>
          <TableHead className="text-nowrap">SECTOR CODE</TableHead>
          <TableHead className="text-nowrap">TRUST A/C INT</TableHead>
          <TableHead className="text-nowrap">OPENING BAL</TableHead>
          <TableHead className="text-nowrap">PRINCIPAL AMOUNT</TableHead>
          <TableHead className="text-nowrap">INTEREST EARNED</TableHead>
          <TableHead className="text-nowrap">CLOSING BAL</TableHead>
          <TableHead className="text-nowrap">INT UTILIZED</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell>1</TableCell>
            <TableCell>0800002</TableCell>
            <TableCell>0000001</TableCell>
            <TableCell>01/12/2021</TableCell>
            <TableCell>440003475411</TableCell>
            <TableCell>DBT07</TableCell>
            <TableCell>African Wildlife Foundation</TableCell>
            <TableCell>-</TableCell>
            <TableCell>451552482.00</TableCell>
            <TableCell>451552482.00</TableCell>
            <TableCell>45155248.20</TableCell>
            <TableCell>496707730.20</TableCell>
            <TableCell>-</TableCell>
          </TableRow>
        ))}
      </TableBody>

      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
