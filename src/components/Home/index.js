import { useState } from "react";
import '../../styles/global.css';

const isNumberRegx = /\d/;
const letterUpperRegx = /[A-Z]/;
const specialCharacterRegx = /[ !¹²³£¢¬ª~´°@#$%^&*()_+¨§º·`\-[\]/={};':"\\|,.<>?]/;

export function Home() {
    const [password, setPassword] = useState("");

    const onChangePassword = password => {
        setPassword(password);

        var numeric = document.getElementById("numeric");
        var capsLock = document.getElementById("caps-lock");
        var specialCharacter = document.getElementById("special-character");
        var minimumCharacter = document.getElementById("minimum-character");
        var input = document.getElementById("password");

        if (isNumberRegx.test(password)) {
            numeric.style.textDecoration = "line-through";
            numeric.style.color = "chartreuse"
        } else {
            numeric.style.textDecoration = "";
            numeric.style.color = ""
        }

        if (letterUpperRegx.test(password)) {
            capsLock.style.textDecoration = "line-through";
            capsLock.style.color = "chartreuse"
        } else {
            capsLock.style.textDecoration = "";
            capsLock.style.color = ""
        }

        if (specialCharacterRegx.test(password)) {
            specialCharacter.style.textDecoration = "line-through";
            specialCharacter.style.color = "chartreuse"
        } else {
            specialCharacter.style.textDecoration = "";
            specialCharacter.style.color = ""
        }

        if (password.length >= 8) {
            minimumCharacter.style.textDecoration = "line-through";
            minimumCharacter.style.color = "chartreuse"
        } else {
            minimumCharacter.style.textDecoration = "";
            minimumCharacter.style.color = ""
        }

        if (isNumberRegx.test(password) && letterUpperRegx.test(password) && specialCharacterRegx.test(password) && password.length >= 8) {
            input.style.border = "1px solid chartreuse"
        } else {
            input.style.border = ""
        }
    }

    return(
        <div className='wrapper'>
            <div>
                <p id='numeric'>Número</p>
                <p id='caps-lock'>Letra maiúscula</p>
                <p id='special-character'>Caractere especial</p>
                <p id='minimum-character'>Mínimo de 8 caracteres</p>
            </div>
            <div className='password'>
                <input
                    type='text'
                    placeholder='Informe a sua senha'
                    id='password'
                    value={password}
                    onChange={e => onChangePassword(e.target.value)}
                />
            </div>
        </div>
    );
}