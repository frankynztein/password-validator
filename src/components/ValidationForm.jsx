import { Button } from './ui/button';
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
        <Button 
          type="submit"
          className={`w-full ${
            isValid 
              ? 'bg-green-500 hover:bg-green-600' 
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
          aria-label="Validar contraseña"
        >
          Validar
        </Button>
        <ValidationResult 
          results={passwordState.validationResults}
          aria-live="polite"
          aria-atomic="true"
        />
      </form>
    </CardContent>
  </Card>
);