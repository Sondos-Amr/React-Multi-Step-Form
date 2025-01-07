export default function Btn({ onClick, nameButton }) {
  return (
    <div className="btnContainer">
      <button onClick={onClick}>{nameButton}</button>
    </div>
  );
}
