import { IoIosSearch } from "react-icons/io";
import FilterDrobDowen from "./compont/FilterDrobDowen";
import Content from "./content";

// This would typically come from an API
// async function getApplications() {
//   // In a real app, you would fetch from your API endpoint
//   // For example: const res = await fetch('/api/applications')

//   // Simulating API response for demonstration
//   return [
//     {
//       id: "1",
//       name: "John Doe",
//       email: "john.doe@example.com",
//       phone: "+1 (555) 123-4567",
//       cvLink: "https://example.com/cv/johndoe.pdf",
//       links: {
//         linkedin: "https://linkedin.com/in/johndoe",
//         github: "https://github.com/johndoe",
//       },
//       appliedAt: "2023-05-15T10:30:00Z",
//     },
//     {
//       id: "2",
//       name: "Jane Smith",
//       email: "jane.smith@example.com",
//       phone: "+1 (555) 987-6543",
//       cvLink: "https://example.com/cv/janesmith.pdf",
//       links: {
//         linkedin: "https://linkedin.com/in/janesmith",
//         github: null,
//       },
//       appliedAt: "2023-05-16T14:45:00Z",
//     },
//     {
//       id: "3",
//       name: "Alex Johnson",
//       email: "alex.johnson@example.com",
//       phone: "+1 (555) 456-7890",
//       cvLink: "https://example.com/cv/alexjohnson.pdf",
//       links: {
//         linkedin: "https://linkedin.com/in/alexjohnson",
//         github: "https://github.com/alexjohnson",
//       },
//       appliedAt: "2023-05-17T09:15:00Z",
//     },
//     {
//       id: "4",
//       name: "Sarah Williams",
//       email: "sarah.williams@example.com",
//       phone: "+1 (555) 234-5678",
//       cvLink: "https://example.com/cv/sarahwilliams.pdf",
//       links: {
//         linkedin: null,
//         github: "https://github.com/sarahwilliams",
//       },
//       appliedAt: "2023-05-18T11:20:00Z",
//     },
//     {
//       id: "5",
//       name: "Michael Brown",
//       email: "michael.brown@example.com",
//       phone: "+1 (555) 876-5432",
//       cvLink: "https://example.com/cv/michaelbrown.pdf",
//       links: {
//         linkedin: "https://linkedin.com/in/michaelbrown",
//         github: "https://github.com/michaelbrown",
//       },
//       appliedAt: "2023-05-19T16:10:00Z",
//     },
//   ];
// }

// في حالة القبول:

// إرسال إشعار للمستخدم (مثلاً: عبر البريد الإلكتروني أو إشعار داخل الموقع).

// الاحتفاظ بالطلب في قاعدة البيانات مع حالة القبول.

// 📤 في حالة الرفض:

// حفظ سبب الرفض في حقل rejection_reason أو notes.

// إرسال إشعار للمستخدم بنتيجة الرفض.

// يُفضل جدًا الاحتفاظ بالطلب في قاعدة البيانات لأسباب مثل:

// التوثيق والمراجعة لاحقًا.

// منع المستخدم من تقديم نفس الطلب مرتين.

// تحليل جودة الطلبات (إحصائيات).

// 🧠 هل يجب حفظ الطلبات المرفوضة؟
// ✅ نعم، وبقوة.

// 📚 الأسباب:
// التوثيق القانوني والإداري.

// تحليل البيانات: معرفة كم نسبة القبول/الرفض.

// منع التكرار: إذا حاول المستخدم إرسال نفس الطلب بعد رفضه.

// المراجعة لاحقًا: قد تتم إعادة تقييم الطلب لاحقًا.

export default async function page({ searchParams }) {
  // const applications = await getApplications();
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/GetAllApllication_Dashbodr_Company`,
  //   {
  //     method: "POST",
  //     body: JSON.stringify({
  //       id: id,
  //     }),
  //   }
  // );

  // const resulte = await response.json();
  // console.log("resulte From the server ");
  // console.log(resulte);

  // const query = searchParams.q || "";

  // Filter applications based on search query
  // const filteredApplications = query
  //   ? applications.filter(
  //       (app) =>
  //         app.name.toLowerCase().includes(query.toLowerCase()) ||
  //         app.email.toLowerCase().includes(query.toLowerCase())
  //     )
  //   : applications;

  return (
    <div className="container mx-auto py-10 px-4  overflow-x-hidden ">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mb-6">Internship Applications</h1>
        <FilterDrobDowen />
      </div>

      <div className="relative mb-6">
        <form className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <IoIosSearch className="h-4 w-4" />
          </div>
          <input
            type="search"
            placeholder="Search by name or email..."
            name="q"
            // defaultValue={query}
            className="pl-10 pr-4 py-2 w-full md:w-80 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </form>
      </div>
      <Content />
    </div>
  );
}
