"use client";

export default function RootLayout({ children }) {
  return (
    <main className="relative w-[95vw] h-[90vh] overflow-hidden">
      {children}
    </main>
  );
}
