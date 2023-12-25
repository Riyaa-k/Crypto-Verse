
import React from 'react';
import millify from 'millify';
import Link from 'antd/es/typography/Link';
import { Typography, Row, Col, Statistic } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import News from "../components/News";
import Cryptocurrencies from "../components/Cryptocurrencies"
import Loader from './Loader';
// import { Cryptocurrencies,News } from "../components/Cryptocurrencies"

const { Title } = Typography;

const HomePage = () => {
  const { data, isFetching, isError } = useGetCryptosQuery(10);
  console.log(data);

  if (isFetching) return <Loader />;

  if (isError) return 'Error fetching data';

  const globalStats=data?.data?.stats;

 

  return (
    <>
      <Title level={2} className='heading'>
        Global crypto stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24th volume" value={millify(globalStats.total24hVolume
)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
        </Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className='show-more'><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      
      <Cryptocurrencies simplified={true}/>
      <div className="home-heading-container">
        <Title level={2} className='home-title'>Latest Crypto News</Title>
        <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show more</Link></Title>
      </div>
      <News  simplified/>

    </>
  );
};

export default HomePage;
