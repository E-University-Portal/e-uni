import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Upload } from "lucide-react";
import UploadJournalForm from "./UploadJournalForm";
import UploadBookForm from "./UploadBookForm";
import UploadPatentForm from "./UploadPatentForm";
import UploadProjectForm from "./UploadProjectForm";
import UploadConferenceForm from "./UploadConferenceForm";
export default function UploadDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Upload />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload</DialogTitle>
          <DialogDescription>Select the document to upload</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-5">
          <div className="grid grid-rows-5">
            Journal
            <Dialog>
              <DialogTrigger>Journal</DialogTrigger>
              <DialogContent>
                <UploadJournalForm />
              </DialogContent>
            </Dialog>
          </div>
          <div className="grid grid-rows-5">
            Conferences
            <Dialog>
              <DialogTrigger>Conference</DialogTrigger>
              <DialogContent>
                <UploadConferenceForm />
              </DialogContent>
            </Dialog>
          </div>
          <div className="grid grid-rows-5">
            Book
            <Dialog>
              <DialogTrigger>Book Chapter</DialogTrigger>
              <DialogContent>
                <UploadBookForm />
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger>Edited Book</DialogTrigger>
              <DialogContent>
                <UploadBookForm />
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger>Textbook</DialogTrigger>
              <DialogContent>
                <UploadBookForm />
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger>Author Book</DialogTrigger>
              <DialogContent>
                <UploadBookForm />
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger>Reference Book</DialogTrigger>
              <DialogContent>
                <UploadBookForm />
              </DialogContent>
            </Dialog>
          </div>
          <div className="grid grid-rows-5">
            Project
            <Dialog>
              <DialogTrigger>Sponsored</DialogTrigger>
              <DialogContent>
                <UploadProjectForm />
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger>Consultancy</DialogTrigger>
              <DialogContent>
                <UploadProjectForm />
              </DialogContent>
            </Dialog>
          </div>
          <div className="grid grid-rows-5">
            Patent
            <Dialog>
              <DialogTrigger>Patent</DialogTrigger>
              <DialogContent>
                <UploadPatentForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
