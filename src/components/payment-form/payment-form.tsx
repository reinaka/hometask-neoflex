import Cards, { Focused } from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { useState } from 'react';
import { formatNumberInput, formatTextInput } from '../../services/creditCardFormatting';
import styles from './payment-form.module.css';

export const PaymentForm = () => {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '' as Focused,
    });

    // хэндлер для изменения данных в полях формы
    const handleInputChange = (evt : React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = evt.target;

        if (name === "expiry") {
                value = formatNumberInput(value, 4);
            } else if (name === "cvc") {
                value = formatNumberInput(value, 3);
            } else if (name === "number") {
                value = formatNumberInput(value, 16)
            } else if (name === "name") {
                value = formatTextInput(value);
            }

    setState((prev) => ({ ...prev, [name]: value }));
    }
    
    // хэндлер для изменения данных о фокусе на полях формы
    const handleInputFocus = (evt : 
        React.ChangeEvent<HTMLInputElement>) => {
        setState((prev) => ({ ...prev, focus: evt.target.name as Focused}));
    }
    
    return (
        <div>
            <Cards
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
            />
            <div>

            </div>
            <form className={styles.formWrapper}>
                <input
                    type="text"
                    name="number"
                    placeholder="Номер карты"
                    value={state.number}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    required
                    pattern="[\d| ]{16}"
                    className={styles.formInput}
                />

                <input
                    type="text"
                    name="name"
                    placeholder="Фамилия Имя"
                    value={state.name}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    required
                    className={styles.formInput}
                />

                <input
                    type="text"
                    name="expiry"
                    placeholder="Cрок действия"
                    value={state.expiry}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    required
                    pattern="\d\d/\d\d"
                    className={styles.formInput}
                />

                <input
                    type="text"
                    name="cvc"
                    placeholder="CVC"
                    value={state.cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    required
                    pattern="\d{3}"
                    maxLength={3}
                    className={styles.formInput}
                />
                
                <button className={styles.button} type="submit">Оплатить</button>
            </form>
        </div>
        );
}


