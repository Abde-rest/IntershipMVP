import { toast } from "react-toastify";
import { mutate } from "swr";

async function handleAction({ id, status }) {
  try {
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
    const result = await response.json();
    if (response.ok) {
      toast.success("Action successfully!", {
        pauseOnHover: false,
        autoClose: 1000,
      });
      mutate(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/GetAllApllication_Dashbodr_Company`
      );
    } else {
      toast.warn(result.messgae, {
        pauseOnHover: false,
        autoClose: 1000,
      });
    }
    const resulte = await response.json();
    return resulte;
  } catch (error) {
    console.error("Error updating internship:", error);
    toast.error("Failed to Action Appiction. Please try again.", {
      pauseOnHover: false,
      autoClose: 2000,
    });
  }
}

export default handleAction;
