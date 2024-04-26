import { Carousel } from "@material-tailwind/react";
 
 export default function Banner() {
  return (
    <Carousel className="">
      <img
        src="https://images.unsplash.com/photo-1607346705566-b2b5048ae44a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image 1"
        className="h-[400px] lg:h-[800px] w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1525606846543-2b3c14f8e18f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image 2"
        className="h-[400px] lg:h-[800px] w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1614916872450-3a0130b8fd92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image 3"
        className="h-[400px] lg:h-[800px] w-full object-cover"
      />
    </Carousel>
  );
}
