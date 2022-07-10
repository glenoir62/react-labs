import React from "react";
import ReactDom from "react-dom";
import { Formik } from "formik";
import './App.css';

class App extends React.Component {
  submit = values => {
    console.log(values);
  };

  render() {
    return (
        <div
            className="container-fluid p-5 bg-light
      d-flex flex-column justify-content-center align-items-center"
        >
          <Formik
              onSubmit={this.submit}
              initialValues={{ name: "", age: "", email: "", password: "" }}
          >
            {({
                values,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting
              }) => (
                <form
                    onSubmit={handleSubmit}
                    className="bg-white border p-5 d-flex flex-column"
                >
                  <div className="form-group">
                    <label>Nom</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />
                  </div>
                  <div className="form-group">
                    <label>Age</label>
                    <input
                        type="text"
                        name="age"
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.age}
                    />
                  </div>
                  <div className="form-group">
                    <label>Adresse email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                  </div>
                  <div className="form-group">
                    <label>Mot de passe</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                  </div>
                  <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isSubmitting}
                  >
                    Envoyer
                  </button>
                </form>
            )}
          </Formik>
        </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));

export default App;

