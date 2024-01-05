"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <section className="flex flex-col items-center py-20">
      <p className="text-3xl">Value is: {count}</p>
      <div className="flex gap-2 my-3">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-slate-900 px-6 rounded-full text-gray-200 text-3xl"
          disabled={!count}
        >
          -
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-slate-900 px-6 rounded-full text-gray-200 text-3xl"
        >
          +
        </button>
      </div>
    </section>
  );
}
