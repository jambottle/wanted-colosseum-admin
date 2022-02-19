import Container from '@mui/material/Container';
import DeliveryRequestInfo from 'components/DeliveryManagement/RequestInfo';
import DeliveryRequestList from 'components/DeliveryManagement/RequestList';

export default function DeliveryManagement() {
  return (
    <Container component="main" maxWidth="xl">
      <DeliveryRequestInfo />
      <DeliveryRequestList />
    </Container>
  );
}
