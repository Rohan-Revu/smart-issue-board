export default function SimilarIssueModal({
  issues,
  onCancel,
  onConfirm,
}: any) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>⚠️ Similar Issues Found</h3>

        <ul>
          {issues.map((i: any) => (
            <li key={i.id}>{i.title}</li>
          ))}
        </ul>

        <div className="flex mt-1">
          <button className="secondary" onClick={onCancel}>
            Cancel
          </button>
          <button onClick={onConfirm}>Create Anyway</button>
        </div>
      </div>
    </div>
  );
}
