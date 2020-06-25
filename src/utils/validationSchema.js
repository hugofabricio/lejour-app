import { isValidCPF, isValidPhone } from '@brazilian-utils/brazilian-utils'
import * as yup from 'yup'

export const defaultStepOneValues = {
  engaged_name_1: '',
  engaged_rg_1: '',
  engaged_cpf_1: '',
  engaged_nationality_1: '',
  engaged_occupation_1: '',
  engaged_email_1: '',
  engaged_phone_1: '',
  engaged_address_1: '',
  engaged_address_number_1: '',
  engaged_postalcode_1: '',
  engaged_state_1: '',
  engaged_city_1: '',
  engaged_neighborhood_1: '',
}

export const stepOneValidationSchema = yup.object().shape({
  engaged_name_1: yup.string().required('Campo obrigatório'),
  // engaged_rg_1: yup.string().required('Campo obrigatório'),
  engaged_cpf_1: yup
    .string()
    .required('Campo obrigatório')
    .test('is-valid-cpf', 'CPF inválido', (value) => isValidCPF(value)),
  // engaged_nationality_1: yup.string().required('Campo obrigatório'),
  // engaged_occupation_1: yup.string().required('Campo obrigatório'),
  engaged_email_1: yup
    .string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),
  engaged_phone_1: yup
    .string()
    .required('Campo obrigatório')
    .test('is-valid-phone', 'Telefone inválido', (value) =>
      isValidPhone(value)
    ),
  // engaged_address_1: yup.string().required('Campo obrigatório'),
  // engaged_address_number_1: yup.string().required('Campo obrigatório'),
  // engaged_postalcode_1: yup.string().required('Campo obrigatório'),
  // engaged_state_1: yup.string().required('Campo obrigatório'),
  // engaged_city_1: yup.string().required('Campo obrigatório'),
  // engaged_neighborhood_1: yup.string().required('Campo obrigatório'),

  // engaged_name_2: yup.string().required('Campo obrigatório'),
  // engaged_rg_2: yup.string().required('Campo obrigatório'),
  // engaged_cpf_2: yup
  //   .string()
  //   .required('Campo obrigatório')
  //   .test('is-valid-cpf', 'CPF inválido', (value) => isValidCPF(value)),
  // engaged_nationality_2: yup.string().required('Campo obrigatório'),
  // engaged_occupation_2: yup.string().required('Campo obrigatório'),
  // engaged_email_2: yup
  //   .string()
  //   .email('E-mail inválido')
  //   .required('Campo obrigatório'),
  // engaged_phone_2: yup
  //   .string()
  //   .required('Campo obrigatório')
  //   .test('is-valid-phone', 'Telefone inválido', (value) =>
  //     isValidPhone(value)
  //   ),
  // engaged_address_2: yup.string().required('Campo obrigatório'),
  // engaged_address_number_2: yup.string().required('Campo obrigatório'),
  // engaged_postalcode_2: yup.string().required('Campo obrigatório'),
  // engaged_state_2: yup.string().required('Campo obrigatório'),
  // engaged_city_2: yup.string().required('Campo obrigatório'),
  // engaged_neighborhood_2: yup.string().required('Campo obrigatório'),
})

export const stepTwoValidationSchema = yup.object().shape({
  engaged_dad_name_1: yup.string().required('Campo obrigatório'),
})

export const stepThreeValidationSchema = yup.object().shape({
  engaged_1_witness_name_1: yup.string().required('Campo obrigatório'),
})

export const stepFourValidationSchema = yup.object().shape({
  engaged_2_witness_name_1: yup.string().required('Campo obrigatório'),
})

export const stepFiveValidationSchema = yup.object().shape({})
