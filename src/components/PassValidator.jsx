import { useState } from 'react';
import { ValidationForm } from './ValidationForm';
import { validationRules } from '../constants/validationRules';

const PassValidator = () => {
  const [passwordState, setPasswordState] = useState({
    value: '',
    validationResults: {},
    isValid: false
  });

  const validatePassword = (e) => {
    e.preventDefault();
    
    const results = Object.entries(validationRules).reduce((acc, [key, rule]) => {
      const result = rule(passwordState.value);
      return {
        ...acc,
        [key]: result
      };
    }, {});
    
    const isValid = Object.values(results).every(result => result.isValid);
    
    setPasswordState({
      value: passwordState.value,
      validationResults: results,
      isValid
    });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <ValidationForm
        passwordState={passwordState}
        onPasswordChange={(e) => setPasswordState(prev => ({
          ...prev,
          value: e.target.value
        }))}
        onSubmit={validatePassword}
        isValid={passwordState.isValid}
      />
    </div>
  );
};

export { PassValidator };