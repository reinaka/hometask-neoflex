import Cards, { Focused } from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { useState } from 'react';
import styles from './payment-form.module.css';
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { clearNumber, formatCreditCardNumber, formatCVC, formatExpirationDate} from './utils';
import { PaymentFormError } from './payment-form-error';

export const schemaPaymentForm = z.object({
    number: z.number().min(16).max(16),
    expiry: z.number().min(4).max(4),
    cvc: z.number().min(3).max(3),
    name: z.string().min(2),
});

export type PaymentFormT = z.infer<typeof schemaPaymentForm>;

export const PaymentForm = () => {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '' as Focused,
    });

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm({
            mode: "onSubmit",
        });
    // хэндлер для изменения данных в полях формы
    const handleInputChange = (evt : React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = evt.target;

        if (name === "number") {
            value = formatCreditCardNumber(value);
        } else if (name === "expiry") {
            value = formatExpirationDate(value);
        } else if (name === "cvc") {
            value = formatCVC(value);
        }

    setState((prev) => ({ ...prev, [name]: value }));
    }
    
    // хэндлер для изменения данных о фокусе на полях формы
    const handleInputFocus = (evt : 
        React.ChangeEvent<HTMLInputElement>) => {
        setState((prev) => ({ ...prev, focus: evt.target.name as Focused}));
    }

    // REMOVE ANY WHEN FINISH WITH ZOD
    const handleFormSubmit = (data : any) => {
        data.number = clearNumber(data.number);
        data.expiry = clearNumber(data.expiry);
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
            <form className={styles.formWrapper} onSubmit={handleSubmit(handleFormSubmit)}>
                <input
                    {...register("number", {
                        required: "Поле обязательно к заполнению",
                        minLength: {
                            value: 19,
                            message: "Вы ввели недостаточно символов",
                        },
                    })}
                    type="text"
                    name="number"
                    placeholder="Номер карты"
                    value={state.number}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    className={styles.formInput}
                />
                <PaymentFormError>{errors?.number && <p>{`${errors?.number?.message}` || "Номер карты введен неверно"}</p>}</PaymentFormError>

                <input
                    {...register("name", {
                        required: "Поле обязательно к заполнению",
                    })}
                    type="text"
                    name="name"
                    placeholder="Фамилия Имя"
                    value={state.name}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    className={styles.formInput}
                />
                <PaymentFormError>{errors?.name && <p>{`${errors?.name?.message}` || "Имя введено неверно"}</p>}</PaymentFormError>

                <input
                    {...register("expiry", {
                        required: "Поле обязательно к заполнению",
                        minLength: {
                            value: 5,
                            message: "Вы ввели недостаточно символов",
                        },
                    })}
                    type="text"
                    name="expiry"
                    placeholder="Cрок действия"
                    value={state.expiry}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    className={styles.formInput}
                />
                <PaymentFormError>{errors?.expiry && <p>{`${errors?.expiry?.message}` || "Данные введены неверно"}</p>}</PaymentFormError>

                <input
                    {...register("cvc", {
                        required: "Поле обязательно к заполнению",
                        minLength: {
                            value: 3,
                            message: "Вы ввели недостаточно символов",
                        },
                    })}
                    type="text"
                    name="cvc"
                    placeholder="CVC"
                    value={state.cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    className={styles.formInput}
                />
                <PaymentFormError>{errors?.cvc && <p>{`${errors?.cvc?.message}` || "Данные введены неверно"}</p>}</PaymentFormError>
                
                <button className={styles.button} type="submit">Оплатить</button>
            </form>
        </div>
        );
}


