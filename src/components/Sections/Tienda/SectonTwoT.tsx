export default function SectionTwoT() {
  const items = [
    {
      id: 1,
      image: "/images/tienda/aralia.png",
      title: "Aralia",
      price: "$ 200.000",
    },
    {
      id: 2,
      image: "/images/tienda/bamboo.png",
      title: "Bamboo",
      price: "$ 150.000",
    },
    {
      id: 3,
      image: "/images/tienda/cactus.png",
      title: "Cactus",
      price: "$ 300.000",
    },
    {
      id: 4,
      image: "/images/tienda/calendula.png",
      title: "Calendula",
      price: "$ 120.000",
    },
    {
      id: 5,
      image: "/images/tienda/dalia.png",
      title: "Dalia",
      price: "$ 180.000",
    },
    {
      id: 6,
      image: "/images/tienda/gasteria.png",
      title: "Gasteria",
      price: "$ 250.000",
    },
    {
      id: 7,
      image: "/images/tienda/halcyon.png",
      title: "Halcyon",
      price: "$ 220.000",
    },
    {
      id: 8,
      image: "/images/tienda/kalanchoe.png",
      title: "Kalanchoe",
      price: "$ 280.000",
    },
    {
      id: 9,
      image: "/images/tienda/lavanda.png",
      title: "Lavanda",
      price: "$ 100.000",
    },
    {
      id: 10,
      image: "/images/tienda/orquidea.png",
      title: "Orquidea",
      price: "$ 130.000",
    },
    {
      id: 11,
      image: "/images/tienda/savila.png",
      title: "Savila",
      price: "$ 140.000",
    },
    {
      id: 12,
      image: "/images/tienda/tulipan.png",
      title: "Tulipan",
      price: "$ 170.000",
    },
  ];
  return (
    <div className="flex justify-center  items-center pt-20 pb-20">
     
      <div className="grid grid-cols-3 gap-12 w-4/5 items-center justify-center">
        {items.map((item) => (
          <div key={item.id} className="space-evenly">
           
            <div className="flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-[325px] h-[325px]"
              />
            </div>
            
            <h2 className="text-lg font-semibold text-left mt-2">{item.title}</h2>
            <p className="text-gray-600 mt-2 text-left">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
