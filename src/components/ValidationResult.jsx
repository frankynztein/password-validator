import { ValidationRule } from './ValidationRule';

const ValidationResult = ({ results }) => (
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
);

export { ValidationResult };