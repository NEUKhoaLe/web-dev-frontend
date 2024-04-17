function Footer({
  onCancel,
  onSaveAndPublish,
  onSave,
}: {
  onCancel: () => void;
  onSaveAndPublish: () => void;
  onSave: () => void;
}) {
  return (
    <div className="me-5">
      <hr />
      <div className="justify-content-between d-flex flex-row align-items-center">
        <span>
          <input type="checkbox" />
          <label className="ms-2">Notify users this quiz has changed</label>
        </span>
        <div className="d-flex flex-row">
          <button className="wd-module-button mx-1" onClick={onCancel}>Cancel</button>
          <button className="wd-module-button mx-1" onClick={onSaveAndPublish}>Save & Publish</button>
          <button className="wd-module-button red-button mx-1" onClick={onSave}>Save</button>
        </div>
      </div>
      <hr />
    </div>
  );
}
export default Footer;