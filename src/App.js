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
              <div className="error">
                {formik.errors.representante}
                <button type="button" onClick={() => showAlert(formik.errors.representante)}>Mostrar Error</button>
              </div>
            ) : null}
          </div>
          {/* CURP */}
          <div className="field">
            <label htmlFor="curp">CURP:</label>
            <input
              type="text"
              id="curp"
              name="curp"
              {...formik.getFieldProps('curp')}
            />
            {formik.touched.curp && formik.errors.curp ? (
              <div className="error">
                {formik.errors.curp}
              </div>
            ) : null}
          </div>
          {/* Nombre, Paterno, Materno */}
          <div className="name-container">
            <div className="name-field">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                {...formik.getFieldProps('nombre')}
              />
              {formik.touched.nombre && formik.errors.nombre ? (
                <div className="error">
                  {formik.errors.nombre}
                  <button type="button" onClick={() => showAlert(formik.errors.nombre)}>Mostrar Error</button>
                </div>
              ) : null}
            </div>
            <div className="name-field">
              <label htmlFor="paterno">Paterno:</label>
              <input
                type="text"
                id="paterno"
                name="paterno"
                {...formik.getFieldProps('paterno')}
              />
              {formik.touched.paterno && formik.errors.paterno ? (
                <div className="error">
                  {formik.errors.paterno}
                  <button type="button" onClick={() => showAlert(formik.errors.paterno)}>Mostrar Error</button>
                </div>
              ) : null}
            </div>
            <div className="name-field">
              <label htmlFor="materno">Materno:</label>
              <input
                type="text"
                id="materno"
                name="materno"
                {...formik.getFieldProps('materno')}
              />
              {formik.touched.materno && formik.errors.materno ? (
                <div className="error">
                  {formik.errors.materno}
                  <button type="button" onClick={() => showAlert(formik.errors.materno)}>Mostrar Error</button>
                </div>
              ) : null}
            </div>
          </div>
          {/* Teléfono, Celular, Correo */}
          <div className="contact-container">
            <div className="contact-field">
              <label htmlFor="telefono">Teléfono:</label>
              <input
                type="text"
                id="telefono"
                name="telefono"
                {...formik.getFieldProps('telefono')}
              />
              {formik.touched.telefono && formik.errors.telefono ? (
                <div className="error">
                  {formik.errors.telefono}
                  <button type="button" onClick={() => showAlert(formik.errors.telefono)}>Mostrar Error</button>
                </div>
              ) : null}
            </div>
            <div className="contact-field">
              <label htmlFor="celular">Celular:</label>
              <input
                type="text"
                id="celular"
                name="celular"
                {...formik.getFieldProps('celular')}
              />
              {formik.touched.celular && formik.errors.celular ? (
                <div className="error">
                  {formik.errors.celular}
                  <button type="button" onClick={() => showAlert(formik.errors.celular)}>Mostrar Error</button>
                </div>
              ) : null}
            </div>
            <div className="contact-field">
              <label htmlFor="correo">Correo:</label>
              <input
                type="email"
                id="correo"
                name="correo"
                {...formik.getFieldProps('correo')}
              />
              {formik.touched.correo && formik.errors.correo ? (
                <div className="error">
                  {formik.errors.correo}
                  <button type="button" onClick={() => showAlert(formik.errors.correo)}>Mostrar Error</button>
                </div>
              ) : null}
            </div>
          </div>
          {/* Nivel */}
          <div className="field">
            <label htmlFor="nivel">¿Nivel al que desea ingresar o que ya cursa el alumno?</label>
            <select
              id="nivel"
              name="nivel"
              {...formik.getFieldProps('nivel')}
            >
              <option value="0">Elige un nivel educativo</option>
              <option value="1">Primaria</option>
              <option value="2">Secundaria</option>
              <option value="3">Preparatoria</option>
              <option value="4">Universidad</option>
            </select>
            {formik.touched.nivel && formik.errors.nivel ? (
              <div className="error">
                {formik.errors.nivel}
                <button type="button" onClick={() => showAlert(formik.errors.nivel)}>Mostrar Error</button>
              </div>
            ) : null}
          </div>
          {/* Municipio */}
          <div className="field">
            <label htmlFor="municipio">Municipio donde desea que estudie el alumno:</label>
            <select
              id="municipio"
              name="municipio"
              {...formik.getFieldProps('municipio')}
            >
              <option value="0">Elige un municipio</option>
              <option value="1">Saltillo</option>
              <option value="2">Arteaga</option>
              <option value="3">Torreón</option>
              <option value="4">Monclova</option>
            </select>
            {formik.touched.municipio && formik.errors.municipio ? (
              <div className="error">
                {formik.errors.municipio}
                <button type="button" onClick={() => showAlert(formik.errors.municipio)}>Mostrar Error</button>
              </div>
            ) : null}
          </div>
          {/* Asunto */}
          <div className="field">
            <label htmlFor="asunto">Seleccione el asunto que va a tratar:</label>
            <select
              id="asunto"
              name="asunto"
              {...formik.getFieldProps('asunto')}
            >
              <option value="0">Elige un asunto</option>
              <option value="1">Consulta</option>
              <option value="2">Queja</option>
              <option value="3">Sugerencia</option>
              <option value="4">Otro</option>
            </select>
            {formik.touched.asunto && formik.errors.asunto ? (
              <div className="error">
                {formik.errors.asunto}
                <button type="button" onClick={() => showAlert(formik.errors.asunto)}>Mostrar Error</button>
              </div>
            ) : null}
          </div>

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
