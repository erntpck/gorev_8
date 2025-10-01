interface Props {
  value: string;
  setValue: (val: string) => void;
}

export default function CvvInput({ value, setValue }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 3);
    setValue(digits);
  };

  return (
    <div className="flex-1">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Güvenlik Kodu
      </label>
      <input
        type="text"
        inputMode="numeric"
        className="w-full border rounded px-3 py-2"
        placeholder="123"
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
}