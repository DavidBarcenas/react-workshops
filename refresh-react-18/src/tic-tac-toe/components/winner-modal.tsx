interface Props {
  winner: any;
}

export function WinnerModal({ winner }: Props) {
  return winner !== null ? (
    <section className='fixed top-0 left-0 w-full h-full bg-black/70 grid place-content-center animate-zoom'>
      <div className='bg-orange-300 min-w-[600px] py-10'>
        <h2 className='text-5xl font-bold mb-4'>
          {winner === false ? 'Empate' : 'Ganó: ' + winner}
        </h2>
      </div>
    </section>
  ) : null;
}
