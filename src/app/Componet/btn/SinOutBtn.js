"use client";
import React from "react";
import { signOut } from "next-auth/react";
const SinOutBtn = () => {
  return <button onClick={() => signOut()}>Sign out</button>;
};

export default SinOutBtn;
