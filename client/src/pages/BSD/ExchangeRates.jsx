import { useEffect, useState } from "react";
import {
  AddScheduleOfSeniorMgtModal,
  ExchangeRatesHeader,
  ExchangeRatesRow,
} from "../../components";
import apiRequest from "../../lib/apiRequest";

const ExchangeRates = () => {
  const [exchangeRates, setExchangeRates] = useState([]);
  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    fetchExchangeRatesData();
  }, []);

  const fetchExchangeRatesData = async () => {
    try {
      const exchangeRatesData = await apiRequest.get("/exchange-rate-info");
      setExchangeRates(exchangeRatesData.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-[1440px] w-full mx-auto py-10 overflow-hidden">
      <div className="flex justify-center flex-col gap-5 w-full">
        <h2 className="text-3xl text-center">Exchange Rates Information</h2>

        <div className="overflow-x-auto">
          <table className="border-collapse w-full mb-10">
            <ExchangeRatesHeader />

            <tbody>
              {exchangeRates &&
                exchangeRates.map((trustAcc) => (
                  <ExchangeRatesRow
                    key={trustAcc.rowId}
                    trustAcc={trustAcc}
                    onRecordAdded={fetchExchangeRatesData}
                  />
                ))}
            </tbody>
          </table>
        </div>

        <button
          onClick={openModal}
          type="button"
          className="border px-5 py-1 w-fit ml-8 rounded-md transition-all hover:bg-gray-400 hover:text-white duration-300"
        >
          Add
        </button>
      </div>

      <AddScheduleOfSeniorMgtModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onRecordAdded={fetchExchangeRatesData}
      />
    </div>
  );
};

export default ExchangeRates;
