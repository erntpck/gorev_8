interface Props {
  ay: string;
  yil: string;
  setAy: (val: string) => void;
  setYil: (val: string) => void;
}

export default function MonthYearSelect({ ay, yil, setAy, setYil }: Props) {
  const aylar = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  const mevcutYil = new Date().getFullYear();
  const yillar = Array.from({ length: 5 }, (_, i) => mevcutYil + i);

  return (
    <>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">Ay</label>
        <select
          value={ay}
          onChange={(e) => setAy(e.target.value)}
          className="w-full border rounded px-2 py-2"
          required
        >
          <option value="">AA</option>
          {aylar.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">Yıl</label>
        <select
          value={yil}
          onChange={(e) => setYil(e.target.value)}
          className="w-full border rounded px-2 py-2"
          required
        >
          <option value="">YY</option>
          {yillar.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>
    </>
  );
}