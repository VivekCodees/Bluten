import Card from './Card';
import CardImg from '../../public/card_img.png'



const CardSection = () => {
  const cardsData = [
    {
      imageSrc: CardImg,
      title: 'Cannabis Flos 18/1 PT Mango',
      cultivar: 'Mango',
      genetics: 'Hybrid',
      price: '11,66',
    },
    {
      imageSrc: CardImg,
      title: 'Cannabis Flos 18/1 PT Mango',
      cultivar: 'Mango',
      genetics: 'Hybrid',
      price: '11,66',
    },
    {
      imageSrc: CardImg,
      title: 'Cannabis Flos 18/1 PT Mango',
      cultivar: 'Mango',
      genetics: 'Hybrid',
      price: '11,66',
    },
    {
      imageSrc: CardImg,
      title: 'Cannabis Flos 18/1 PT Mango',
      cultivar: 'Mango',
      genetics: 'Hybrid',
      price: '11,66',
    },
    {
      imageSrc: CardImg,
      title: 'Cannabis Flos 18/1 PT Mango',
      cultivar: 'Mango',
      genetics: 'Hybrid',
      price: '11,66',
    },
    {
      imageSrc: CardImg,
      title: 'Cannabis Flos 18/1 PT Mango',
      cultivar: 'Mango',
      genetics: 'Hybrid',
      price: '11,66',
    },
    {
      imageSrc: CardImg,
      title: 'Cannabis Flos 18/1 PT Mango',
      cultivar: 'Mango',
      genetics: 'Hybrid',
      price: '11,66',
    },
    {
      imageSrc: CardImg,
      title: 'Cannabis Flos 18/1 PT Mango',
      cultivar: 'Mango',
      genetics: 'Hybrid',
      price: '11,66',
    },
    {
      imageSrc: CardImg,
      title: 'Cannabis Flos 18/1 PT Mango',
      cultivar: 'Mango',
      genetics: 'Hybrid',
      price: '11,66',
    },
    
  ];

  return (
    <div className="w-full md:w-3/4 p-4 place-items-center  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[10px]">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          cultivar={card.cultivar}
          genetics={card.genetics}
          price={card.price}
          />
        ))}
    </div>
  );
};

export default CardSection;
