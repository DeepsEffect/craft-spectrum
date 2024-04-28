import { Carousel, Typography } from "@material-tailwind/react";

export default function Banner() {
  return (
    <Carousel className="" autoplay={true} autoplayDelay={4000} loop={true}>
      {/* slider 1 */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1607346705566-b2b5048ae44a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 1"
          className="h-[400px] lg:h-[800px] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/65">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Explore the Palette of Creativity
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Step into the diverse world of Craft Spectrum, where creativity
              knows no bounds. Discover a spectrum of art and craft
              subcategories, from traditional to contemporary, and unleash your
              imagination like never before.
            </Typography>
          </div>
        </div>
      </div>
      {/* slider 2 */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1525606846543-2b3c14f8e18f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 1"
          className="h-[400px] lg:h-[800px] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/65">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Handmade Creations for Every Passion
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Immerse yourself in a world of handmade wonders. Discover unique
              creations crafted with passion and precision by artisans from
              around the globe. Whether you're a seasoned crafter or just
              starting your journey, find the perfect project to bring your
              vision to life.
            </Typography>
          </div>
        </div>
      </div>
      {/* slider 3 */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1605700311233-cbef0730016a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 1"
          className="h-[400px] lg:h-[800px] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/65">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Your Gateway to Artistic Exploration
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Craft Spectrum invites you to embark on an immersive journey of
              artistic exploration. Delve into an array of art and craft
              subcategories, curated to ignite your creativity and inspire your
              next masterpiece.
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
