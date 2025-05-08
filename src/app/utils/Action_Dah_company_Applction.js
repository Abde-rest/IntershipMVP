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
    const resulte = await response.json();
    console.log("Read Resulte ");

    if (response.ok) {
      console.log("Toast Action is success");
      toast.success("Action successfully!", {
        pauseOnHover: false,
        autoClose: 1000,
      });
      mutate(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/GetAllApllication_Dashbodr_Company`
      );
    } else {
      console.log("Toast Action is fail 1");
      toast.warn(result.messgae, {
        pauseOnHover: false,
        autoClose: 1000,
      });
    }
    return resulte;
  } catch (error) {
    console.log("Toast Action is fail 2");
    console.error("Error updating internship:", error);
    toast.error("Failed to Action Appiction. Please try again.", {
      pauseOnHover: false,
      autoClose: 2000,
    });
  }
}

export default handleAction;
