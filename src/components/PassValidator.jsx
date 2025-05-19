import { useState } from 'react';
import { ValidationForm } from './ValidationForm';
import { validationRules } from '../constants/validationRules';

const PassValidator = () => {
  const [passwordState, setPasswordState] = useState({
    value: '',
    validationResults: Object.entries(validationRules).reduce((acc, [key, rule]) => ({
      ...acc,
      [key]: {
        isValid: false,
        message: rule('').message,
        errorMessage: rule('').errorMessage
      }
    }), {}),
    isValid: false
  });

  const validatePassword = (password) => {
    const results = Object.entries(validationRules).reduce((acc, [key, rule]) => {
      const result = rule(password);
      return {
        ...acc,
        [key]: result
      };
    }, {});
    
    const isValid = Object.values(results).every(result => result.isValid);
    
    return { results, isValid };
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    const { results, isValid } = validatePassword(newPassword);
    
    setPasswordState({
      value: newPassword,
      validationResults: results,
      isValid
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar lógica adicional si necesitas hacer algo al enviar el formulario
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <ValidationForm
        passwordState={passwordState}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleSubmit}
        isValid={passwordState.isValid}
      />
    </div>
  );
};

export { PassValidator };