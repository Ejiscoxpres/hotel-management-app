import Image from "next/image";

export const heading1 = (<>
  

  <h1 className="font-heading mb-6">Explore Our Magnificent Hotel</h1>
        <p className="text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg">
            Experience a Magnificent Hotel Immersed in Rich History and Timeless 
            Beauty.
        </p>
        <button className="btn-primary">Get Started</button>


</>
);

export const section2 =(
 
<div className="md:grid hidden gap-8 grid-cols-1">
<div className="rounded-2xl overflow-hidden h-48">
    <Image
     src="/images/star-6.jpg"
     alt="star-6" 
    width={300} 
    height={300}
    className="img scale-animation"
    />
</div>       
<div className="grid grid-cols-2 gap-8 h-48">
<div className="rounded-2xl overflow-hidden">
    <Image
    src="/images/star-2.jpg"
    alt="star-2" 
    width={300} 
    height={300}
    className="img scale-animation"
    />
</div>

<div className="rounded-2xl overflow-hidden">
    <Image
    src="/images/star-3.jpg"
    alt="star-3" 
    width={300} 
    height={300}
    className="img scale-animation"
    />
</div>

</div>   


</div>
);