type TImageSliderProps = {
  id: string;
  image: ImageSourcePropType;
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
