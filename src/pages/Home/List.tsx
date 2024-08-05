import { useQuery } from '@tanstack/react-query';
import { getShoes } from '../../api';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import { Shoe } from '../../types';
import Card from '../../components/Card';
import { useSearchParams } from 'react-router-dom';
import formatParams from '../../utils/formatParams';

const List = () => {
  const [params] = useSearchParams();
  const paramsObj = Object.fromEntries(params.entries());
  const paramsStr = formatParams(paramsObj);

  const { isLoading, error, data } = useQuery<Shoe[]>({
    queryKey: ["shoes", paramsStr],
    queryFn: () => getShoes(paramsStr),
  });

//obje
const obje ={
  size:"38,45",
};

//api isteği url
const url = "?size_like=38&size_like=45";


  return (
    <div className='col-span-4 lg:col-span-3'>
      {isLoading ? (
        <Loader/>) :
        error ? (<Error/>) :
        data && data.length === 0 ? (
          <p>Aradığınız Kriterlere Uygun Ürün Bulunamadı</p>
        ) : (
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6'>
            {data?.map((item) => <Card item={item} key={item.id}/>)}
          </div>
        )

    }
    </div>
  );
}

export default List;
