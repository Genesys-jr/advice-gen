import Image from "next/image";

type slip = {
  id: number;
};

export default async function Home() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const advice: slip = await res.json();

  return (
    <main className="bg-slate-900 min-h-screen">
      <div>
        <div>{advice.id}</div>
      </div>
    </main>
  );
}
 