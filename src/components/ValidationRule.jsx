import { CheckCircle2, XCircle } from "lucide-react";

const ValidationRule = ({ rule, result }) => (
  <li className={`flex items-center gap-2 p-2 rounded ${
    result.isValid 
      ? 'text-green-600 bg-green-50' 
      : 'text-red-600 bg-red-50'
  }`}>
    {result.isValid ? (
      <CheckCircle2 className="w-5 h-5" />
    ) : (
      <XCircle className="w-5 h-5" />
    )}
    <span>{result.isValid ? result.message : result.errorMessage}</span>
  </li>
);

export { ValidationRule };