import './Spinner.css'

function Spinner() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <span>Loading data...</span>
    </div>
  )
}

export default Spinner;