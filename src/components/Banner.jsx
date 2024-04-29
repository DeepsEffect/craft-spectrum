import { Carousel, Typography } from "@material-tailwind/react";
import { Fade, Slide } from "react-awesome-reveal";

export default function Banner() {
  return (
    <Carousel autoplay={true} autoplayDelay={4000} loop={true}>
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
              className="mb-4 text-xl font-frank md:text-4xl lg:text-5xl"
            >
              <Slide direction="down">Explore the Palette of Creativity</Slide>
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-md lg:text-xl"
            >
              <Fade direction="up" duration={2000}>
                Step into the diverse world of Craft Spectrum, where creativity
                knows no bounds. Discover a spectrum of art and craft
                subcategories, from traditional to contemporary, and unleash
                your imagination like never before.
              </Fade>
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
              className="mb-4 text-xl font-frank md:text-4xl lg:text-5xl"
            >
              <Slide direction="down">
                Handmade Creations for Every Passion
              </Slide>
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-md lg:text-xl"
            >
              <Fade direction="up" duration={2000}>
                {" "}
                Immerse yourself in a world of handmade wonders. Discover unique
                creations crafted with passion and precision by artisans from
                around the globe. Whether you&apos;re a seasoned crafter or just
                starting your journey, find the perfect project to bring your
                vision to life.
              </Fade>
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
              className="mb-4 font-frank text-xl md:text-4xl lg:text-5xl"
            >
              <Slide direction="down">
                Your Gateway to Artistic Exploration
              </Slide>
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-md lg:text-xl"
            >
              <Fade direction="up" duration={2000}>
                Craft Spectrum invites you to embark on an immersive journey of
                artistic exploration. Delve into an array of art and craft
                subcategories, curated to ignite your creativity and inspire
                your next masterpiece.
              </Fade>
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
