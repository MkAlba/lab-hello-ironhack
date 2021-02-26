import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="/images/ironhack-logo.svg"
              alt=""
              class="d-inline-block align-top mt-4"
            />
          </a>

          <button
            id="navMenu"
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <section id="initial" className=" container-fluid  bg-dark ">
        <div className=" card bg-dark text-white text-start pt-5">
          <h1 className=" mb-0"> Say hello to</h1>
          <h1 className=" mb-3"> ReactJs</h1>

          <h3 className=" mb-0 fw-light">You will learn how to use</h3>
          <h3 className=" mb-0 fw-light">the most popular frontend library</h3>
          <h3 className=" mb-5 fw-light">and become a super Ninja developer</h3>
          <button
            type="button"
            className="btn btn-light d-grid  fw-bold col-2 mb-5"
          >
            Awesome!
          </button>
        </div>
      </section>

      <section className="container-fluid  mt-5 ">
        <div class="card-group grid gap-5 ">
          <div class="card border-light">
            <img src="/images/icon1.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Declarative</h5>
              <p class="card-text">
                React makes it painless to create interactive Uls.{" "}
              </p>
            </div>
          </div>

          <div class="card  border-light">
            <img src="/images/icon2.png" class="card-img-top " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Components</h5>
              <p class="card-text">
                Build encapsulated components that manage their state.
              </p>
            </div>
          </div>

          <div class="card  border-light">
            <img src="/images/icon3.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Single-Way</h5>
              <p class="card-text">
                A set of immutable values are passed to the component's.
              </p>
            </div>
          </div>
          <div class="card  border-light">
            <img src="/images/icon4.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">JSX</h5>
              <p class="card-text">
                Statically-typed, designed to run in modern browsers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
