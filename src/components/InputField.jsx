export default function InputField({ label, type, value, onChange }) {
  return (
    <div className="InputFieldContainer">
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
}
