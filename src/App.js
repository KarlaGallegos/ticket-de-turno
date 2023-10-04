import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './App.css';

function App() {
  const formik = useFormik({
    initialValues: {
      representante: '',
      curp: '',
      nombre: '',
      paterno: '',
      materno: '',
      telefono: '',
      celular: '',
      correo: '',
      nivel: '0',
      municipio: '0',
      asunto: '0',
    },
    validationSchema: Yup.object({
      representante: Yup.string().required('El nombre es requerido').min(10, 'El nombre debe tener al menos 10 caracteres'),
      curp: Yup.string().required('La CURP es requerida').matches(/^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[HM]{1}[A-Z]{2}[BCDFGHJKLMNPQRSTVWXYZ]{3}[0-9A-Z]{1}[0-9]{1}$/, 'Ingrese una CURP válida'),
      nombre: Yup.string().required('El nombre es requerido').min(3, 'El nombre debe tener al menos 3 caracteres'),
      paterno: Yup.string().required('El apellido paterno es requerido').min(4, 'El apellido paterno debe tener al menos 4 caracteres'),
      materno: Yup.string().required('El apellido materno es requerido').min(4, 'El apellido materno debe tener al menos 4 caracteres'),
      telefono: Yup.string().required('El teléfono es requerido').matches(/^\d{10}$/, 'Ingrese un número de teléfono válido'),
      celular: Yup.string().required('El celular es requerido').matches(/^\d{10}$/, 'Ingrese un número de celular válido'),
      correo: Yup.string().required('El correo es requerido').email('Ingrese un correo válido'),
      nivel: Yup.string().notOneOf(['0'], 'Seleccione un nivel educativo'),
      municipio: Yup.string().notOneOf(['0'], 'Seleccione un municipio'),
      asunto: Yup.string().notOneOf(['0'], 'Seleccione un asunto'),
    }),
    onSubmit: (values) => {
      // You can handle form submission here
      console.log(values);
    },
  });

  return (
    <div className="App">
      <header>
        <img src="https://educacion.seducoahuila.gob.mx/wp-content/uploads/2022/09/logo_sedu.png" alt="Logo Secretaría de Educación" />
      </header>
      <main>
        <h1>Ticket de Turno</h1>
        <form onSubmit={formik.handleSubmit}>
          {/* Representante */}
          <div className="field">
            <label htmlFor="representante">Nombre completo de quien realizará el trámite:</label>
            <input
              type="text"
              id="representante"
              name="representante"
              {...formik.getFieldProps('representante')}
            />
            {formik.touched.representante && formik.errors.representante ? (
              <div className="error">{formik.errors.representante}</div>
            ) : null}
          </div>
          {/* Other fields (similar to Representante) */}
          
          {/* Submit Button */}
          <div className="submit-button">
            <button type="submit">Generar Turno</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
