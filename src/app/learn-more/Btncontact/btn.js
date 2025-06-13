"use client";

export default function Btncontact() {
  return (
    <button
      onClick={() => {
        window.location.href = "mailto:abdethomes20048@gmail.com";
      }}
      className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center mx-auto gap-2">
      Send us an Email
    </button>
  );
}
