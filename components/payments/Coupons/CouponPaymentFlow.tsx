import React, { FC, useReducer } from 'react';

import { PageLoader } from '~/components/common';
import PaymentForm, {
  BankTransactionForm,
  CouponAccountForm,
  CouponCheckPaymentForm,
} from '~/components/payments';
import { checkCouponAccount, requestCoupon3DTransaction } from '~/api/payments/coupons';

import { CouponAccount } from '~/types/Models';
import { CouponPaymentRequest } from '~/types/Requests';
import { MaxilanaTransaction } from '~/types/Responses';

type Status = 'idle' | 'check_payment' | 'confirm_payment' | 'submit_payment';

type Payment = {
  concept: string;
  amount: number;
};

type Transaction = {
  payment: CouponPaymentRequest;
  transaction: MaxilanaTransaction;
};

type State = {
  status: Status;
  account: CouponAccount | null;
  paymentRequest: Payment | null;
  transactionRequest: Transaction | null;
};

const PAYMENT_CONCEPT = 'ABONO A LÍNEA DE CRÉDITO DIST.';

const initialState: State = {
  status: 'idle',
  account: null,
  paymentRequest: null,
  transactionRequest: null,
};

const reducer = (state: State, action: any): State => {
  const { type, payload } = action;

  switch (type) {
    case 'CHECK_PAYMENT':
      return {
        ...state,
        status: 'check_payment',
        account: payload.account,
      };
    case 'CONFIRM_PAYMENT':
      return {
        ...state,
        status: 'confirm_payment',
        paymentRequest: payload.paymentRequest,
      };
    case 'SUBMIT_PAYMENT':
      return {
        ...state,
        status: 'submit_payment',
        transactionRequest: payload.transactionRequest,
      };
    default:
      return initialState;
  }
};

const CouponPaymentFlow: FC = () => {
  const [state, dispatch] = useReducer<typeof reducer>(reducer, initialState);

  const handleSignAccount = async (data: any) => {
    const account = await checkCouponAccount(data);
    dispatch({ type: 'CHECK_PAYMENT', payload: { account } });
  };

  const handleCheckPayment = async (data: any) => {
    const { paymentAmount } = data;
    const paymentRequest = {
      amount: paymentAmount,
      concept: `${PAYMENT_CONCEPT} #${state.account?.partnerNumber}`,
    };

    dispatch({ type: 'CONFIRM_PAYMENT', payload: { paymentRequest } });
  };

  const handleSubmitPayment = async (data: any) => {
    const paymentRequest: CouponPaymentRequest = {
      ...data,
      cdistribuidora: state.account?.partnerNumber,
    };

    const maxilanaTransaction = await requestCoupon3DTransaction(paymentRequest);

    const transactionRequest = {
      payment: paymentRequest,
      transaction: maxilanaTransaction,
    };

    dispatch({
      type: 'SUBMIT_PAYMENT',
      payload: {
        transactionRequest,
      },
    });
  };

  return (
    <div>
      {state.status === 'idle' && <CouponAccountForm onSubmit={handleSignAccount} />}
      {state.status === 'check_payment' && state.account !== null && (
        <CouponCheckPaymentForm account={state.account} onSubmit={handleCheckPayment} />
      )}
      {state.status === 'confirm_payment' && state.paymentRequest && (
        <PaymentForm
          title="Maxilana Vales"
          data={state.paymentRequest}
          description="Paga directamente a tu distribuidora"
          onSubmit={handleSubmitPayment}
        />
      )}
      {state.status === 'submit_payment' && state.transactionRequest && (
        <PageLoader text="En un momento serás redirigido a la pasarela de pagos...">
          {state.transactionRequest !== null && (
            <BankTransactionForm
              {...state.transactionRequest}
              forwardPath={`${window.location.origin}/pagos/respuesta?type=coupons`}
            />
          )}
        </PageLoader>
      )}
    </div>
  );
};

export default CouponPaymentFlow;
