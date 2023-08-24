import type { HomepageDocument } from "types.generated";
import { HomepageDocumentDataBodyHomepageProjectSlice } from "types.generated";

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
  const array = data.body.concat().filter(({ slice_type }) => {
    return slice_type === sliceType;
  }) as HomepageDocumentDataBodyHomepageProjectSlice[];

  return array.filter((i) => i.primary.enabled);
};
