
import { Field, Formik, Form, ErrorMessage  } from "formik";
import React from "react";
import { Button, Container } from "react-bootstrap";
import './Newsletter.scss'
import * as Yup from 'yup'
import { postData } from "../../services/HTTPWraper";

interface FormValues {
    name: string;
    email: string;
}

const schema = Yup.object({
    name: Yup.string().required('No olvides ingresar tu nombre'),
    email: Yup.string().email('El email debe ser valido').required('No olvides ingresar tu correo')
})

const NewsLetter = (): JSX.Element => {

    const initialValues: FormValues = {
        name: "",
        email: "",
    }

    const sendData = (data: any) => {
        postData(data)
          .then((response: any) => {
            if (response.status === 200) {
                setTimeout(() => {
                    alert("Gracias por suscribirte 👍");
                }, 500)
            }
          })
          .catch((e: Error) => {
            console.log('*** ERROR ***')
            console.log(e);
          });
    }

    const onSubmit = (values: FormValues) => {
        sendData(values)
        
    }

  return (
    <>
      <Container fluid className="text-center style-container">
        <span className="title-newsletter"><strong>¡Únete a nuestras novedades y promociones!</strong></span>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={schema}>
            <Form className="style-form">
                <Field name="name" type="text" placeholder="Ingresa tu nombre" className="field-nl"/>
                <Field name="email" type="text" placeholder="Ingresa tu email" className="field-nl"/>
                <Button type="submit" variant="dark">Suscribirme</Button>
                <br />
                <ErrorMessage
                    name="name"
                    component="span"
                    className="form__error"
                />
                <ErrorMessage
                    name="email"
                    component="span"
                    className="form__error"
                />
                
            </Form>
        </Formik>
      </Container>
    </>
  );
}

export default NewsLetter;