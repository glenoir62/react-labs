import React from 'react';
import ReactDom from 'react-dom';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ComposantErreur = (props) => (
    <div className="text-danger">{props.children}</div>
);

const ComposantInput = ({ field, form: { touched, errors }, ...props }) => (
    <div className="form-group">
        <label> {props.label} </label>
        <input type="text" {...props} className="form-control" {...field} />
    </div>
);

class App extends React.Component {
    submit = (values, actions) => {
        console.log(values);
        setTimeout(() => {
            actions.isSubmitting = false;
            actions.resetForm();
        }, 1000);
    };

    userSchema = Yup.object().shape({
        name: Yup.string('String')
            .min(3, 'Trop court')
            .max(20, 'Trop long')
            .required('Requis'),
        email: Yup.string().email("L'email doit être valide"),
        password: Yup.string().min(5, 'Trop court'),
    });

    render() {
        return (
            <div
                className="container-fluid p-5 bg-light
      d-flex flex-column justify-content-center align-items-center"
            >
                <Formik
                    onSubmit={this.submit}
                    initialValues={{ name: '', email: '', password: '' }}
                    validationSchema={this.userSchema}
                >
                    {({
                          values,
                          handleBlur,
                          handleChange,
                          handleSubmit,
                          isSubmitting,
                          errors,
                          touched,
                      }) => (
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white border p-5 d-flex flex-column"
                        >
                            <Field name="name" label="Prénom" component={ComposantInput} />
                            <ErrorMessage name="name" component={ComposantErreur} />
                            <Field
                                name="email"
                                label="Email"
                                type="email"
                                component={ComposantInput}
                            />
                            <ErrorMessage name="email" component={ComposantErreur} />
                            <Field
                                type="password"
                                name="password"
                                label="Mot de passe"
                                component={ComposantInput}
                            />
                            <ErrorMessage name="password" component={ComposantErreur} />
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

ReactDom.render(<App />, document.getElementById('root'));
export default App;
