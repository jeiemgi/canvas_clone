function normalizeScreenWidth(min: number, max: number) {
  let delta = max - min;
  return function (val: number) {
    return (val - min) / delta;
  };
}

export default normalizeScreenWidth;
