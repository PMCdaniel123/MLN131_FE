import { useEffect, useState } from "react";
import { fetchMarketData } from "../services/geminiAPI";

const MarketData = () => {
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMarketData = async () => {
      try {
        const data = await fetchMarketData();
        setMarkets(data);
      } catch (error) {
        console.error("Failed to fetch market data:", error);
      } finally {
        setLoading(false);
      }
    };

    getMarketData();
  }, []);

  if (loading) return <p>Loading market data...</p>;

  return (
    <div>
      <h1>Gemini Market Data</h1>
      <ul>
        {Array.isArray(markets) &&
          markets.map((market) => <li key={market}>{market}</li>)}
      </ul>
    </div>
  );
};

export default MarketData;
