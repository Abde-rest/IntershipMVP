"use client";
import useSWR from "swr";

export const GetDataInterships = (UrlEndpoint) => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(UrlEndpoint, fetcher, {
    revalidateIfStale: true,
    revalidateOnMount: true,
  });
  return { data, error, isLoading };
};
