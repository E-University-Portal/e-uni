import { Card } from "@/components/ui/card";
import SearchBar from "@/components/SearchBar";
import UploadDialog from "../components/UploadDialog";
function Research() {
  return (
    <div>
      <Card className="flex flex-col">
        <div className="mb-4 mt-4 flex flex-col mx-4">
          <div className="flex w-full items-center justify-between">
            <SearchBar />
            <button>
              <UploadDialog />
            </button>
          </div>
        </div>
        <div className="flex mb-4 mt-4 mx-2">
          <Card className="w-1/4 mx-2 bg-[#D8E2FC] p-2 flex flex-col items-center">
            <div className="self-start text-sm text-gray-500">Till 2019</div>
            <div className="text-6xl font-bold mt-3">19</div>
            <div className="font-bold mb-">Journals</div>
          </Card>
          <Card className="w-1/4 mx-2 bg-[#F9E0E1] p-2 flex flex-col items-center">
            <div className="self-start text-sm text-gray-500">Till 2022</div>
            <div className="text-6xl font-bold mt-3">08</div>
            <div className="font-bold mb-">Chapters</div>
          </Card>
          <Card className="w-1/4 mx-2 bg-[#DAEAEA] p-2 flex flex-col items-center">
            <div className="self-start text-sm text-gray-500">Till 2024</div>
            <div className="text-6xl font-bold mt-3">11</div>
            <div className="text font-bold mb-2">Conferences</div>
          </Card>
          <Card className="w-1/4 mx-2 bg-[#EBFBFF] p-2 flex flex-col items-center">
            <div className="self-start text-sm text-gray-500">Till 2016</div>
            <div className="text-6xl font-bold mt-3">02</div>
            <div className="text font-bold mb-2">Books</div>
          </Card>
        </div>
        <Card className="m-4 h-72 bg-[#D8E2FC]">Bar graph</Card>
      </Card>
    </div>
  );
}

export default Research;
