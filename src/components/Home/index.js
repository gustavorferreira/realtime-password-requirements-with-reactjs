import { useState, useRef } from "react";
import '../../styles/global.css';

const isNumberRegx = /\d/;
const upperCaseLetterRegx = /[A-Z]/;
const specialCharacterRegx = /[ !¹²³£¢¬ª~´°@#$%^&*()_+¨§º·`\-[\]/={};':"\\|,.<>?]/;

export function Home() {
    const [password, setPassword] = useState("");
    const numeric = useRef(null);
    const upperCaseLetter = useRef(null);
    const specialCharacter = useRef(null);
    const minimumCharacter = useRef(null);
    const input = useRef(null);

    const onChangePassword = password => {
        setPassword(password);

        if (isNumberRegx.test(password)) {
            numeric.current.style.textDecoration = "line-through";
            numeric.current.style.color = "chartreuse"
        } else {
            numeric.current.style.textDecoration = "";
            numeric.current.style.color = ""
        }

        if (upperCaseLetterRegx.test(password)) {
            upperCaseLetter.current.style.textDecoration = "line-through";
            upperCaseLetter.current.style.color = "chartreuse"
        } else {
            upperCaseLetter.current.style.textDecoration = "";
            upperCaseLetter.current.style.color = ""
        }

        if (specialCharacterRegx.test(password)) {
            specialCharacter.current.style.textDecoration = "line-through";
            specialCharacter.current.style.color = "chartreuse"
        } else {
            specialCharacter.current.style.textDecoration = "";
            specialCharacter.current.style.color = ""
        }

        if (password.length >= 8) {
            minimumCharacter.current.style.textDecoration = "line-through";
            minimumCharacter.current.style.color = "chartreuse"
        } else {
            minimumCharacter.current.style.textDecoration = "";
            minimumCharacter.current.style.color = ""
        }

        if (isNumberRegx.test(password) && upperCaseLetterRegx.test(password) && specialCharacterRegx.test(password) && password.length >= 8) {
            input.current.style.border = "1px solid chartreuse"
        } else {
            input.current.style.border = ""
        }
    }

    return(
        <div className='wrapper'>
            <div>
                <p ref={numeric}>Número</p>
                <p ref={upperCaseLetter}>Letra maiúscula</p>
                <p ref={specialCharacter}>Caractere especial</p>
                <p ref={minimumCharacter}>Mínimo de 8 caracteres</p>
            </div>
            <div className='password'>
                <input
                    type='text'
                    placeholder='Informe a sua senha'
                    ref={input}
                    value={password}
                    onChange={e => onChangePassword(e.target.value)}
                />
            </div>
        </div>
    );
}