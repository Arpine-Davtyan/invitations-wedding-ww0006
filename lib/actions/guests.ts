
"use server";

import { supabase } from "@/lib/supabase";
import { orderId } from "../contstants";

export interface CreateGuestParams {
  full_name: string;
  accepted: boolean;
  number: number;
}

// CREATE
export async function createGuest({
  full_name,
  accepted,
  number,
}: CreateGuestParams) {
  const { data, error } = await supabase
    .from("guests")
    .insert({
      full_name,
      accepted,
      number,
      order_id: orderId
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}