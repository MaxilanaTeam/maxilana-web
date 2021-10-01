import { FC } from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';
import { Form, Radio } from 'antd';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { Button } from '../ui';
import { InputField, InputMask } from '../common';
import styles from './FormContainer.module.css';
import defaultValidateMessages from 'config/validationMessages';
import {
  CouponPaymentRequest,
  LoanPaymentRequest,
  PawnPaymentRequest,
  CreditCard,
} from '~/types/Requests';

type PaymentRequest = Partial<CouponPaymentRequest | LoanPaymentRequest | PawnPaymentRequest>;

interface FormValues extends CreditCard {
  concepto: string;
  correoelectronico: string;
}

type Data = {
  importe: number;
  concepto: string;
  // VALES
  cdistribuidora?: string;
  // PRESTAMOS
  codigoprestamo?: string;
  // BOLETA
  sucursal?: string;
  boleta?: string;
  prestamo?: number;
  codigotipopago?: string; // '1' | '2' | '3';
  fechaconsulta?: string;
  diaspagados?: number;
};

interface Props {
  data: Data;
  title: string;
  description: string;
  formType: 'pawn' | 'loan' | 'coupon';
  onSubmit: (data: PaymentRequest) => Promise<void>;
}

dayjs.extend(customParseFormat);

const PaymentForm: FC<Props> = ({ data, title, description, onSubmit, formType }) => {
  const [form] = Form.useForm();

  const getDataFromType = () => {
    if (formType === 'coupon') {
      const { importe, cdistribuidora } = data;
      return { importe, cdistribuidora };
    } else if (formType === 'loan') {
      const { importe, codigoprestamo } = data;
      return { importe, codigoprestamo };
    }
  };

  const handleFormSubmit = (values: FormValues) => {
    const datarequest = getDataFromType();
    const params: PaymentRequest = {
      ...values,
      ...datarequest,
    };

    try {
      onSubmit(params);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form
      form={form}
      onFinish={handleFormSubmit}
      validateMessages={defaultValidateMessages}
      initialValues={{
        concepto: data.concepto,
        importe: data.importe,
      }}
    >
      <div className="px-4">
        <h1 className="text-2xl mb-4">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="py-6 sm:px-4">
        <div className={styles.root}>
          <div>
            <h5 className="text-lg mb-6">Información de pago</h5>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="col-span-2">
                <Form.Item name="concepto">
                  <InputField disabled label="Concepto" />
                </Form.Item>
              </div>
              <div className="col-span-2">
                <Form.Item name="importe">
                  <InputField disabled label="Importe a pagar" />
                </Form.Item>
              </div>
              <div className="col-span-2">
                <Form.Item name="cardtype" label="Tipo de tarjeta" rules={[{ required: true }]}>
                  <Radio.Group className="flex flex-row">
                    <Radio value="VISA">
                      <span>VISA</span>
                    </Radio>
                    <Radio value="MC">
                      <span>MASTERCARD</span>
                    </Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
              <div className="col-span-2">
                <Form.Item name="titular" rules={[{ required: true }]}>
                  <InputField
                    label="Titular de la tarjeta"
                    placeholder="Nombre del titular de la tarjeta"
                  />
                </Form.Item>
              </div>
              <div className="col-span-2">
                <Form.Item
                  name="tarjeta"
                  rules={[{ required: true }]}
                  getValueFromEvent={({ target }) => target.rawValue}
                >
                  <InputMask
                    label="Número de la tarjeta"
                    placeholder="#### #### #### ####"
                    options={{
                      creditCard: true,
                    }}
                  />
                </Form.Item>
              </div>
              <div>
                <Form.Item
                  name="vencimiento"
                  rules={[
                    {
                      required: true,
                      validator: (_, value) => {
                        const dt = dayjs(value, 'MM/YY');
                        const isFuture = dt.isAfter(dayjs());

                        if (dt.isValid() && isFuture) {
                          return Promise.resolve();
                        }

                        return Promise.reject(new Error('Fecha inválida'));
                      },
                    },
                  ]}
                >
                  <InputMask
                    label="Fecha de vencimiento"
                    placeholder="MM/AA"
                    maxLength={5}
                    options={{
                      date: true,
                      datePattern: ['m', 'Y'],
                    }}
                  />
                </Form.Item>
              </div>
              <div>
                <Form.Item name="ccv" rules={[{ required: true }]}>
                  <InputMask
                    type="password"
                    label="Cod. de seguridad"
                    placeholder="###"
                    maxLength={3}
                    options={{
                      numericOnly: true,
                    }}
                  />
                </Form.Item>
              </div>
              <div className="col-span-2">
                <Form.Item name="correoelectronico" rules={[{ required: true }]}>
                  <InputField type="email" label="Correo Electrónico" />
                </Form.Item>
              </div>
              <div className="col-span-2">
                <Button fullWidth text="Realizar Pago" theme="primary" loading={false} />
              </div>
            </div>
            <div className="mt-4">
              <small className="text-xs text-center block">
                Al hacer click en &quot;Realizar Pago&quot; aceptas los{' '}
                <Link href="/legal/terminos-condiciones">
                  <a className="text-price underline">TÉRMINOS Y CONDICIONES</a>
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default PaymentForm;
