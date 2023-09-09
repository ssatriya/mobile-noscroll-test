export default function TextInput({ label }: { label: string }) {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label htmlFor="email" className="text-sm">
        {label}
      </label>
      <input
        type="text"
        className="border rounded-sm border-black px-4 py-2 bg-white outline outline-transparent focus:outline-emerald-500 focus:outline-2"
      />
    </div>
  );
}
