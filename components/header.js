import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between px-4 py-6 bg-black/70 text-white">
      <h1 className="font-semibold text-xl">Next Blog</h1>

      <nav>
        <ul className="flex gap-3">
          <li>
            <Link href="post-one">Post 1</Link>
          </li>
          <li>
            <Link href="post-two">Post 2</Link>
          </li>
          <li>
            <Link href="post-three">Post 3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
