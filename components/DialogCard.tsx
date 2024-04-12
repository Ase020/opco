import AddIcon from "@mui/icons-material/Add";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EditForm from "./EditForm";

const DialogCard = () => {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2 px-4 py-1 bg-white rounded-md">
        <span className="text-xl font-normal">Add</span>
        <AddIcon />
      </DialogTrigger>{" "}
      <DialogContent className=" max-w-5xl">
        <DialogHeader className="">
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription className="">
            <EditForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogCard;
