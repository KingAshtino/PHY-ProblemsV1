const imgSrc = `${import.meta.env.BASE_URL}skier-moguls.png`;

export function MogulFigure() {
  return (
    <figure className="figure-photo">
      <img
        src={imgSrc}
        alt="Side view of a skier moving left to right over repeated asymmetric moguls. The uphill is long and gentle; the downhill is short and steep. Points A through E mark a trough, uphill, crest, downhill, and the next trough."
      />
      <figcaption>
        Skier traveling over repeated asymmetric moguls. Motion to the right. Gentle uphill, steep
        downhill. Center-of-mass path dashed. Diagram generated with ChatGPT 5.6.
      </figcaption>
    </figure>
  );
}
