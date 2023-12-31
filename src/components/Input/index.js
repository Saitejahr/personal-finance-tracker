import './styles.css'
const Input = ({ label, state, setState, placeholder, type }) => {
  return (
    <div className="input-wrapper">
      <p className="label-input">{label}</p>
      <input
        type={type}
        className="custom-input"
        placeholder={placeholder}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  )
}
export default Input
