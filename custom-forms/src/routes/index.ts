import DynamicFormPage from "../pages/DynamicForm";
import FormkBasicPage from "../pages/FormikBasic";
import ForkimRegiterPage from "../pages/FormikRegister";
import RegiterPage from "../pages/Register";

export const routes = [
  {path: '/', component: RegiterPage, name: 'Without Formik', description: 'Creating our own hook'},
  {path: '/formik-basic', component: FormkBasicPage, name: 'Basic Formik', description: 'Starting with formik'},
  {path: '/register-formik', component: ForkimRegiterPage, name: 'Register with Formik', description: 'Register Form'},
  {path: '/dynamic-form', component: DynamicFormPage, name: 'Dynamic Form', description: 'Create forms from a json'}
]
