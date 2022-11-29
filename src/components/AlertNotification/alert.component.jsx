import { Alert, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { alertActions } from '../../store/slices/alertSlice';

const AlertNotification = () => {
  const message = useSelector(({ alert }) => alert.alertMessage);

  const open = useSelector(({ alert }) => alert.alertBox);
  const dispatch = useDispatch();

  // const close = dispatch(alertActions.closeAlertBox);
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      onClose={() => dispatch(alertActions.closeAlertBox())}
      autoHideDuration={6000}
    >
      <Alert severity='success' variant='filled'>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertNotification;
