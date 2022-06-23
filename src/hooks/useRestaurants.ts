import { useState } from "react";
import yelp from "../api/yelp";

export type restaurantType = {
  id: string;
  name: string;
  image_url: string;
  rating: number;
  price: string;
};

interface IResult {
  data: null | restaurantType[];
  loading: boolean;
  error: null | string;
}

export const useRestaurants = () => {
  const [result, setResult] = useState<IResult>({
    data: null,
    loading: false,
    error: null,
  });

  const searchRestaurants = async (term: string) => {
    setResult({ ...result, loading: true });

    try {
      const res = await yelp.get("/search", {
        params: {
          limit: 15,
          term,
          location: "Toronto",
        },
      });

      setResult({ data: res.data.businesses, loading: false, error: null });
    } catch (err) {
      setResult({ data: null, loading: false, error: "Something went wrong!" });
    }
  };

  return [result, searchRestaurants] as const;
};
