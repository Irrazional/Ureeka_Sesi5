import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form>
        <input
          type="text"
          placeholder="Enter your name"
          className="border border-gray-300 rounded p-2 mb-4"
        />

        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 rounded p-2 mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
        >
          <input
            type="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded p-2 mb-4"
          />
          Submit
        </button>
      </form>
    </main>
  );
}
