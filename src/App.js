import React from 'react';
import { EmptyIcon } from './components/EmptyIcon';

function App() {
  const [chosenCupcake, setChosenCupcake] = React.useState('');
  const [chosenCocktail, setChosenCocktail] = React.useState('');

  function handleClick(ev, itemId, itemType) {
    ev.preventDefault();
    if (itemType === 'cupcake') {
      if (itemId !== chosenCupcake) {
        setChosenCupcake(itemId);
      } else if (itemId === chosenCupcake) {
        setChosenCupcake('');
      }
    } else if (itemType === 'cocktail') {
      if (itemId !== chosenCocktail) {
        setChosenCocktail(itemId);
      } else if (itemId === chosenCocktail) {
        setChosenCocktail('');
      }
    }
  }

  const items = [
    {
      id: '170345gf',
      name: 'cupcake-01',
      src: '/img/cupcake/cupcake-blue.webp',
      alt: 'cupcake-01',
      type: 'cupcake',
    },
    {
      id: '142045aq',
      name: 'cupcake-02',
      src: '/img/cupcake/cupcake-chocolate.webp',
      alt: 'cupcake-02',
      type: 'cupcake',
    },
    {
      id: '555510qa',
      name: 'cupcake-03',
      src: '/img/cupcake/cupcake-heart.webp',
      alt: 'cupcake-03',
      type: 'cupcake',
    },
    {
      id: '565239ea',
      name: 'cocktail-01',
      src: '/img/cocktail/cocktail-blue-lagoon.webp',
      alt: 'cocktail-fantasy-01',
      type: 'cocktail',
    },
    {
      id: '585042hz',
      name: 'cocktail-02',
      src: 'img/cocktail/cocktail-mai-tai.webp',
      alt: 'cocktail-02',
      type: 'cocktail',
    },
    {
      id: '585542hz',
      name: 'cocktail-05',
      src: 'img/cocktail/cocktail-pina-colada.webp',
      alt: 'cocktail-05',
      type: 'cocktail',
    },
  ];

  const typeValues = Array.from(new Set(items.map((item) => item.type)));

  const chosenStyle = 'mx-auto rounded-lg border-2 border-green-500';
  const notChosenStyle =
    'mx-auto border-transparent border-2 hover:border-gray-500 rounded-lg';

  return (
    <div className='flex items-center justify-center h-screen bg-gray-900'>
      <div className='max-w-md p-4 overflow-hidden rounded'>
        <h3 className='text-center text-gray-200 text-base md:text-2xl'>
          Choose one item from each category
        </h3>
        <div className='py-6 flex justify-center w-full'>
          {/* <div className='relative inline-flex group'>
            <div className='absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
            <a
              href="#_"
              role='button'
              aria-label='reset button'
              onClick={() => {
                setChosenCupcake('');
                setChosenCocktail('');
              }}
              className='relative inline-flex items-center justify-center px-6 py-2 md:px-8 md:py-2 text-sm md:text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 uppercase'
            >
              Reset
            </a>
          </div> */}
          <button
            type='button'
            aria-label='reset button'
            onClick={() => {
              setChosenCupcake('');
              setChosenCocktail('');
            }}
            className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
          >
            <span className='relative px-6 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 uppercase'>
              Reset
            </span>
          </button>
        </div>
        <div className='grid grid-cols-3 gap-4 pb-4 mx-auto md:grid-cols-3'>
          {typeValues.map((typeValue) =>
            items.map(
              (item) =>
                item.type === typeValue && (
                  <button
                    key={item.id}
                    type='button'
                    className={
                      chosenCupcake === item.id || chosenCocktail === item.id
                        ? chosenStyle
                        : notChosenStyle
                    }
                    aria-label='nft-item'
                    onClick={(ev) => handleClick(ev, item.id, item.type)}
                  >
                    <img
                      className='mx-auto rounded-lg'
                      width='200'
                      height='200'
                      src={item.src}
                      alt={item.alt}
                    />
                  </button>
                )
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
