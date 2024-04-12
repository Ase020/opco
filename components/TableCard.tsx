import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
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

import DialogCard from "./DialogCard";

export function TableCard() {
  return (
    <Table>
      <TableHeader className="bg-red-200 font-bold">
        <TableRow>
          <TableHead className="text-nowrap">ROW ID</TableHead>
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
          <TableHead className="text-nowrap">EDIT</TableHead>
          <TableHead className="text-nowrap">DELETE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 12 }).map((_, i) => (
          <TableRow key={crypto.randomUUID()}>
            <TableCell>{i + 1}</TableCell>
            <TableCell>0800002</TableCell>
            <TableCell>0000001</TableCell>
            <TableCell>01/12/2021</TableCell>
            <TableCell>440003475411</TableCell>
            <TableCell>DBT07</TableCell>
            <TableCell>African Wildlife Foundation</TableCell>
            <TableCell>-</TableCell>
            <TableCell>DBT05</TableCell>
            <TableCell>451552482.00</TableCell>
            <TableCell>451552482.00</TableCell>
            <TableCell>45155248.20</TableCell>
            <TableCell>496707730.20</TableCell>
            <TableCell>-</TableCell>
            <TableCell className="text-center">
              <ModeEditIcon fontSize="small" />
            </TableCell>
            <TableCell className="text-center">
              <DeleteForeverIcon fontSize="small" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>
            <DialogCard />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
