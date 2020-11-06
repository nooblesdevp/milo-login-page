import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import Select from "react-select";
import { useEffect, useState } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";

function App() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [locale, setLocale] = useState("en");
  const [messages, setMessage] = useState();

  useEffect(() => {
    lang(locale, "").then((messages) => {
      setMessage(messages);
    });
  }, []);

  if (!messages) return null;

  return (
    <IntlProvider>
      <div className="App">
        <img
          className="login__imgBg"
          src="https://taskdev.mile.app/d09f7f2de7d88fb5f1575273b8a26426.png"
          alt=""
        />
        <Container className="m4 login__container">
          <div className="left">
            <div className="left__content">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
              <h1>mile</h1>
              <h3>
                The most robust Field Service Management solution, built to
                scale for enterprise
              </h3>
              <button>request demo</button>
            </div>
          </div>
          <div className="right">
            <img
              src="https://taskdev.mile.app/69ece7b1819e760b63623e810922b59e.png"
              alt=""
            />
            <p className="slogan">
              Your one stop platform to manage all of your field service
              management
            </p>
            <input
              type="text"
              name=""
              placeholder="Enter your organization's name"
              id=""
            />
            <button>Login</button>
            <p className="login__contactInfo">
              Not registered yet? <span>Contact us </span> for more info
            </p>
          </div>
        </Container>
      </div>
    </IntlProvider>
  );
}

export default App;
