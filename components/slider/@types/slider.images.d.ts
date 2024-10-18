type TImageSliderProps = {
  id: string | number;
  image: ImageSourcePropType | string;
};

type TImageSliderItemProps = {
  item: TImageSliderProps;
  index: number;
  scrollX: SharedValue<number>;
};

type TSliderPaginatorProps = {
  items: TImageSliderProps[];
  paginationIndex: number;
  scrollX: SharedValue<number>;
};
