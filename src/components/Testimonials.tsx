<div className="relative max-w-5xl mx-auto">
<div 
  className="overflow-hidden relative h-[400px]"
  onMouseEnter={() => setIsAutoPlaying(false)}
  onMouseLeave={() => setIsAutoPlaying(true)}
>
  <div 
    className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
  >
    {testimonials.map((testimonial, index) => (
      
      <div 
        key={index}
        className="w-full flex-shrink-0 px-4"
      >
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl relative h-full">
          {/* Quote icon */}
          <Quote className="absolute top-8 right-8 text-gray-100 w-16 h-16 -z-0" />
          
          <div className="relative z-10">
            {/* Rating */}
            <div className="flex justify-center mb-8">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  className="w-6 h-6 text-brand-orange mx-1" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Testimonial text */}
            <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed text-center font-medium">
              "{testimonial.quote}"
            </blockquote>
            
            {/* Author */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {testimonial.avatar && (
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-orange/20"
                />
              )}
              <div className="text-center md:text-left">
                <cite className="font-bold text-lg not-italic text-gray-900">{testimonial.author}</cite>
                <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    ))}
  </div>
</div>

{/* Navigation Dots */}
<div className="flex justify-center space-x-3 mt-8">
  {testimonials.map((_, index) => (
    <button
      key={index}
      onClick={() => goToSlide(index)}
      className={`w-3 h-3 rounded-full transition-all duration-300 ${
        currentSlide === index ? 'bg-brand-orange w-8' : 'bg-gray-300 hover:bg-gray-400'
      }`}
      aria-label={`Go to testimonial ${index + 1}`}
    />
  ))}
</div>

{/* Navigation Arrows */}
<button
  onClick={prevSlide}
  className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center text-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-300 group"
  aria-label="Previous testimonial"
>
  <ChevronLeft className="h-6 w-6 group-hover:scale-125 transition-transform" />
</button>

<button
  onClick={nextSlide}
  className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center text-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-300 group"
  aria-label="Next testimonial"
>
  <ChevronRight className="h-6 w-6 group-hover:scale-125 transition-transform" />
</button>
</div>