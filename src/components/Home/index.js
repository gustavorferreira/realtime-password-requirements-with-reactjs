import { useState, useRef } from "react";
import '../../styles/global.css';

const isNumberRegx = /\d/;
const letterUpperRegx = /[A-Z]/;
const specialCharacterRegx = /[ !¹²³£¢¬ª~´°@#$%^&*()_+¨§º·`\-[\]/={};':"\\|,.<>?]/;

export function Home() {
    const [password, setPassword] = useState("");
    const numeric = useRef(null);
    const capsLock = useRef(null);
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

        if (letterUpperRegx.test(password)) {
            capsLock.current.style.textDecoration = "line-through";
            capsLock.current.style.color = "chartreuse"
        } else {
            capsLock.current.style.textDecoration = "";
            capsLock.current.style.color = ""
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

        if (isNumberRegx.test(password) && letterUpperRegx.test(password) && specialCharacterRegx.test(password) && password.length >= 8) {
            input.current.style.border = "1px solid chartreuse"
        } else {
            input.current.style.border = ""
        }
    }

    return(
        <div className='wrapper'>
            <div>
                <p ref={numeric}>Número</p>
                <p ref={capsLock}>Letra maiúscula</p>
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