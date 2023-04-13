import './App.css';
import './Components/table.js'

export default function App() {
  const billAmount = document.querySelector("bill-amount");
  const cashGiven = document.querySelector("cash-given");
  // const errorMessage = document.querySelector("errorMessage");

  function onChangeHandler(event) {
    var userBillInput = event.target.value;

    checkChanges(userBillInput);
  }

  function checkChanges(userBillInput) {
    console.log("clicked");
    console.log(billAmount);
    if (billAmount > 0) {
      console.log(billAmount);
      if (cashGiven <= billAmount) {
        console.log("right");
      } else {
        console.log("wrong");
        //errorMessage.innerText = "Do you want to wash plates?";
      }
    } else {
      console.log("In outer else part");
      // errorMessage.innerText = "Enter a valid number";
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div>
          <h1 className="heading">Cash Register Manager</h1>
          <p className="peragraph">
            Enter the bill amount and cash given by the customer and know
            minimum number of notes to return
          </p>
          <label className="label">Bill Amount:</label>
          <input
            className="inputArea"
            id="bill-amount"
            type="text"
            onChange={onChangeHandler}
          />
          <label className="label">Cash Given:</label>
          <input
            className="inputArea"
            id="cash-given"
            type="text"
            onChange={onChangeHandler}
          />
          <button
            className="checkBtn"
            id="checkBtn"
            onClick={() => checkChanges()}
          >
            Check
          </button>
          <div id="errorMessage"> {} </div>

          <tableChange />
        </div>
      </div>
    </div>
  );
}
