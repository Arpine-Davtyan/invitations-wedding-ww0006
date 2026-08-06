import Divider from "@/components/Divider";
import dynamic from "next/dynamic";

const RSVPForm = dynamic(
  () => import("@/components/RSVPForm"),
  {
    ssr: false,
  }
);

const RSVP = () => {
    return (
        <section className="section">
            <div className="frame-cream">
                <h5 className="text-gold">Kindly reply</h5>
                <h3>Répondez</h3>
                <Divider />
                <RSVPForm />
            </div>
        </section>
    )
}

export default RSVP