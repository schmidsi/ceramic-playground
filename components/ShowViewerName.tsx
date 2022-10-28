import { useViewerRecord } from "@self.id/framework";

function ShowViewerName() {
  const record = useViewerRecord("basicProfile");

  console.log(record);

  const text = record.isLoading
    ? "Loading..."
    : record.content
    ? `Hello ${record.content.name || "stranger"}`
    : "No profile to load";
  return <p>{text}</p>;
}

export default ShowViewerName;
