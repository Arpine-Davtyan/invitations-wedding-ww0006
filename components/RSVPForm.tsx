"use client";

import { useState, useTransition } from "react";
import { motion } from "motion/react";
import { createGuest } from "@/lib/actions/guests";
import Success from "./Success";

import {
  rsvpForm,
  rsvpItem,
  rsvpButton,
} from "@/lib/animations";

export default function RSVPForm() {
  const [fullName, setFullName] = useState("");
  const [attendance, setAttendance] = useState(true);
  const [guests, setGuests] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(async () => {
      try {
        await createGuest({
          full_name: fullName,
          accepted: attendance,
          number: attendance ? guests : 0,
        });

        setSubmitted(true);
      } catch (error) {
        console.error(error);
      }
    });
  };

  if (submitted) {
    return (
      <Success
        attendance={attendance}
      />
    );
  }

  return (
    <motion.div
      className="w-full max-w-xl mx-auto sm:p-2"
      variants={rsvpForm}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <motion.div
          className="form-item"
          variants={rsvpItem}
        >
          <label className="form-label">
            Full Name
          </label>

          <input
            type="text"
            name="fullname"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            className="form-input"
          />
        </motion.div>


        <motion.div
          className="form-item"
          variants={rsvpItem}
        >
          <p className="form-label">
            Will you attend?
          </p>

          <div className="grid grid-cols-2 gap-4">
            <label
              className={`form-radio-label ${attendance
                  ? "bg-gold/10"
                  : "bg-transparent"
                }`}
            >
              <input
                hidden
                type="radio"
                name="attendance"
                checked={attendance}
                onChange={() => setAttendance(true)}
              />

              <span className="text-sm text-gold">
                Joyfully accepts
              </span>
            </label>

            <label
              className={`form-radio-label ${!attendance
                  ? "bg-gold/10"
                  : "bg-transparent"
                }`}
            >
              <input
                hidden
                type="radio"
                name="attendance"
                checked={!attendance}
                onChange={() => setAttendance(false)}
              />

              <span className="text-sm text-gold">
                Regretfully declines
              </span>
            </label>
          </div>
        </motion.div>


        {attendance && (
          <motion.div
            className="form-item"
            variants={rsvpItem}
            initial="hidden"
            animate="visible"
          >
            <label className="form-label">
              Number of Guests
            </label>

            <input
              type="number"
              min={1}
              required
              value={guests}
              onChange={(e) =>
                setGuests(Number(e.target.value))
              }
              className="form-input input-number"
            />
          </motion.div>
        )}


        <motion.button
          type="submit"
          disabled={isPending}
          variants={rsvpButton}
          className="btn"
        >
          {isPending ? "Sending..." : "Send RSVP"}
        </motion.button>
      </form>
    </motion.div>
  );
}