interface Props {
  value: string;
  setValue: (val: string) => void;
}

export default function KartInput({ value, setValue }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 16);
    setValue(digits);
  };

  const format = (val: string) => val.replace(/(.{4})/g, "$1 ").trim();

  return (
    <>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Kart Numarası
      </label>
      <input
        type="text"
        inputMode="numeric"
        className="w-full border rounded px-3 py-2 mb-4 tracking-widest"
        placeholder="0000 0000 0000 0000"
        value={format(value)}
        onChange={handleChange}
        required
      />
    </>
  );
}