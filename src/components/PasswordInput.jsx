import { Input } from './ui/input';
import { Label } from './ui/label';

export const PasswordInput = ({ value, onChange }) => (
  <div className="space-y-2">
    <Label htmlFor="password">
      Ingrese su contraseña
    </Label>
    <Input
      type="text"
      id="password"
      value={value}
      onChange={onChange}
      placeholder="Ingrese su contraseña"
      aria-label="Campo de contraseña"
      aria-required="true"
    />
  </div>
);