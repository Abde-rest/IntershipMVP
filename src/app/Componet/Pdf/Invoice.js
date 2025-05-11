"use client";
import { Document, Page, Text, View, StyleSheet , Font } from "@react-pdf/renderer";

// Register Arabic font

// Font.register({

// })
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: "#ffffff",
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 22,
    marginBottom: 22,
    textAlign: "center",
    color: "#000000",
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: "left",
    color: "#000000",
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    marginBottom: 18,
    textAlign: "left",
    lineHeight: 1.5,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    marginVertical: 20,
  },
  note: {
    fontSize: 12,
    fontStyle: "italic",
    marginTop: 20,
    textAlign: "left",
    color: "#666666",
  },
  signatureSection: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  signatureBox: {
    width: "45%",
    borderTopWidth: 1,
    borderTopColor: "#000000",
    paddingTop: 10,
  },
  boldText: {
    fontWeight: "bold",
  },
});

export const TrainingAcceptancePDF = ({ agreement }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Training Acceptance Agreement</Text>

        <Text style={styles.text}>
          This agreement is made on{" "}
          <Text style={styles.boldText}>{agreement.agreementDate}</Text>,
          between <Text style={styles.boldText}>{agreement.companyName}</Text>{" "}
          and the student{" "}
          <Text style={styles.boldText}>{agreement.studentName}</Text>, for
          participation in the training program offered by the company in the
          field of{" "}
          <Text style={styles.boldText}>{agreement.trainingProgram}</Text>.
        </Text>

        <Text style={styles.text}>
          The student agrees to join the training on the specified date and
          adhere to the requirements set by the company. The training will last
          for <Text style={styles.boldText}>{agreement.duration}</Text>,
          starting from{" "}
          <Text style={styles.boldText}>{agreement.startDate}</Text> and ending
          on <Text style={styles.boldText}>{agreement.endDate}</Text>.
        </Text>

        <Text style={styles.text}>
          The student commits to attending the training sessions regularly and
          participating in all required tasks. This opportunity is facilitated
          by <Text style={styles.boldText}>"Tadrib"</Text>, which acts as a
          neutral bridge between both parties. The platform's goal is to enable
          effective communication and provide an inspiring environment for
          learning and development — without imposing any legal obligations on
          either party.
        </Text>

        <View style={styles.signatureSection}>
          <View style={styles.signatureBox}>
            <Text style={styles.text}>Student Signature</Text>
          </View>
          <View style={styles.signatureBox}>
            <Text style={styles.text}>Company Representative Signature</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
{
  /* تم إعداد هذا البيان بتاريخ [تاريخ العقد]، بين [اسم الشركة] والطالـب [اسم
        الطالب]، بخصوص المشاركة في برنامج التدريب الذي تقدمه الشركة في مجال [وصف
        البرنامج التدريبي]. يوافق الطالب على الالتحاق بالتدريب في التاريخ المحدد
        والالتزام بالشروط والمتطلبات التي تحددها الشركة. تستمر فترة التدريب لمدة
        [حدد المدة]، ابتداءً من [تاريخ البداية] وحتى [تاريخ النهاية]. يتعهد
        الطالب بالمواظبة على حضور جلسات التدريب والمشاركة في جميع المهام
        المطلوبة. يتم تسهيل هذه الفرصة من خلال منصة [اسم المنصة]، التي تعمل كجسر
        محايد بين الطرفين، وتهدف إلى تمكين التواصل الفعال وتوفير بيئة ملهمة
        للتعلم والتطوير — دون فرض أي التزامات قانونية على أي من الطرفين. */
}
