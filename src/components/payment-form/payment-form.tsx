import Cards, { Focused } from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { useState } from 'react';
import styles from './payment-form.module.css';
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { clearNumber, formatCreditCardNumber, formatCVC, formatExpirationDate} from './utils';
import { PaymentFormError } from './payment-form-error';
import { useAppDispatch } from '../../services/hooks/reduxTypes';
import { removedAllItems } from '../../services/slices/cart-slice';

export const schemaPaymentForm = z.object({
    number: z.string().min(19, {message: "Минимум 16 символов"}).max(19, {message: "Максимум 16 символов"}),
    expiry: z.string().min(5, {message: "Минимум 4 символа"}).max(5, {message: "Максимум 4 символа"}),
    cvc: z.string().min(3, {message: "Минимум 3 символа"}).max(3, {message: "Максимум 3 символа"}),
    name: z.string().min(2, {message: "Минимум 2 символа"}),
});

export type PaymentFormT = z.infer<typeof schemaPaymentForm>;

export const PaymentForm = ({ setIsPayment } : { setIsPayment: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const dispatch = useAppDispatch();

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
    } = useForm<PaymentFormT>({
            resolver: zodResolver(schemaPaymentForm),
            mode: "onBlur",
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

    const handleFormSubmit = (data : PaymentFormT) => {
        data.number = clearNumber(data.number);
        data.expiry = clearNumber(data.expiry);
        setIsPayment(true);
        dispatch(removedAllItems());
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


