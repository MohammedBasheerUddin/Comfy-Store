function About() {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-5xl font-bold leading-non tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Your one-stop destination for all your home needs! We understand the
        importance of creating a comfortable and stylish living space, and
        that's why we're here to offer you a curated selection of high-quality
        home products.
      </p>
    </>
  );
}

export default About;
