"use client";
import Spinner from "@/app/Componet/spinnerUi/spinner";
import ApplicationsTable from "@/app/Dahborde_company/Application/compont/ApplicationsTable";
import useSWR from "swr";
const Content = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/GetAllApllication_Dashbodr_Company`,
    fetcher
  );

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ApplicationsTable data={data} error={error} />
      )}
    </>
  );
};

export default Content;
