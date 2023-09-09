import TextInput from "@/components/text-input";

export default function Home() {
  return (
    <main className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl mb-4">Login</h1>
        <TextInput label="Email" />
        <TextInput label="Password" />
        <button className="hover:bg-orange-400 bg-orange-300 transition-all rounded-sm mt-2 w-full hover:shadow-[3px_3px_0px_black] py-2 shadow-none hover:translate-x-[-3px] hover:translate-y-[-3px] active:shadow-none active:translate-x-[1px] active:translate-y-[1px]">
          Sign in
        </button>
      </div>
    </main>
  );
}
