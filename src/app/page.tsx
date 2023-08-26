import FetchAdvice from "@/components/FetchAdvice";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-900 min-h-screen">
      <div>
        <div>
          <FetchAdvice />
        </div>
      </div>
    </main>
  );
}
