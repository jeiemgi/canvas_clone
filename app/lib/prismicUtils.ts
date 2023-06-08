import type { HomepageDocument } from "types.generated";

export const findSliceByType = (
  { data }: HomepageDocument,
  sliceType: string
) => {
  return data.body.find(({ slice_type }) => slice_type === sliceType);
};

export const findAllSlicesByType = (
  { data }: HomepageDocument,
  sliceType: string
) => {
  return data.body.filter(({ slice_type }) => slice_type === sliceType);
};
