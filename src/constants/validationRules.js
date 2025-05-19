import { VALIDATION_MESSAGES } from './validationMessages';

export const validationRules = {
  length: (password) => ({
    isValid: password.length >= 8,
    message: VALIDATION_MESSAGES.length.success,
    errorMessage: VALIDATION_MESSAGES.length.error
  }),
  
  hasUpperCase: (password) => ({
    isValid: /[A-Z]/.test(password),
    message: VALIDATION_MESSAGES.hasUpperCase.success,
    errorMessage: VALIDATION_MESSAGES.hasUpperCase.error
  }),
  
  hasLowerCase: (password) => ({
    isValid: /[a-z]/.test(password),
    message: VALIDATION_MESSAGES.hasLowerCase.success,
    errorMessage: VALIDATION_MESSAGES.hasLowerCase.error
  }),
  
  hasNumber: (password) => ({
    isValid: /[0-9]/.test(password),
    message: VALIDATION_MESSAGES.hasNumber.success,
    errorMessage: VALIDATION_MESSAGES.hasNumber.error
  }),
  
  hasSpecialChar: (password) => ({
    isValid: /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password),
    message: VALIDATION_MESSAGES.hasSpecialChar.success,
    errorMessage: VALIDATION_MESSAGES.hasSpecialChar.error
  })
};
