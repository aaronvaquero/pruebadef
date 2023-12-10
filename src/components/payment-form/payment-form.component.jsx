import { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';

import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import { FormContainer, PaymentFormContainer } from './payment-form.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';


const PaymentForm = () => {
    

    return(
        <div>
            <PaymentFormContainer>
                <FormContainer>
                    <h2>
                       Hazte miembro 
                    </h2>
                    <PaymentElement />
                    <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>
                            Suscríbete
                    </Button>
                </FormContainer>
            </PaymentFormContainer>
            
        </div>
    )
}

export default PaymentForm;