import CustomButton from "@/components/custom-button";
import TextInput from "@/components/text-input";

export default function Home() {
  return (
    <main className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl mb-4">Login</h1>
        <TextInput label="Email" />
        <TextInput label="Password" />
        <CustomButton />
      </div>
    </main>
  );
}
