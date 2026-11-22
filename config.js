// ===== إعدادات ترفت الطيب =====
// 1) افتح Firebase Console > Project settings > Your apps > Web app
// 2) انسخ firebaseConfig والصقه بدل null بالأسفل
// ما دامت القيمة null يعمل الموقع في «وضع العرض» بمزايدين وهميين.

export const firebaseConfig = null;

/* مثال:
export const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "tarfat-alteeb.firebaseapp.com",
  projectId: "tarfat-alteeb",
  storageBucket: "tarfat-alteeb.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
*/

// بريد المدير (نفس البريد في ملف firestore.rules)
export const ADMIN_EMAIL = 'taraft.tf@gmail.com';
