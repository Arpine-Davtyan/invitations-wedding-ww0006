"use client";

import { SealIcon } from "@phosphor-icons/react";

const Divider = () => {
  return (
    <div className="flex-center gap-2 my-2 sm:my-3">
      <div className="w-10 h-px bg-linear-to-r from-transparent to-gold-accent" />

      <SealIcon
        size={10}
        weight="fill"
        className="text-gold-accent"
      />

      <div className="w-10 h-px bg-linear-to-l from-transparent to-gold-accent" />
    </div>
  );
};

export default Divider;