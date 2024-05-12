import { Link } from "react-router-dom";

function Transactions() {
  return (
    <>
      <header>
        <div>
          <div>
            <div>
              <h1>Transactions</h1>
              <div>
                <Link to="/" className="">Create Transaction</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Transactions;
