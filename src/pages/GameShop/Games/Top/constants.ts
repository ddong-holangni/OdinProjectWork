import { nanoid } from "nanoid";
import { ORDER_TITLE } from "@constants/GameShop/constants";

export const orderOptions = [
  {
    id: nanoid(),
    title: ORDER_TITLE.NAME,
  },
  {
    id: nanoid(),
    title: ORDER_TITLE.RELEASE,
  },
  {
    id: nanoid(),
    title: ORDER_TITLE.POPULARITY,
  },
  {
    id: nanoid(),
    title: ORDER_TITLE.RATING,
  },
]