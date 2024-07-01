import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  const [rates, setRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedCurrencyRate, setSelectedCurrencyRate] = useState(1);

  const API_KEY = '5e745ee4d99563b0d65e8943';  // Asegúrate de reemplazar 'YOUR_API_KEY' con tu clave API real

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`);
        const data = await response.json();
        setRates(data.conversion_rates);
      } catch (error) {
        console.error('Error fetching the exchange rates:', error);
      }
    };

    fetchRates();
  }, [fromCurrency]);

  useEffect(() => {
    if (rates[toCurrency]) {
      setConvertedAmount(amount * rates[toCurrency]);
    }
  }, [rates, amount, toCurrency]);

  useEffect(() => {
    if (rates[selectedCurrency]) {
      setSelectedCurrencyRate(rates[selectedCurrency]);
    }
  }, [rates, selectedCurrency]);

  return (
    <div className="container">
      <h1 className="title">Currency Converter</h1>
      <div className="input-group">
        <label className="label">Amount:</label>
        <input
          type="number"
          className="input-field"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label className="label">From:</label>
        <select
          className="select-field"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="input-group">
        <label className="label">To:</label>
        <select
          className="select-field"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="result">
        <h2 className="result-value">
          {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
        </h2>
      </div>
      <div className="select-container">
        <label className="label">Select currency to see its value in USD:</label>
        <select
          className="select-field"
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="result">
        <h2 className="result-value">
          1 {selectedCurrency} = {selectedCurrencyRate.toFixed(2)} USD
        </h2>
      </div>
    </div>
  );
};

export default CurrencyConverter;
