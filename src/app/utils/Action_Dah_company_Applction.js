import { mutate } from "swr";

async function handleAction({ id, status }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/ApplyPage/apply/Action_Apply_Dah_company`,
    {
      method: "POST",
      body: JSON.stringify({
        id: id,
        status: status,
      }),
    }
  );
  if (response.ok) {
    mutate(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/GetAllApllication_Dashbodr_Company`
    );
  }
  const resulte = await response.json();
  return resulte;
}

export default handleAction;
