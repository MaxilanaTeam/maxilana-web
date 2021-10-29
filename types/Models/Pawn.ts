export type PawnStatus = 'Activa' | 'Extraviada' | 'Vencida';

export interface PawnAccount {
  name: string;
  status: PawnStatus;
  requestDate: string;
  startDate: string;
  dueDate: string;
  loanAmount: number;
  accountNumber: string;
  accountLetter: string;
  description: string;
  paymentAmount: number;
  minPaymentAmount: number;
  totalPaymentAmount: number;
  dueDays: number; //DiasVencidos
  limitDueDays: number; //DiasVencidosPermitidos
  normalDailyInterest: number; //InteresDiarioNormal
  dueDailyInterest: number; //InteresDiarioVencido
  minDaysToPay: number; //DiasPagoMinimo
  amountToAply: number; //SaldoPorAplicar
  paymentPendingToApply: boolean; // RefrendoPendienteAplicar
  accountBlocked: boolean; // BoletaBloqueada
  branch: string; // CodigoSucursal
  extraCharge: number; //comision
}

export interface PawnPaymentSuccess {
  reference3D: string;
  branchCode: string;
  branchName: string;
  accountNumber: string;
  paymentAmount: number;
  authCode: string;
  reference: string;
}

interface PawnByMonth {
  month: number;
  commonLoan: number;
  commonInterest: number;
  bronzeLoan: number;
  bronzeInterest: number;
  silverLoan: number;
  silverInterest: number;
  goldenLoan: number;
  goldenInterest: number;
}

export interface PawnCalculation {
  maxMonthlyPaymentLimit: number; // Plazo Máximo
  config: PawnByMonth[];
}
