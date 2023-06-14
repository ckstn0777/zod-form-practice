import RegisterForm from "./components/templates/RegisterForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-[72px] max-w-[640px] mx-auto">
      <h2 className="font-notoSansKr text-4xl font-bold text-primary mb-16">
        Chan 소모임
      </h2>

      <RegisterForm />
    </main>
  );
}
