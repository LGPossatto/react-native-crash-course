import { useState } from "react";
import yelp from "../api/yelp";

import { restaurantType } from "./useRestaurants";

interface IResult {
  data: null | restaurantType;
  loading: boolean;
  error: null | string;
}

export const useRestaurant = () => {
  const [result, setResult] = useState<IResult>({
    data: null,
    loading: false,
    error: null,
  });

  const searchRestaurant = async (id: string) => {
    setResult({ ...result, loading: true });

    try {
      const res = await yelp.get(`/${id}`);

      setResult({ data: res.data, loading: false, error: null });
    } catch (err) {
      setResult({ data: null, loading: false, error: "Something went wrong!" });
    }
  };

  return [result, searchRestaurant] as const;
};
