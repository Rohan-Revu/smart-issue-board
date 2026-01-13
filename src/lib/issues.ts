import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";
import { Issue } from "@/types/issue";
import { isSimilar } from "@/utils/similarity";

export async function getRecentIssues() {
  const q = query(
    collection(db, "issues"),
    orderBy("createdAt", "desc"),
    limit(20)
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() })) as Issue[];
}

export async function createIssue(issue: Issue) {
  await addDoc(collection(db, "issues"), issue);
}

export async function checkSimilarIssues(title: string) {
  const issues = await getRecentIssues();
  return issues.filter((i) => isSimilar(i.title, title));
}

export async function updateIssueStatus(id: string, status: Issue["status"]) {
  await updateDoc(doc(db, "issues", id), { status });
}
