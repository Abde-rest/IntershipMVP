"use client";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// Register Arabic font

// Font.register({

// })
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: "#ffffff",
  },
  section: {
    marginBottom: 15,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    color: "#1a365d",
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "left",
    color: "#2d3748",
    fontWeight: "bold",
  },
  text: {
    fontSize: 12,
    marginBottom: 8,
    textAlign: "left",
    lineHeight: 1.4,
    color: "#4a5568",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
    marginVertical: 15,
  },
  note: {
    fontSize: 10,
    fontStyle: "italic",
    marginTop: 15,
    textAlign: "left",
    color: "#718096",
  },
  signatureSection: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  signatureBox: {
    width: "45%",
    borderTopWidth: 1,
    borderTopColor: "#e2e8f0",
    paddingTop: 10,
  },
  boldText: {
    fontWeight: "bold",
    color: "#2d3748",
  },
  dateSection: {
    marginBottom: 15,
    textAlign: "right",
  },
  companyInfo: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#f7fafc",
    borderRadius: 5,
  },
  termsSection: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f7fafc",
    borderRadius: 5,
  },
  commitments: {
    marginTop: 15,
    marginBottom: 15,
  },
  commitmentItem: {
    flexDirection: "row",
    marginBottom: 5,
  },
  bullet: {
    width: 10,
    textAlign: "center",
  },
});

export const TrainingAcceptancePDF = ({ agreement }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Training Agreement</Text>

        <View style={styles.dateSection}>
          <Text style={styles.text}>Date: {agreement.agreementDate}</Text>
        </View>

        <View style={styles.companyInfo}>
          <Text style={styles.subHeader}>Company Information</Text>
          <Text style={styles.text}>
            Company Name:{" "}
            <Text style={styles.boldText}>{agreement.companyName}</Text>
          </Text>
          <Text style={styles.text}>
            Training Program:{" "}
            <Text style={styles.boldText}>{agreement.trainingProgram}</Text>
          </Text>
        </View>

        <View style={styles.termsSection}>
          <Text style={styles.subHeader}>Training Terms</Text>
          <Text style={styles.text}>
            Duration: <Text style={styles.boldText}>{agreement.duration}</Text>
          </Text>
          <Text style={styles.text}>
            Start Date:{" "}
            <Text style={styles.boldText}>{agreement.startDate}</Text>
          </Text>
          <Text style={styles.text}>
            End Date: <Text style={styles.boldText}>{agreement.endDate}</Text>
          </Text>
        </View>

        <View style={styles.commitments}>
          <Text style={styles.text}>
            The trainee {agreement.studentName} commits to the following:
          </Text>
          <View style={styles.commitmentItem}>
            <Text style={[styles.text, styles.bullet]}>•</Text>
            <Text style={styles.text}>
              Regular attendance at all training sessions
            </Text>
          </View>
          <View style={styles.commitmentItem}>
            <Text style={[styles.text, styles.bullet]}>•</Text>
            <Text style={styles.text}>
              Active participation in all required tasks and activities
            </Text>
          </View>
          <View style={styles.commitmentItem}>
            <Text style={[styles.text, styles.bullet]}>•</Text>
            <Text style={styles.text}>
              Adherence to work schedules and company policies
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        <Text style={styles.note}>
          Note: This opportunity is facilitated through the &quot;Tadrib&quot;
          platform, which acts as a neutral intermediary between both parties.
          The platform aims to provide an inspiring environment for learning and
          development without imposing any legal obligations on either party.
        </Text>

        <View style={styles.signatureSection}>
          <View style={styles.signatureBox}>
            <Text style={styles.text}>Trainee Signature</Text>
            <Text style={styles.text}>{agreement.studentName}</Text>
          </View>
          <View style={styles.signatureBox}>
            <Text style={styles.text}>Company Representative Signature</Text>
            <Text style={styles.text}>{agreement.companyName}</Text>
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
