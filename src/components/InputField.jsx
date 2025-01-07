export default function InputField({ label, type, value, handleChange }) {
  return (
    <div className="InputFieldContainer">
      <label>{label}</label>
      <input type={type} value={value} onChange={handleChange} />
    </div>
  );
}
