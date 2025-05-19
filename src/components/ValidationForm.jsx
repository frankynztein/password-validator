import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { PasswordInput } from './PasswordInput';
import { ValidationResult } from './ValidationResult';

export const ValidationForm = ({ 
  passwordState, 
  onPasswordChange, 
  onSubmit, 
  isValid 
}) => (
  <Card>
    <CardHeader>
      <CardTitle>Validador de contraseña</CardTitle>
    </CardHeader>
    <CardContent>
      <form onSubmit={onSubmit} className="space-y-4">
        <PasswordInput 
          value={passwordState.value}
          onChange={onPasswordChange}
        />
        <ValidationResult 
          results={passwordState.validationResults}
          isValid={isValid}
          aria-live="polite"
          aria-atomic="true"
        />
      </form>
    </CardContent>
  </Card>
);