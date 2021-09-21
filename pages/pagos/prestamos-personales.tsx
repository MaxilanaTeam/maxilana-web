import { NextPage } from 'next';
import { useState } from 'react';
import { checkLoanAccount } from '~/api/payments';

import { HelpSidebar, Layout } from '~/components/layout';
import PaymentForm, { LoanAccountForm, LoanSelectionPaymentForm } from '~/components/payments';
import { LoanAccount } from '~/types/Models';
import { DefaultPageProps } from '~/types/DefaultPageProps';

export { default as getStaticProps } from '~/utils/defaultGetStaticProps';

const questionList = [
  {
    id: 1,
    label: '¿Qué es un refrendo?',
    href: '/preguntas-frecuentes#que-es-refrendo',
  },
  {
    id: 2,
    label: '¿Qué es un empeño?',
    href: '/preguntas-frecuentes#que-es-un-empeno',
  },
  {
    id: 3,
    label: '¿Por qué no se puede pagar el refrendo completo del empeño en línea?',
    href: '/preguntas-frecuentes#que-es-un-empeno',
  },
];

type Payment = { concept: string; amount: number } | null;

type Status = 'account_status' | 'select_payment' | 'payment';

const PersonalLoanPaymentPage: NextPage<DefaultPageProps> = ({ cities, legalPages }) => {
  const [payment, setPayment] = useState<Payment>(null);
  const [status, setStatus] = useState<Status>('account_status');
  const [account, setAccount] = useState<LoanAccount | null>(null);

  return (
    <Layout
      title="Abona a tu préstamo personal en línea"
      cities={cities}
      meta={{ css: ['/antd/form.css', '/antd/radio.css'] }}
      legalPages={legalPages}
    >
      <div className="container mx-auto py-6">
        <div className="grid grid-flow-col gap-6">
          <div>
            {status === 'account_status' && (
              <LoanAccountForm
                onSubmit={async (data) => {
                  const account = await checkLoanAccount(data);
                  setAccount(account);
                  setStatus('select_payment');
                }}
              />
            )}
            {status === 'select_payment' && account && (
              <LoanSelectionPaymentForm
                account={account}
                onSubmit={(data) => {
                  setPayment({
                    amount: data.pago,
                    concept: `ABONO A PRÉSTAMO NÚMERO ${account.clientCode}`,
                  });

                  setStatus('payment');
                  return Promise.resolve();
                }}
              />
            )}
            {status === 'payment' && payment && (
              <PaymentForm
                data={payment}
                title="Préstamos personales"
                description="Abona a tu préstamo personal en línea"
                onSubmit={(data) => {
                  console.log(data);
                  return Promise.resolve();
                }}
              />
            )}
          </div>
          <aside className="hidden lg:block">
            <HelpSidebar questions={questionList} />
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default PersonalLoanPaymentPage;
