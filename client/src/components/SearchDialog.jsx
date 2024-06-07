import { Card, CardContent } from "./ui/card";

const fields = [
  {
    title: "Advances in Quantum Computing",
    authors: "Dr. Alice Johnson, Dr. Bob Smith",
    publicationDate: "2022-05-14",
  },
  {
    title: "Artificial Intelligence in Healthcare",
    authors: "Dr. Carol Lee, Dr. David Brown",
    publicationDate: "2021-11-22",
  },
  {
    title: "Climate Change and Its Impacts",
    authors: "Dr. Emily Green, Dr. Frank White",
    publicationDate: "2023-02-10",
  },
  {
    title: "Nanotechnology in Modern Medicine",
    authors: "Dr. Grace Kim, Dr. Henry Wilson",
    publicationDate: "2022-08-30",
  },
  {
    title: "Renewable Energy Sources",
    authors: "Dr. Ian Taylor, Dr. Jane Evans",
    publicationDate: "2020-04-05",
  },
  {
    title: "Cybersecurity Trends in 2023",
    authors: "Dr. Karen Harris, Dr. Liam Martinez",
    publicationDate: "2023-01-15",
  },
  {
    title: "Machine Learning Algorithms",
    authors: "Dr. Nancy Anderson, Dr. Oliver Thomas",
    publicationDate: "2021-07-19",
  },
  {
    title: "The Future of Space Exploration",
    authors: "Dr. Patricia Lewis, Dr. Quentin King",
    publicationDate: "2023-03-12",
  },
  {
    title: "Bioinformatics and Genomics",
    authors: "Dr. Rachel Hall, Dr. Samuel Scott",
    publicationDate: "2022-06-25",
  },
  {
    title: "Blockchain Technology Applications",
    authors: "Dr. Tina Parker, Dr. Victor Adams",
    publicationDate: "2021-09-08",
  },
];

export default function SearchPopover() {
  return (
    <Card className="max-w-[calc((500dvw/6)-128px)] mt-4">
      <CardContent className="w-full space-y-6">
        {fields.map((field, index) => {
          return (
            <div key={index} className="w-full">
              <h2>{field.title}</h2>
              <p>
                <strong>Authors:</strong> {field.authors}
              </p>
              <p>
                <strong>Publication Date:</strong> {field.publicationDate}
              </p>
              <hr/>
            </div>
          );
        })}
        {/* {for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    } (let i = 0; i < field.length ; i++) {
    
        <div key={i} className="paper">
          <h2>{field[i].title}</h2>
          <p><strong>Authors:</strong> {field[i].authors}</p>
          <p><strong>Publication Date:</strong> {field[i].publicationDate}</p>
        </div>
      
    }} */}
      </CardContent>
    </Card>
  );
}
