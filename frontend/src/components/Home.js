import { useGetAllProductsQuery } from '../redux/api/productsApi';
import Product from './Product';

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  return (
    <main className='homeContainer'>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error has occured</p>
      ) : (
        <>
          <h1>Latest Models</h1>
          <section className='products'>
            {data?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </section>
        </>
      )}
    </main>
  );
};

export default Home;
