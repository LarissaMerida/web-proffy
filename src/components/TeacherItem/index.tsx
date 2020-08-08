import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/32376211?s=460&u=0e5b1cd8620f012c7ef4e6e60f9a3c528fea9748&v=4" alt="Larissa Merida" />
                <div>
                    <strong>Larissa Merida</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br/><br/>
                Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. 
            </p>

            <footer>
                <p>
                    Perço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>

    );
}

export default TeacherItem;