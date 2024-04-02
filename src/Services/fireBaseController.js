import { db } from "../firebaseConfig";
import { ref, remove, update, push } from "firebase/database";
import { toast } from "react-toastify";

function addNotice({ noticeText }) {
  push(ref(db, "Notices/Notice"), { noticeText: noticeText })
    .then(() => {
      toast.success("Notice added to board");
    })
    .catch((err) => {
      toast.warn(err);
    });
}

function removeNotice(noticeId) {
  console.log(noticeId);
  remove(ref(db, "Notices/Notice/" + noticeId))
    .then(() => {
      toast.success("Notice removed from board");
    })
    .catch((error) => {
      toast.warn("Complaint could not be marked active");
    });
}

function markSolved(complaintId) {
  update(ref(db, "Maintenance/Complaints/" + complaintId), {
    status: 1,
  })
    .then(() => {
      toast.success("Complaint marked resolved");
    })
    .catch((error) => {
      toast.warn("Complaint could not be marked resolved");
    });
}

function markActive(complaintId) {
  update(ref(db, "Maintenance/Complaints/" + complaintId), {
    status: 0,
  })
    .then(() => {
      toast.success("Complaint marked active");
    })
    .catch((error) => {
      toast.warn("Complaint could not be marked active");
    });
}

export { addNotice, removeNotice, markActive, markSolved };
