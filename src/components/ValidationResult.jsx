import { ValidationRule } from './ValidationRule';

const ValidationResult = ({ results, isValid }) => (
  <div className="space-y-4">
    <ul 
      className="space-y-2"
      role="list"
      aria-label="Resultados de validación"
    >
      {Object.entries(results).map(([key, result]) => (
        <ValidationRule 
          key={key} 
          rule={key} 
          result={result}
          aria-live="polite"
        />
      ))}
    </ul>
    {isValid && (
      <div className="p-4 bg-green-50 text-green-700 rounded-md">
        ¡Tienes una muy buena contraseña!
      </div>
    )}
  </div>
);

export { ValidationResult };