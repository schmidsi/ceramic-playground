import { useViewerRecord } from "@self.id/framework";

function SetViewerName() {
  const record = useViewerRecord("basicProfile");

  return (
    <button
      disabled={!record.isMutable || record.isMutating}
      onClick={async () => {
        if (record !== null && record.merge !== null) {
          await record?.merge!({ name: "Alice" });
        }
      }}
    >
      Set name
    </button>
  );
}

export default SetViewerName;
