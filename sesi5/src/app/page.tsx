import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center px-4">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Click the button on the top right to sign in or sign up
        </h1>
      </div>
    </main>
  );
}
