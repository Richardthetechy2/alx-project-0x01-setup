import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Welcome to our Application!
          </h1>
          <p className="text-white mt-4 text-xl">
            We're glad you're here. Explore and enjoy your experience.
          </p>
          <button className="mt-6 px-6 py-3 text-blue-500  bg-white font-semibold hover:bg-gray-200 transition-colors rounded-full">
            Get Started
          </button>
        </div>
      </main>
    </div>
  )
}

export default Home;