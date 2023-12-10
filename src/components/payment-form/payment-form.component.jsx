import { useState } from 'react';
import { useStripe, useElements, PaymentElement, CardElement } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';

import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import { FormContainer, PaymentFormContainer } from './payment-form.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';


const PaymentForm = () => {
    

    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler =  async (e) => {
        e.preventDefault();

        if(!stripe || !elements){
            return
        }
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type':  'application/json'
            },
            body: JSON.stringify({amount: 10000})

        }).then(res => res.json());
    };

    return(
        <div>   
            <PaymentFormContainer>
                <FormContainer>
                    <h2>
                       Hazte miembro 
                    </h2>
                    <div>
                      <CardElement />  
                    </div>
                    

                    <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>
                            Suscríbate
                    </Button>
                </FormContainer>
            </PaymentFormContainer>
            
        </div>
    )
}

export default PaymentForm;