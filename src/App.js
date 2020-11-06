import "./App.css";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="App">
      <div class="alert alert-dark login__cs" role="alert">
        <div>
          <span>Call Us Now: +62 812-1133-5608</span>
          <button onClick={() => changeLanguage("en")}>en</button>
          <button onClick={() => changeLanguage("id")}> id</button>
        </div>
      </div>
      <img
        className="login__imgBg"
        src="https://taskdev.mile.app/d09f7f2de7d88fb5f1575273b8a26426.png"
        alt=""
      />
      <Container className="m4 login__container">
        <div className="left">
          <div className="left__content">
            <h1>mile</h1>
            <h3>
              <Trans i18nKey="description.part1">
                The most robust Field Service Management solution, built to
                scale for enterprise
              </Trans>
            </h3>
            <button>
              <Trans i18nKey="description.part2">request demo </Trans>{" "}
            </button>
          </div>
        </div>
        <div className="right">
          <img
            src="https://taskdev.mile.app/69ece7b1819e760b63623e810922b59e.png"
            alt=""
          />
          <p className="slogan">
            <Trans i18nKey="description.part3">
              Your one stop platform to manage all of your field service
              management
            </Trans>
          </p>
          <input
            type="text"
            name=""
            placeholder="Enter your organization's name"
            id=""
          />
          <button>Login</button>
          <p className="login__contactInfo">
            <Trans i18nKey="description.part4">
              Not registered yet? <span>Contact us </span> for more info
            </Trans>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default App;
