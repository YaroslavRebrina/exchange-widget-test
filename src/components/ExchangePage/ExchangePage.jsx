import { useSelector } from 'react-redux';
import { useGetExchangesQuery } from 'store/exchangesAPI';

const ExchangePage = () => {
  const value = useSelector(state => state.currency);
  console.log(value);
  const data = useGetExchangesQuery(value);
  console.log(data);
  return <></>;
};

export default ExchangePage;
