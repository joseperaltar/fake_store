const Card = ({key, title, price, category, thumbnail}) => {
  console.log(thumbnail);
  return (
    <article className="w-64">
      <figure className="relative min-h-figure">
        <div className="bg-hospital-green width p-2 rounded-full absolute right-1 top-1">
          <img className="w-6 h-6" src="data:image/png;base64,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"/>
        </div>
        <img className="w-full rounded-2xl" src={thumbnail}/>
        <p className="absolute bottom-0 left-2 bg-hospital-green rounded-lg px-1 py-0.5 text-sm">
          {category}
        </p>
      </figure>
      <p className="flex justify-between gap-0 mt-2">
        <span className="">{title}</span>
        <span className="font-bold">{`$${price}`}</span>
      </p>
    </article>
  );
}

export default Card;