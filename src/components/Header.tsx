const Header = () => {
  return (
    <div className="bg-[#C0E8EB] flex flex-col items-center justify-center gap-6 py-8 px-4 md:py-12 md:px-6 text-center">
      <div className="w-40 sm:w-48 md:w-56 lg:w-64">
        <img src="/fox.png" alt="fox" className="w-full h-auto object-contain" />
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F505A] max-w-3xl">
        The free, fun, and effective way to study your courses!
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2 w-full max-w-xl">
        <button className="relative bg-gradient-to-b from-[#c86400] to-[#e47403] text-white shadow-lg px-6 py-3 rounded-lg text-lg md:text-xl font-medium before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/40 before:via-transparent before:to-transparent before:rounded-lg before:pointer-events-none hover:shadow-xl transition-shadow">
          Let's get started
        </button>

        <button className="relative bg-white text-[#c86400] border-2 border-[#C0E8EB] shadow-lg px-6 py-3 rounded-lg text-lg md:text-xl font-medium hover:shadow-xl hover:bg-gray-50 transition-all">
          I have an account already
        </button>
      </div>
    </div>
  )
}

export default Header
