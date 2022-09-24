import * as yup from 'yup'
// const SUPPORTED_FORMATS = ['image/jpeg', 'image/jpg', 'image/png']
const PasswordRegEx =
  /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
const mobileRegEx = /(\+088)?-?01[0-9]\d{8}/g
// const onlyDigit = /^[0-9]+$/
const onlyChar = /^[A-Z a-z]+$/

export const RegistrationSchema = yup.object().shape({
  name: yup.string().max(30, 'Too Long!').required('Name is Required!'),
  email: yup.string().email('Invalid Email'),
  password: yup
    .string()
    .required('Password is Required!')
    // .matches(PasswordRegEx, 'Uppercase Lowercase Special char Required')
    // .min(8, 'Password Should be minimum 8 character')
    .max(50, 'Too long'),
  confirmPassword: yup
    .string()
    .required('Confirm Password is Required!')
    .when('password', (password, field) =>
      password ? field.required() : field
    )
    .oneOf([yup.ref('password')], 'Password does not matched'),
  acceptTerms: yup.bool().oneOf([true], 'Agree with terms and conditons'),
})

export const LoginSchema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('required!'),
  password: yup
    .string()
    .required('Required!')
    .matches(PasswordRegEx, 'Invalid Password'),
})

//Unused

export const ChangePasswordSchema = yup.object().shape({
  oldPassword: yup
    .string()
    .required('Old Password is Required!')
    .matches(PasswordRegEx, 'Invalid Password!')
    .min(8, 'Invalid Password!')
    .max(50, 'Invalid Password!'),
  password: yup
    .string()
    .required('New Password is Required!')
    .matches(PasswordRegEx, 'Uppercase Lowercase Special char Required')
    .min(8, 'Password Should be minimum 8 character')
    .max(50, 'Too long'),
  confirmPassword: yup
    .string()
    .required('Confirm Password is Required!')
    .when('password', (password, field) =>
      password ? field.required() : field
    )
    .oneOf([yup.ref('password')], 'Password does not matched'),
})

export const personalInfoSchema = yup.object().shape({
  fullName: yup
    .string()
    .matches(onlyChar, 'Character Only')
    .min(4, 'Too Short !')
    .required('Should Not Be Empty')
    .max(30, 'Too Long !'),
  mobile: yup.string().matches(mobileRegEx, 'Invalid Mobile Number'),
  gender: yup.string(),
  dateOfBirth: yup.string(),
  occupation: yup.string().matches(onlyChar, 'Character Only'),
  organization: yup.string().matches(onlyChar, 'Character Only'),
})

export const parentsInfoSchema = yup.object().shape({
  fatherName: yup
    .string()
    .matches(onlyChar, 'Character Only')
    .max(30, 'Too Long !'),
  fatherMobile: yup.string().matches(mobileRegEx, 'Invalid Mobile Number'),
  motherName: yup
    .string()
    .matches(onlyChar, 'Character Only')
    .max(30, 'Too Long !'),
  motherMobile: yup.string().matches(mobileRegEx, 'Invalid Mobile Number'),
})

export const emailSchema = yup.object().shape({
  primaryEmail: yup.string().email('Invalid Email'),
  backupEmail: yup.string().email('Invalid Email'),
})

export const checkoutSchema = yup.object().shape({
  fullName: yup
    .string()
    .matches(onlyChar, 'Character Only')
    .min(4, 'Too Short !')
    .required('Should Not Be Empty')
    .max(30, 'Too Long !'),
  companyName: yup.string().max(50, 'Too Long !'),
  address: yup.string().min(5, 'Too Short!').required('Address is Required!'),
  country: yup
    .string()
    .min(4, 'Too Short!')
    .matches(onlyChar, 'Character Only')
    .required('Country is Required'),
  postalCode: yup
    .string()
    .required('Postal Code is Required!')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(4, 'Must be exactly 4 digits')
    .max(4, 'Must be exactly 4 digits'),
  mobile: yup
    .string()
    .required('Should Not Be Empty')
    .matches(mobileRegEx, 'Invalid Mobile Number'),
  email: yup
    .string()
    .required('Email is Required!')
    .email('Enter a valid email!')
    .required('Email is required!'),
  acceptTerms: yup.bool().oneOf([true], 'Agree with terms and conditons'),
})
