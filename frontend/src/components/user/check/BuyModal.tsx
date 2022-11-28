import { Dialog, DialogContent, Box, CircularProgress } from '@mui/material';
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";
import { useDispatch, useSelector } from 'react-redux';

// import { PayPalButtonsComponentProps } from "@paypal/paypal-js/types/components/buttons";

const paypalScriptOptions: PayPalScriptOptions = {
  "client-id": process.env.CLIENT_ID?process.env.CLIENT_ID:'test',
  currency: "USD"
};

function Button(props:any) {
  /**
   * usePayPalScriptReducer use within PayPalScriptProvider
   * isPending: not finished loading(default state)
   * isResolved: successfully loaded
   * isRejected: failed to load
   */
  const {totalAmount} = props;
  const [{ isPending }] = usePayPalScriptReducer();
  const paypalbuttonTransactionProps: any = {
    style: { layout: "vertical" },
    createOrder(data: any, actions: any) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              // currency_code:"JPY",
              value: totalAmount
            }
          }
        ]
      });
    },
    onApprove(data: any, actions: any) {
      /**
       * data: {
       *   orderID: string;
       *   payerID: string;
       *   paymentID: string | null;
       *   billingToken: string | null;
       *   facilitatorAccesstoken: string;
       * }
       */
      return actions.order.capture({}).then((details: any) => {
        alert(
          "Transaction completed by" +
          (details?.payer.name.given_name ?? "No details")
        );

        alert("Data details: " + JSON.stringify(data, null, 2));
      });
    }
  };
  return (
    <>
      {isPending ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress />
      </div> : null}
      <PayPalButtons {...paypalbuttonTransactionProps} />
    </>
  );
}

function BuyModal(props: any) {
  const totalAmount = useSelector((state: any) => state.cart.totalAmount);

  return (
    <>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={props.open}
        onClose={props.handleClose}

      >
        <DialogContent sx={{ padding: '50px, 20px' }}>
          <PayPalScriptProvider options={paypalScriptOptions}>
            <Button totalAmount = {totalAmount}/>
          </PayPalScriptProvider>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default BuyModal;