import { useState } from "react";
import KartInput from "./KartInput";
import CvvInput from "./CvvInput";
import MonthYearSelect from "./MonthYearSelect";

export default function PaymentForm() {
  const [isim, setIsim] = useState<string>("");
  const [kartNumarasi, setKartNumarasi] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [ay, setAy] = useState<string>("");
  const [yil, setYil] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (kartNumarasi.length !== 16) {
      alert("Kart numarası 16 haneli olmalıdır.");
      return;
    }

    if (cvv.length !== 3) {
      alert("CVV 3 haneli olmalıdır.");
      return;
    }

    alert(`İsim: ${isim}
Kart No: ${kartNumarasi.replace(/(.{4})/g, "$1 ").trim()}
Ay: ${ay}
Yıl: ${yil}
CVV: ${cvv}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
    >
      <h2 className="text-2xl font-semibold mb-1">Ödeme Bilgileri</h2>
      <p className="text-gray-500 text-sm mb-6">
        Kredi kartı bilgilerinizi giriniz
      </p>

      <label className="block text-sm font-medium text-gray-700 mb-1">
        Kart Üzerindeki İsim
      </label>
      <input
        type="text"
        className="w-full border rounded px-3 py-2 mb-4"
        placeholder="Eren TEPECIK"
        value={isim}
        onChange={(e) => setIsim(e.target.value)}
        required
      />

      <KartInput value={kartNumarasi} setValue={setKartNumarasi} />
      <div className="flex gap-2">
        <MonthYearSelect ay={ay} yil={yil} setAy={setAy} setYil={setYil} />
        <CvvInput value={cvv} setValue={setCvv} />
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        Şimdi Öde
      </button>
    </form>
  );
}