import { useState } from 'react';

const PassValidator = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState([]);

  const validatePassword = (e) => {
    e.preventDefault();

    const passLength = password.length;
    const passCapitalLetter = password.match(/[A-Z]/);
    const passLowercaseLetter = password.match(/[a-z]/);
    const passNumber = password.match(/[0-9]/);
    const passSpecialCharacter = password.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/);

    const infoMessages = [];

    if (passLength >= 8) {
      infoMessages.push('La contraseña tiene 8 caracteres');
    } else {
      infoMessages.push('La contraseña debe tener al menos 8 caracteres');
    }

    if (passCapitalLetter) {
      infoMessages.push('La contraseña tiene al menos una letra mayúscula');
    } else {
      infoMessages.push('La contraseña debe tener al menos una letra mayúscula');
    }

    if (passLowercaseLetter) {
      infoMessages.push('La contraseña tiene al menos una letra minúscula');
    } else {
      infoMessages.push('La contraseña debe tener al menos una letra minúscula');
    }

    if (passNumber) {
      infoMessages.push('La contraseña tiene al menos un número');
    } else {
      infoMessages.push('La contraseña debe tener al menos un número');
    }

    if (passSpecialCharacter) {
      infoMessages.push('La contraseña tiene al menos un caracter especial');
    } else {
      infoMessages.push('La contraseña debe tener al menos un caracter especial');
    }

    setMessage(infoMessages);
  }

  return (
    <>
      <h1>Validador de contraseña</h1>
      <form action="" onSubmit={validatePassword}>
        <label htmlFor="password">Ingrese su contraseña</label>
        <input type="text" id="password" name="password" placeholder="Ingrese su contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Validar</button>
        <ul>
          {message.map((messageText, index) => (
            <li key={index}>{messageText}</li>
          ))}
        </ul>
      </form>
    </>
  )
}

export { PassValidator };